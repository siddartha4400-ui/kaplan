<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LinkedTable extends Model
{
    use HasFactory;

    protected $table = 'linked_table';

    protected $fillable = [
        'type',
        'ref_id',
        'entity_id',
        'entity_type',
        'created_at',
        'updated_at',
    ];

    public $timestamps = false;

    public function tableEditor()
    {
        return $this->hasMany(Editor::class, 'id' ,'entity_id');
    }
    // protected $casts = [
    //     'created_at' => 'integer',
    //     'updated_at' => 'integer',
    // ];
}
