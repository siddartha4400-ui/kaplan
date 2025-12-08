<?php

namespace App\Models;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class Activity
{
    public static function fetchActivities()
    {
        $path = 'activities.json';

        // 1️⃣ Check if local JSON exists
        if (Storage::exists($path)) {
            $json = Storage::get($path);
            return json_decode($json, true);
        }

        // 2️⃣ If NOT exist → Call API
        $response = Http::withoutVerifying()->get("https://kp-lms-static.s3.us-east-2.amazonaws.com/activities.json");

        if ($response->failed()) {
            return null;   // API also failed
        }

        $data = $response->json();

        // 3️⃣ Save API data locally for next time
        Storage::put($path, json_encode($data, JSON_PRETTY_PRINT));

        return $data;
    }
}
