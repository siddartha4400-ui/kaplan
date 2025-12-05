<?php

namespace App\Http\Controllers;

use App\Services\ActivityService;
use App\Services\HolidayService;

class ActivityController extends Controller
{
    private $activityService;
    private $holidayService;
    function __construct(ActivityService $activityService, HolidayService $holidayService)
    {
        $this->activityService = $activityService;
        $this->holidayService = $holidayService;
    }
    public function index()
    {
        return tryCatchHelper(function () {
            return apiResponse(true, 'successful', $this->activityService->filterActivities(), 201);
        });
    }
    public function holidaysJsonData()
    {
        return tryCatchHelper(function () {
            return apiResponse(true, 'successful', $this->holidayService->holidays, 201);
        });
    }
}
