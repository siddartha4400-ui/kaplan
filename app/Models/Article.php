<?php

namespace App\Models;

use Carbon\Carbon;
use App\Models\Journal;
use App\Models\ArticleType;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Article extends Model
{
    use HasFactory;

    protected $table = 'articles';

    protected $fillable = [
        'title',
        'doi',
        'createdDate',
        'publishedDate',
        'volume',
        'pdfFile',
        'journal',
        'issue',
        'articleType',
        'abstract',
        'authorAffiliation',
        'author',
    ];
    public function pdfFile()
    {
        return $this->belongsTo(File::class, 'pdfFile', 'fid');
    }
    public function journal()
    {
        return $this->belongsTo(Journal::class, 'journal', 'id');
    }
    public function articleType()
    {
        return $this->belongsTo(ArticleType::class, 'articleType', 'id');
    }
    public function editArtuicleData($id)
    {
        $data = Article::where('id', $id)
            ->with(['pdfFile' => function ($query) {
                $query->select(['fid', 'fid as fileId', 'file_path as filePath', 'file_name as filename']);
            }])
            ->with(['journal' => function ($query) {
                $query->select(['id', 'id as value', 'title as label']);
            }])
            ->with(['articleType' => function ($query) {
                $query->select(['id', 'id as value', 'title as label']);
            }])
            ->first(); // use first() instead of get()[0]
        return $data;
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($article) {
            // Set volume to current year if not provided
            if (!$article->volume) {
                $article->volume = date('Y');
            }

            // Auto-generate issue number based on journal + volume
            if (!$article->issue && $article->journal) {
                // Step 1: Get the max volume for this journal
                $maxIssue = Article::where('journal', $article->journal)
                    ->where('volume', $article->volume)
                    ->max('issue') ?? 1;

                // Step 2: Count how many articles exist with that journal and volume
                $existingCount = Article::where('journal', $article->journal)
                    ->where('issue', $maxIssue)
                    ->count();
                $existingCount =  $existingCount == null ||  $existingCount == 0 ? 1 :  $existingCount + 1;
                // $existingCount = Article::where('journal', $article->journal)
                //     ->where('volume', $article->volume)
                //     ->count();
                // $adjustedCount = $existingCount + 1;
                // $adjustedCount = $existingCount == 0 ? 1 : $existingCount;
                // $article->issue = (int) ceil($adjustedCount / 5);
                $article->issue = $existingCount == 6 ? $maxIssue + 1 : $maxIssue;
                // storeCustomLogs(['maxIssue' => $maxIssue, 'counOfarticlesInissue' => $existingCount], 'siddulog');
            }
        });
    }
}
