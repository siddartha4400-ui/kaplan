<?php

namespace App\Models;

use Illuminate\Support\Facades\Http;

class Activity
{
    public static function fetchActivities()
    {
        $response = Http::get("https://kp-lms-static.s3.us-east-2.amazonaws.com/activities.json");

        if ($response->failed()) {
            return null;
        }

        return $response->json();
    }
}
