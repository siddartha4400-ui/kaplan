<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\TableService;

class TableController extends Controller
{
    public $request;
    public $tableService;
    public function __construct(Request $request)
    {
        $this->request = $request;
        $this->tableService = new TableService;
    }
    public function getAlltablesController($tableName)
    {
        return tryCatchHelper(function () use($tableName) {
            return apiResponse(true, 'successful', $this->tableService->getAllTablessService($tableName), 201);
        });
    }
    public function deleteTableDataController($tableName ,$id)
    {
        return tryCatchHelper(function () use($tableName ,$id) {
            return apiResponse(true, 'successful', $this->tableService->deleteTableDataService($tableName ,$id), 201);
        });
    }
}
