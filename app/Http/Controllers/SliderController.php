<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Slider;

class SliderController extends Controller
{
    public function store(Request $request)
    {
        return tryCatchHelper(function () use ($request) {
            // Attempt to find existing slider with key = 1
            $slider = \App\Models\Slider::firstOrNew(['key' => 1]);

            // Store or update the JSON field
            $slider->json = $request->all();
            $slider->save();

            return response()->json([
                'message' => 'Slider saved successfully.',
                'data' => $slider
            ], 200);
        });
    }

    public function getSliderData($key)
    {
        try {
            $slider = \App\Models\Slider::where('key', $key)->first();

            if (!$slider) {
                return response()->json([
                    'message' => 'No slider found for the given key',
                    'data' => null
                ], 404);
            }

            return response()->json([
                'message' => 'Slider data retrieved successfully',
                'data' => $slider
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error retrieving slider data',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
