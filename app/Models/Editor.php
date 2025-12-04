<?php

namespace App\Models;

use App\Models\File;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Editor extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'country',
        'qualification',
        'biography',
        'researchInterests',
        'affiliation',
        'chiefEditor',
        'photo',
    ];
    public function photoFile()
    {
        return $this->belongsTo(File::class, 'photo', 'fid');
    }
    public function getEditorMOdel($id)
    {
        // Define key mappings
        $keyMapping = [
            'photo_file' => 'photo',
        ];
        $data = Editor::with([
            'photoFile' => function ($query) {
                $query->select(['fid', 'fid as fileId', 'file_path as filePath', 'file_name as filename']);
            }
        ])->where('id', $id)->first();
        // Check if data exists
        if (!$data) {
            return null;
        }

        // Convert to collection and rename keys
        $updatedData = collect($data->toArray())
            ->mapWithKeys(function ($item, $key) use ($keyMapping) {
                return [$keyMapping[$key] ?? $key => $item];
            });

        // Store logs
        storeCustomLogs($updatedData->toArray(), 'siddulog');

        return $updatedData;
    }
    public function getEditordDropdownModle()
    {
        $data = Editor::select(['id as value', 'name as label', 'chiefEditor', 'photo' ,'affiliation'])->with([
            'photoFile' => function ($query) {
                $query->select(['fid', 'fid as fileId', 'file_path as filePath', 'file_name as filename' ]);
            }
        ])->get()->groupBy('chiefEditor')->toArray();
        return $data;
    }
}
