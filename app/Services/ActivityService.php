<?php

namespace App\Services;

use App\Models\Activity;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Symfony\Component\HttpKernel\HttpCache\Store;

class ActivityService
{
          public $activity;
          const STUDY_TIME_PER_DAY = 120;
          const PRESITION = 10;

          public function __construct(Activity $activity)
          {
                    $this->activity = $activity;
          }

          public function filterActivities()
          {
                    $activities = collect($this->activity->fetchActivities()['activities'] ?? []);
                    $result = [];
                    $activitiesArray = [];
                    $totalTime = 0;
                    $newRow = false;
                    // Start from TODAY (correct way)
                    $data = $this->nextWorkingDay(Carbon::today());
                    $result = array_merge($result, $data['result']);
                    $currentDate = $data['nextWorkingDay'];
                    foreach ($activities as $item) {
                              $totalTime += $item['durationMinutes'];
                              if ($totalTime < self::STUDY_TIME_PER_DAY) {
                                        $activitiesArray[] = $item;
                              } elseif ($totalTime == self::STUDY_TIME_PER_DAY || $totalTime <= (self::STUDY_TIME_PER_DAY + self::PRESITION)) {
                                        $activitiesArray[] = $item;
                                        $newRow = true;
                              } elseif ($totalTime > self::STUDY_TIME_PER_DAY + self::PRESITION) {
                                        $oldTime = $totalTime - $item['durationMinutes'];
                                        $needTime = 120 - $oldTime;
                                        $newTime = $item['durationMinutes'] - $needTime;
                                        $item['durationMinutes'] = $needTime;
                                        // $item['isWorkingday'] = true;
                                        $activitiesArray[] = $item;
                                        $result[] = $this->activitiesArrayConstructor($currentDate, $activitiesArray, 120, true);
                                        // $currentDate = $currentDate->addDay();
                                        $data = $this->nextWorkingDay($currentDate->addDay());
                                        $result = array_merge($result, $data['result']);
                                        $currentDate = $data['nextWorkingDay'];
                                        $item['durationMinutes'] = $newTime;
                                        $totalTime = $newTime;
                                        $activitiesArray = [];
                                        $activitiesArray[] = $item;
                                        // $newRow = false;
                              }
                              if ($newRow == true) {
                                        $result[] = $this->activitiesArrayConstructor($currentDate, $activitiesArray, $totalTime, true);
                                        $data = $this->nextWorkingDay($currentDate->addDay());
                                        $result = array_merge($result, $data['result']);
                                        $currentDate = $data['nextWorkingDay'];
                                        $activitiesArray = [];
                                        $newRow = false;
                                        $totalTime = 0;
                              }
                    }
                    if (!empty($activitiesArray)) {
                              $result[] = $this->activitiesArrayConstructor($currentDate, $activitiesArray, $totalTime, true);
                    }
                    // storeCustomLogs($result, 'siddulog');
                    return $result;
          }
          function nextWorkingDay($currentDate)
          {
                    $result = [];
                    if ($currentDate->isSaturday()) {
                              $result[] = $this->activitiesArrayConstructor($currentDate, [], 0, false);
                              $currentDate = $currentDate->addDay();
                              $result[] = $this->activitiesArrayConstructor($currentDate, [], 0, false);
                              $currentDate = $currentDate->addDay();
                    } elseif ($currentDate->isSunday()) {
                              $result[] = $this->activitiesArrayConstructor($currentDate, [], 0, false);
                              $currentDate = $currentDate->addDay();
                    }
                    // storeCustomLogs($currentDate->addDay(), 'siddulog');
                    return ['result' => $result, 'nextWorkingDay' => $currentDate];
          }
          function activitiesArrayConstructor($currentDate, $activitiesArray, $time, $isWorkingday)
          {
                    return [
                              'date' => $currentDate->format('Y-m-d'),
                              'activity' => $activitiesArray,
                              'time' =>  $time,
                              'isWorkingday' => $isWorkingday
                    ];
          }
}
