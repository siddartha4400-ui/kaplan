<?php

namespace App\Http\Controllers;

use App\Models\Slider;
use App\Models\Article;
use Illuminate\Http\Request;

class SliderController extends Controller
{
    public function store(Request $request, $key)
    {
        return tryCatchHelper(function () use ($request, $key) {
            // Attempt to find existing slider with key = 1
            $slider = Slider::firstOrNew(['key' => $key]);

            // Store or update the JSON field
            $slider->json = $request->all();
            $slider->save();

            return response()->json([
                'message' => 'Slider saved successfully.',
                'data' => $slider
            ], 200);
        });
    }

    public function getSliderData($key)
    {
        try {
            $slider = Slider::where('key', $key)->first();

            if (!$slider) {
                return response()->json([
                    'message' => 'No slider found for the given key',
                    'data' => null
                ], 404);
            }

            return response()->json([
                'message' => 'Slider data retrieved successfully',
                'data' => $slider
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error retrieving slider data',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    public function getArticlesData($key, $journal = 0, $issue = 0)
    {
        return tryCatchHelper(function () use ($key, $journal, $issue) {
            return apiResponse(true, 'Successful', function () use ($key, $journal, $issue) {
                $query = Article::
                    // select([
                    //     'id',
                    //     'title',
                    //     'doi',
                    //     'journal',
                    //     'authorAffiliation',
                    //     'pdfFile',
                    //     'publishedDate',
                    //     'volume',
                    //     'issue'
                    // ])->
                    with([
                        'journal' => function ($query) {
                            $query->with([
                                'photoFile' => function ($query) {
                                    $query->select(['fid', 'fid as fileId', 'file_path as filePath', 'file_name as filename']);
                                },
                                'photoOurJournalFile' => function ($query) {
                                    $query->select(['fid', 'fid as fileId', 'file_path as filePath', 'file_name as filename']);
                                },
                                'photoBannerFile' => function ($query) {
                                    $query->select(['fid', 'fid as fileId', 'file_path as filePath', 'file_name as filename']);
                                },
                                'linkedTable' => function ($query) {
                                    $query->with('tableEditor');
                                },
                                'linkedTable' => function ($query) {
                                    $query->with('tableEditor');
                                }
                            ]);
                        },
                        // 'journal:id,photo,shortname,title',
                        'pdfFile:fid,file_path,file_name'
                    ]);

                if ($key === 'dashboard') {
                    return $query->orderBy('id', 'desc')->limit(5)->get();
                }
                if ($key === 'archive') {
                    return $query->where('journal', $journal)->where('issue', $issue)->get();
                }
                $articles = $query->where('journal', $journal)->get();

                $grouped = $articles->groupBy('volume')->map(function ($volumeGroup) {
                    return $volumeGroup->groupBy('issue');
                });

                if ($key === 'article_in_press') {
                    $lastVolume = $grouped->keys()->max();
                    $lastIssues = $grouped->get($lastVolume);
                    $lastIssue = $lastIssues->keys()->max();
                    return $lastIssues->get($lastIssue)->values();
                }

                if ($key === 'current_issue') {
                    $lastVolume = $grouped->keys()->max();
                    $volumeGroup = $grouped->get($lastVolume);
                    $issueKeys = $volumeGroup->keys()->sort()->values(); // ensure sorted
                    $lastIssue = $issueKeys->last();

                    $articlesInLastIssue = $volumeGroup->get($lastIssue);

                    if ($articlesInLastIssue->count() >= 5) {
                        return $articlesInLastIssue->values();
                    } elseif ($issueKeys->count() > 1) {
                        $secondLastIssue = $issueKeys->get($issueKeys->count() - 2);
                        return $volumeGroup->get($secondLastIssue)->values();
                    } else {
                        // If only one issue and it's < 5 articles
                        return $articlesInLastIssue->values();
                    }
                }

                return $grouped;
            }, 201);
        });
    }
}
