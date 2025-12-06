<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use PHPUnit\Framework\Attributes\Test;
use Carbon\Carbon;

class GetActivitiesApiTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function api_returns_correct_json_structure()
    {
        $response = $this->get('/api/activities');

        $response->assertStatus(200);

        $response->assertJsonStructure([
            'success',
            'message',
            'data' => [
                'shedule' => [
                    '*' => [
                        'date',
                        'activity',
                        'time',
                        'isWorkingday',
                        'reason',
                    ]
                ],
                'holidays' => [
                    '*' => [
                        'date',
                        'reason'
                    ]
                ]
            ]
        ]);
        $json = $response->json();
        $holidays = $json['data']['holidays'];
        $holidays_array = array_column($holidays, 'date');

        foreach ($json['data']['shedule'] as $data) {
            $date = Carbon::parse($data['date']);
            $totalActivityMinutes = array_sum(array_column($data['activity'], 'durationMinutes'));

            // Check if weekend OR holiday
            if ($date->isWeekend() || in_array($data['date'], $holidays_array)) {
                $this->assertFalse($data['isWorkingday'], "Date {$data['date']} is weekend/holiday but isWorkingday is true");
                $this->assertEquals(0, $data['time'], "Date {$data['date']} is weekend/holiday but time is not zero");
            } else {
                // Working day rules
                $this->assertTrue($data['isWorkingday'], "Date {$data['date']} is weekday but isWorkingday is false");
                $this->assertLessThanOrEqual(130, $data['time'], "Date {$data['date']} time exceeds 130");
                $this->assertEquals($totalActivityMinutes, $data['time'], "Sum of activity durations does not match time on {$data['date']}");
            }
        }
    }
}
