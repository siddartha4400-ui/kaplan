<?php

namespace App\Observers;

use App\Models\Journal;
use App\Models\File;
use App\Models\LinkedTable;
use Illuminate\Http\Request;

class JournalObserver
{
    public $request;
    public $roles = [
        'chiefEditor' => 1,
        'editors' => 2,
        'associateEditors' => 3,
    ];
    public function __construct(Request $request)
    {
        $this->request = $request->all();
    }
    /**
     * Handle the Journal "created" event.
     */
    public function created(Journal $journal)
    {
        return $this->prepareInsertData($journal);
    }

    /**
     * Handle the Journal "updated" event.
     */
    public function updated(Journal $journal)
    {
        LinkedTable::where('ref_id', $journal->id)->delete();
        return $this->prepareInsertData($journal);
    }

    /**
     * Handle the Journal "deleted" event.
     */
    public function deleted(Journal $journal)
    {
        LinkedTable::where('ref_id', $journal->id)->delete();
        // Get the related file IDs
        $fileIds = [
            $journal->photo,
            $journal->photoOurJournal,
            $journal->photoBanner,
        ];

        // Fetch the related File records
        $files = File::whereIn('fid', $fileIds)->get();

        foreach ($files as $file) {
            // This will trigger the `deleting` event in File model
            $file->delete();
        }
        return true;
    }

    /**
     * Handle the Journal "restored" event.
     */
    public function restored(Journal $journal): void
    {
        //
    }

    /**
     * Handle the Journal "force deleted" event.
     */
    public function forceDeleted(Journal $journal): void
    {
        storeCustomLogs('forceDeleted', 'siddulog');
    }
    public function prepareInsertData($journal)
    {
        try {
            $rolesData = [];
            // storeCustomLogs($this->request ,"siddulog");
            foreach ($this->roles as $key => $value) {
                if ($key == 'chiefEditor') {
                    $this->request[$key] = [$this->request[$key]];
                }
                // storeCustomLogs($this->request ,"siddulog");
                if (!empty($this->request[$key]) && is_array($this->request[$key])) {
                    foreach ($this->request[$key] as $user) {
                        $rolesData[] = [
                            'type' => 1,
                            'ref_id' => $journal->id,
                            'entity_id' => $user['value'],
                            'entity_type' => $value,
                            'created_at' => now(),
                            'updated_at' => now(),
                        ];
                    }
                }
            }
            return LinkedTable::insert($rolesData);
        } catch (\Exception $e) {
            storeCustomLogs([
                'error' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
            ], "siddulog");
        }
    }
}
