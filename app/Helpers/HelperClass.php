<?php

use Illuminate\Support\Facades\Log;

function storeCustomLogs($data, $fileName)
{
    Log::build([
        'driver' => 'daily',
        'path' => storage_path('logs/' . $fileName . '.log'),
        'permission' => 0777,
    ])->info($data);
}

function tryCatchHelper(callable $callback, string $logFile = "custom_log")
{
    try {
        return $callback();
    } catch (\Exception $e) {
        storeCustomLogs([
            'error' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine(),
        ], $logFile);

        return apiResponse(false, 'Something went wrong, please try again!', null, 500);
    }
}

function apiResponse(bool $success, string $message, $data = null, $statusCode = null)
    {
        // If no status code is provided, set it based on success/failure
        if ($statusCode === null) {
            $statusCode = $success ? 200 : 400; // Default: 200 for success, 400 for failure
        }

        return response()->json([
            'success' => $success,
            'message' => $message,
            'data' => $data,
        ], $statusCode);
    }
