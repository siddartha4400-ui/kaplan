<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    // Table name (optional if follows Laravel naming)
    protected $table = 'sliders';

    // Fields that can be mass-assigned
    protected $fillable = ['json', 'key'];

    // Cast the 'json' field to an associative array automatically
    protected $casts = [
        'json' => 'array',
    ];
}
