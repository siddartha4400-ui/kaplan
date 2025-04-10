<?php

namespace App\Services;

use App\Models\Editor;

class EditorService
{
    public $editor;
    public function __construct()
    {
        $this->editor = new Editor;
    }
    public function createEditorService($request)
    {
        try {
            // storeCustomLogs($request, 'siddulog');
            $data = $this->prepareData($request);
            // Attempt to create the Editor entry
            if ($request['edit']) {
                $editor = Editor::findOrFail($request['edit']);
                $editor->update($data);
                return $editor;
            } else {
                return Editor::create($data);
            }
        } catch (\Exception $e) {
            // Log the exception correctly
            storeCustomLogs([
                'error' => $e->getMessage(),
                'line' => $e->getLine(),
                'file' => $e->getFile(), // Corrected from getPage()
                'trace' => $e->getTraceAsString() // Useful for debugging
            ], 'siddulog');

            // Optionally rethrow or return a response
            throw new \Exception("Failed to create journal: " . $e->getMessage());
        }
    }

    public function prepareData($data)
    {
        return [
            'name' => $data['name'] ?? null,
            'country' => $data['country'] ?? null,
            'qualification' => $data['qualification'] ?? null,
            'biography' => $data['biography'] ?? null,
            'researchInterests' => $data['researchInterests'] ?? null,
            'affiliation' => $data['affiliation'] ?? null,
            'chiefEditor' => (int)$data['chiefEditor']['value'] ?? null,
            'photo' => (int)$data['photo']['fileId'] ?? null,
        ];
    }
    public function getJEditorService($id)
    {
        return $this->editor->getEditorMOdel($id);
    }
    public function getEditorDropdownService()
    {
        return $this->editor->getEditordDropdownModle();
    }
}
