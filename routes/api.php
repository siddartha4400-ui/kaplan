<?php

use Carbon\Carbon;
use App\Models\File;
use Illuminate\Http\Request;
use App\Services\FileServices;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\TableController;
use App\Http\Controllers\EditorController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\JournalController;

Route::apiResource('journals', JournalController::class);
Route::post('/upload', [FileServices::class, 'insertFile']);
Route::post('/create_journal', [JournalController::class, 'createJournalController']);
Route::get('/get_journal/{edit}', [JournalController::class, 'getJournalController']);
Route::get('/get_all_data/{tableName}', [TableController::class, 'getAlltablesController']);
Route::get('delete_table_data/{tableName}/{id}', [TableController::class, 'deleteTableDataController']);
Route::post('/create_editor', [EditorController::class, 'createEditorController']);
Route::get('/get_editor/{edit}', [EditorController::class, 'getEditorController']);
Route::get('/get_editors_dropdown', [EditorController::class, 'getEditorDropdownController']);
Route::get('/get_journals_dropdown', [JournalController::class, 'getjournalsDropdownController']);
Route::post('/create_articel', [ArticleController::class, 'createArticelController']);
Route::get('/get_articel/{edit}', [ArticleController::class, 'getArticelController']);
Route::get('/get_journals/{from}', [JournalController::class, 'getJournalsController']);
Route::post('/slider_store/{key}', [SliderController::class, 'store']);
Route::get('/slider_get/{key}', [SliderController::class, 'getSliderData']);
Route::get('/get_articles/{key}/{journal}/{issue}', [SliderController::class, 'getArticlesData']);
