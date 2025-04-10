<?php

namespace App\Services;

use App\Models\Article;
use App\Models\Journal;
use Carbon\Carbon;

class ArticleService
{
    public $articel;
    public function __construct()
    {
        $this->articel = new Article;
    }
    public function createArticelService($request)
    {
        try {
            // Prepare data dynamically, extracting only fileId
            $data = [
                'title' => $request['title'] ?? null,
                'doi' => $request['doi'] ?? null,
                'journal' => $request['journal']['value'] ?? null,
                'articleType' => $request['articleType']['value'] ?? null,
                'authorAffiliation' => $request['authorAffiliation'] ?? null,
                'author' => $request['author'] ?? null,
                'createdDate' => $request['createdDate'] ?? null,
                'publishedDate' => $request['publishedDate'] ?? null,
                'pdfFile' => $request['pdfFile']['fileId'] ?? null, // Extract only fileId
                'abstract' => $request['abstract'] ?? null,
            ];
            if ($request['edit']) {
                $editor = Article::findOrFail($request['edit']);
                $editor->update($data);
                return $editor;
            } else {
                return Article::create($data);
            }
            // Create the article record in the database
            // return Article::create($data);
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

    public function getJArticelService($id)
    {
        try {
            return $this->articel->editArtuicleData($id);
            // $data = Article::where('id', $id)->get();
            // storeCustomLogs($data, "siddulog");
            // return $data[0];
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
}
