<?php

namespace App\Services;

use App\Models\Activity;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Symfony\Component\HttpKernel\HttpCache\Store;

class ActivityService
{
          private $activity;

          public function __construct(Activity $activity)
          {
                    $this->activity = $activity;
          }

          public function filterActivities()
          {
                    $activities = collect($this->activity->fetchActivities()['activities']);
                    $result = [];
                    $activitiesArray = [];
                    $totalTime = 0;
                    $newRow = false;
                    $totalActivities = $activities->count();
                    $count = 0;
                    // Start from TODAY (correct way)
                    $currentDate = Carbon::today();
                    // to check current day is weekend or not
                    if ($currentDate->isWeekend()) {
                              $data = $this->nextWorkingDay($currentDate, $result);
                              $result = $data['result'];
                              $currentDate = $data['nextWorkingDay'];
                    }

                    $activities->map(function ($item) use (&$currentDate, &$result, &$totalTime, &$activitiesArray, &$newRow, &$count, &$totalActivities) {
                              $count++;
                              $totalTime += $item['durationMinutes'];
                              if ($totalTime < 120) {
                                        $activitiesArray[] = $item;
                              } elseif ($totalTime == 120) {
                                        $activitiesArray[] = $item;
                                        $newRow = true;
                              } elseif ($totalTime <= 130) {
                                        $activitiesArray[] = $item;
                                        $newRow = true;
                              } elseif ($totalTime > 130) {
                                        $oldTime = $totalTime - $item['durationMinutes'];
                                        $needTime = 120 - $oldTime;
                                        $newTime = $item['durationMinutes'] - $needTime;
                                        $item['durationMinutes'] = $needTime;
                                        // $item['isWorkingday'] = true;
                                        $activitiesArray[] = $item;
                                        $result[] = [
                                                  'date' => $currentDate->format('Y-m-d'),
                                                  'activity' => $activitiesArray,
                                                  'time' =>  120,
                                                  'isWorkingday' => true
                                        ];
                                        // $currentDate = $currentDate->addDay();
                                        $data = $this->nextWorkingDay($currentDate, $result);
                                        $result = $data['result'];
                                        $currentDate = $data['nextWorkingDay'];
                                        $item['durationMinutes'] = $newTime;
                                        $totalTime = $newTime;
                                        $activitiesArray = [];
                                        $activitiesArray[] = $item;
                                        // $newRow = false;
                              }
                              if ($newRow == true) {
                                        $result[] = [
                                                  'date' => $currentDate->format('Y-m-d'),
                                                  'activity' => $activitiesArray,
                                                  'time' =>  $totalTime,
                                                  'isWorkingday' => true
                                        ];
                                        // $currentDate = $currentDate->addDay();
                                        $data = $this->nextWorkingDay($currentDate, $result);
                                        $result = $data['result'];
                                        $currentDate = $data['nextWorkingDay'];
                                        $activitiesArray = [];
                                        $newRow = false;
                                        $totalTime = 0;
                              }
                              if ($totalActivities == $count) {
                                        $result[] = [
                                                  'date' => $currentDate->format('Y-m-d'),
                                                  'activity' => $activitiesArray,
                                                  'time' =>  $totalTime,
                                        ];
                              }
                    });
                    // storeCustomLogs($result, 'siddulog');
                    return $result;
          }
          function nextWorkingDay($currentDate, $result)
          {
                    if ($currentDate->isSaturday()) {
                              $result[] = [
                                        'date' => $currentDate->format('Y-m-d'),
                                        'activity' => [],
                                        'time' =>  0,
                                        'isWorkingday' => false,
                              ];
                              $currentDate = $currentDate->addDay();
                              $result[] = [
                                        'date' => $currentDate->format('Y-m-d'),
                                        'activity' => [],
                                        'time' =>  0,
                                        'isWorkingday' => false,
                              ];
                              $currentDate = $currentDate->addDay();
                    } elseif ($currentDate->isSunday()) {
                              $result[] = [
                                        'date' => $currentDate->format('Y-m-d'),
                                        'activity' => [],
                                        'time' =>  0,
                                        'isWorkingday' => false,
                              ];
                              $currentDate = $currentDate->addDay();
                    } else {
                              $currentDate = $currentDate->addDay();
                              if ($currentDate->isWeekend()) {
                                        $data = $this->nextWorkingDay($currentDate, $result);
                                        $result = $data['result'];
                                        $currentDate = $data['nextWorkingDay'];
                              }
                    }
                    // storeCustomLogs($currentDate->addDay(), 'siddulog');
                    return ['result' => $result, 'nextWorkingDay' => $currentDate];
          }
}
