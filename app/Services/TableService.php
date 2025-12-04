<?php

namespace App\Services;

use App\Models\Article;
use App\Models\Editor;
use App\Models\Journal;
use Illuminate\Support\Facades\DB;

class TableService
{
    public $journal;
    public $tables;
    public $editor;
    public $article;

    public function __construct()
    {
        $this->journal = new Journal;
        $this->editor = new Editor;
        $this->article = new Article;
    }

    public function getAllTablessService($tableName)
    {
        return $this->getTableData($tableName);
    }

    public function deleteTableDataService($tableName, $id)
    {
        if ($tableName === 'journals') {
            return $this->deleteJournalData($id);
        } else if ($tableName === 'editors') {
            return $this->deleteEditorData($id);
        }else if ($tableName === 'articles') {
            return $this->deleteArticlesData($id);
        }
        return [];
    }

    private function getTableData($tableName)
    {
        if ($tableName === 'journals') {
            return $this->getAllJournalData();
        } elseif ($tableName === 'editors') {
            return $this->getAllEditorsData();
        }elseif ($tableName === 'articles') {
            return $this->getAllArticelssData();
        }
        return [];
    }

    private function getAllJournalData()
    {
        return $this->journal->select([
            'id',
            'title',
            'publicationCharges',
            'issno',
            'description',
            'photo',
            'photoOurJournal',
            'photoBanner',
            'shortname',
            'classification',
            DB::raw("CONCAT('/journal-form?edit=', id) as edit"),
        ])->get()->toArray();
    }
    private function getAllEditorsData()
    {
        return $this->editor->select([
            'id',
            'name',
            'country',
            'qualification',
            'biography',
            'researchInterests',
            'affiliation',
            'chiefEditor',
            'photo',
            DB::raw("CONCAT('/editor-form?edit=', id) as edit"),
        ])->get()->toArray();
    }
    private function getAllArticelssData(){
        return $this->article->select([
            'id',
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
            DB::raw("CONCAT('/article-form?edit=', id) as edit"),
        ])->get()->toArray();
    }
    private function deleteJournalData($id)
    {
        $journal = $this->journal->find($id);
        if ($journal) {
            $journal->delete();
        }
        return $this->getAllJournalData();
    }
    private function deleteEditorData($id)
    {
        $editor = $this->editor->find($id);
        if ($editor) {
            $editor->delete();
        }
        return $this->getAllEditorsData();
    }
    private function deleteArticlesData($id)
    {
        $editor = $this->article->find($id);
        if ($editor) {
            $editor->delete();
        }
        return $this->getAllArticelssData();
    }
}
