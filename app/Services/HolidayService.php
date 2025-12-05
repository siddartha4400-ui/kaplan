<?php

namespace App\Services;

use Carbon\Carbon;

class HolidayService
{
          public $holidays = [];

          public function __construct()
          {
                    // Generate holidays once per month
                    $this->holidays = $this->generateFestivalHolidays();
          }

          /** Generate 5 festival holidays dynamically for current month */
          public function generateFestivalHolidays()
          {
                    $year = Carbon::now()->year;
                    $month = Carbon::now()->month;

                    $numDays = Carbon::create($year, $month)->daysInMonth;

                    // Select 5 random unique days
                    $randomDays = collect(range(1, $numDays))
                              ->shuffle()
                              ->take(5)
                              ->values();

                    $festivalReasons = [
                              "Dussehra",
                              "Diwali",
                              "Bathukamma",
                              "Ganesh Nimajjanam",
                              "Durga Puja"
                    ];

                    $festivalReasons = collect($festivalReasons)->shuffle()->values();

                    $holidays = [];

                    foreach ($randomDays as $index => $day) {
                              $date = Carbon::create($year, $month, $day)->format("Y-m-d");

                              $holidays[] = [
                                        "date"   => $date,
                                        "reason" => $festivalReasons[$index],
                              ];
                    }

                    return $holidays;
          }

          public function isHoliday(Carbon $date)
          {
                    foreach ($this->holidays as $holiday) {
                              if ($holiday['date'] === $date->format('Y-m-d')) {
                                        return [
                                                  'is_holiday' => true,
                                                  'reason'     => $holiday['reason']
                                        ];
                              }
                    }

                    return [
                              'is_holiday' => false,
                              'reason'     => null
                    ];
          }
}
