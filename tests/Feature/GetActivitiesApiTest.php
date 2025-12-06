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
    public function api_returns_success()
    {
        $response = $this->get('/api/activities');
        $response->assertStatus(200);
    }

    #[Test]
    public function api_returns_correct_json_structure()
    {
        $response = $this->get('/api/activities');
        $response->assertJsonStructure([
            'success',
            'message',
            'data' => [
                'shedule' => ['*' => ['date', 'activity', 'time', 'isWorkingday', 'reason']],
                'holidays' => ['*' => ['date', 'reason']],
            ]
        ]);
    }

    #[Test]
    public function api_validates_schedule_data()
    {
        $response = $this->get('/api/activities');
        $json = $response->json();
        $holidays_array = array_column($json['data']['holidays'], 'date');

        foreach ($json['data']['shedule'] as $data) {
            $date = Carbon::parse($data['date']);
            $totalActivityMinutes = array_sum(array_column($data['activity'], 'durationMinutes'));

            if ($date->isWeekend() || in_array($data['date'], $holidays_array)) {
                $this->assertFalse($data['isWorkingday']);
                $this->assertEquals(0, $data['time']);
            } else {
                $this->assertTrue($data['isWorkingday']);
                $this->assertLessThanOrEqual(130, $data['time']);
                $this->assertEquals($totalActivityMinutes, $data['time']);
            }
        }
    }
}
