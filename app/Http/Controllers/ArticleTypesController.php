<?php

namespace App\Http\Controllers;

use App\Models\ArticleType;
use Illuminate\Http\Request;

class ArticleTypesController extends Controller
{
    protected $articleTypes;

    public function __construct()
    {
        $this->articleTypes = new ArticleType();
    }

    /**
     * Create or update an article type
     */
    public function postArticel(Request $request)
    {
        return tryCatchHelper(function () use ($request) {
            $validated = $request->validate([
                'title' => 'required|string|max:255',
                'id' => 'nullable|exists:article_types,id',
            ]);

            $articleType = ArticleType::updateOrCreate(
                ['id' => $validated['id'] ?? null],
                ['title' => $validated['title']]
            );

            return apiResponse(true, 'Article Type saved successfully.', $articleType, 200);
        });
    }

    /**
     * Get all article types
     */
    public function getAllArticles()
    {
        return tryCatchHelper(function () {
            $all = ArticleType::all(['id', 'title']);
            return apiResponse(true, 'Fetched successfully.', $all, 200);
        });
    }

    /**
     * (Optional) Get single article type - if needed later
     */
    public function getArticel($id)
    {
        return tryCatchHelper(function () use ($id) {
            $articleType = ArticleType::findOrFail($id);
            return apiResponse(true, 'Fetched successfully.', $articleType, 200);
        });
    }
}
