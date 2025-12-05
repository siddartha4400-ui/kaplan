<?php

namespace App\Http\Controllers;

use App\Services\ActivityService;

class ActivityController extends Controller
{
    private $activityService;
    function __construct(ActivityService $activityService)
    {
        $this->activityService = $activityService;
    }
    public function index()
    {
        return tryCatchHelper(function () {
            return apiResponse(true, 'successful', $this->activityService->filterActivities(), 201);
        });
    }
}
