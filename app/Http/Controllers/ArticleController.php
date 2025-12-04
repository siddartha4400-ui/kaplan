<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ArticleService;
// use App\Services\EditorService;

class ArticleController extends Controller
{
    public $request;
    public $articelService;
    public function __construct(Request $request)
    {
        $this->request = $request;
        $this->articelService = new ArticleService;
    }
    public function createArticelController()
    {
        return tryCatchHelper(function () {
            return apiResponse(true, 'successful', $this->articelService->createArticelService($this->request), 201);
        });
    }
    public function getArticelController($edit)
    {
        return tryCatchHelper(function () use($edit) {
            return apiResponse(true, 'successful', $this->articelService->getJArticelService($edit), 201);
        });
    }
    // public function getEditorDropdownController()
    // {
    //     return tryCatchHelper(function () {
    //         return apiResponse(true, 'successful', $this->editorService->getEditorDropdownService(), 201);
    //     });
    // }
}
