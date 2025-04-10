<?php

namespace App\Services;

use App\Models\Journal;

class JournalService
{
    public $journal;
    public function __construct()
    {
        $this->journal = new Journal;
    }
    public function createJournalService($request)
    {

        try {
            $data = $this->prepareData($request);
            // Attempt to create the journal entry
            if ($request['edit']) {
                $journal = Journal::findOrFail($request['edit']);
                $journal->update($data);
                $journal->touch();
                return $journal;
            } else {
                return Journal::create($data);
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
            'title' => $data['title'] ?? null,
            'shortname' => $data['shortname'] ?? null,
            'publicationCharges' => $data['publicationCharges'] ?? null,
            'issno' => $data['issno'] ?? null,
            'description' => $data['description'] ?? null,
            'classification' => $data['classification'] ?? null,
            'photoOurJournal' => (int)$data['photoOurJournal']['fileId'] ?? null,
            'photoBanner' => (int)$data['photoBanner']['fileId'] ?? null,
            'photo' => (int)$data['photo']['fileId'] ?? null,
        ];
    }
    public function getJournalService($id)
    {
        return $this->journal->getJournalMOdel($id);
    }
    public function getjournalsDropdownService(){
        return $this->journal->getjournalDropdownModle();
    }
}
