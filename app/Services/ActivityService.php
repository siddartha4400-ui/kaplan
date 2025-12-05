<?php

namespace App\Services;

use App\Models\Activity;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Symfony\Component\HttpKernel\HttpCache\Store;

class ActivityService
{
          public $activity;
          public $holidayService;
          const STUDY_TIME_PER_DAY = 120;
          const PRESITION = 10;

          public function __construct(Activity $activity, HolidayService $holidayService)
          {
                    $this->activity = $activity;
                    $this->holidayService = $holidayService;
          }

          public function filterActivities()
          {
                    $activities = collect($this->activity->fetchActivities()['activities'] ?? []);
                    $result = [];
                    $activitiesArray = [];
                    $totalTime = 0;
                    $newRow = false;
                    // storeCustomLogs($this->holidayService->holidays, 'siddulog');
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
                    return ['shedule' => $result, 'holidays' => $this->holidayService->holidays];
          }
          function nextWorkingDay($currentDate, $result = [])
          {
                    $holiday = $this->holidayService->isHoliday($currentDate);
                    // CASE 1: Weekend or festival holiday
                    if ($currentDate->isWeekend() || $holiday['is_holiday']) {
                              $reason = $currentDate->isSaturday() ? 'saturday' : ($currentDate->isSunday() ? 'sunday' : $holiday['reason']);
                              $result[] = $this->activitiesArrayConstructor($currentDate, [], 0, false, $reason);
                              // Move to next day (very important to use copy)
                              $nextDate = $currentDate->copy()->addDay();
                              // 🔁 RECURSE and return its result
                              return $this->nextWorkingDay($nextDate, $result);
                    }
                    // CASE 2: Working day found → stop recursion
                    return [
                              'result' => $result,
                              'nextWorkingDay' => $currentDate
                    ];
          }

          function activitiesArrayConstructor($currentDate, $activitiesArray, $time, $isWorkingday, $reason = '')
          {
                    return [
                              'date' => $currentDate->format('Y-m-d'),
                              'activity' => $activitiesArray,
                              'time' =>  $time,
                              'isWorkingday' => $isWorkingday,
                              'reason' => $reason
                    ];
          }
}
