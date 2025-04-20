<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArticleType extends Model
{
    use HasFactory;

    // Optional: explicitly set the table name if it doesn't match the plural form
    // protected $table = 'article_types';

    protected $fillable = [
        'title',
    ];
}
