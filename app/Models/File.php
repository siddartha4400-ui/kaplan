<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class File extends Model
{
    use HasFactory;

    protected $table = 'files';

    protected $primaryKey = 'fid';
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;

    protected $fillable = [
        'file_path',
        'file_mime',
        'file_size',
        'file_name',
        'file_status',
        'file_location',
        'file_format',
        'created_at',
    ];

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($file) {
            // Remove "storage/" prefix to get the correct file path
            $filePath = str_replace('storage/', '', $file->file_path);

            // Log the file being checked
            // storeCustomLogs(['checking_file' => $filePath], 'siddulog');

            // Ensure correct disk is used
            if (Storage::disk('public')->exists($filePath)) {
                // Delete the file from storage
                Storage::disk('public')->delete($filePath);
                // storeCustomLogs(['file_deleted_from_storage' => $filePath], 'siddulog');
            } else {
                // Log missing file details
                storeCustomLogs([
                    'file_not_found_in_storage' => $filePath,
                    'existing_files' => Storage::disk('public')->files('uploads/photoOurJournal')
                ], 'siddulog');
            }
        });
    }

    public function createfile($file, $path)
    {
        return self::create([
            'file_path'     => 'storage/' . $path, // Public storage path
            'file_mime'     => $file->getMimeType(),
            'file_size'     => $file->getSize(),
            'file_name'     => $file->getClientOriginalName(),
            'file_status'   => 'uploaded',  // Default status
            'file_location' => 'local',     // Assuming local storage
            'file_format'   => $file->getClientOriginalExtension(),
            'created_at'    => time(), // Proper timestamp handling
        ]);
    }
}
