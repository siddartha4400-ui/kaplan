<?php

namespace App\Services;

use App\Models\File;
use Illuminate\Http\Request;

class FileServices
{
    public $file_object;
    public $request;
    public function __construct(Request $request)
    {
        $this->file_object = new File;
        $this->request = $request;
    }
    public function insertFile()
    {
        try {
            // Get input field name dynamically
            $inputName = trim(array_key_first($this->request->allFiles()));
            $file =  $this->request->file($inputName);

            // Validate dynamically
            $this->request->validate([
                $inputName => 'required|file|max:5120',
            ]);

            $folderName = $inputName; // Folder path structure

            // Store file in dynamic folder inside 'uploads/'
            $path = $file->store("uploads/$folderName", 'public');
            $fileData = $this->file_object->createfile($file, $path);
            storeCustomLogs($fileData, 'siddulog');
            return response()->json([
                'fileId'   => $fileData->fid, // Return file ID
                'filePath' => asset($fileData->file_path),
                'filename' => $fileData->file_name
            ], 201);
        } catch (\Exception $e) {
            // DB::rollBack();
            return response()->json([
                'message' => 'File upload failed',
                'error'   => $e->getMessage()
            ], 500);
        }
    }
}
