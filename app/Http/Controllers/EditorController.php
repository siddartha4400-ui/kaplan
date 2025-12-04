<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\EditorService;

class EditorController extends Controller
{
    public $request;
    public $editorService;
    public function __construct(Request $request)
    {
        $this->request = $request;
        $this->editorService = new EditorService;
    }
    public function createEditorController()
    {
        return tryCatchHelper(function () {
            return apiResponse(true, 'successful', $this->editorService->createEditorService($this->request), 201);
        });
    }
    public function getEditorController($edit)
    {
        return tryCatchHelper(function () use($edit) {
            return apiResponse(true, 'successful', $this->editorService->getJEditorService($edit), 201);
        });
    }
    public function getEditorDropdownController()
    {
        return tryCatchHelper(function () {
            return apiResponse(true, 'successful', $this->editorService->getEditorDropdownService(), 201);
        });
    }
}
