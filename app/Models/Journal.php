<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Journal extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'publicationCharges', //abstract
        'issno',
        'description',
        'photo',
        'photoOurJournal',
        'photoBanner',
        'shortname',
        'classification',
    ];
    public function photoFile()
    {
        return $this->belongsTo(File::class, 'photo', 'fid');
    }

    public function photoOurJournalFile()
    {
        return $this->belongsTo(File::class, 'photoOurJournal', 'fid');
    }

    public function photoBannerFile()
    {
        return $this->belongsTo(File::class, 'photoBanner', 'fid');
    }

    public function linkedTable()
    {
        return $this->hasMany(LinkedTable::class, 'ref_id');
    }
    public function getJournalModel($id)
    {
        // Define key mappings
        $keyMapping = [
            'photo_file' => 'photo',
            'photo_our_journal_file' => 'photoOurJournal',
            'photo_banner_file' => 'photoBanner',
        ];

        $data = Journal::with([
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
        ])->where('id', $id)->first();

        // Check if data exists
        if (!$data) {
            return null;
        }
        // storeCustomLogs($data->toArray(), 'siddulog');
        // Convert to collection and rename keys
        $updatedData = collect($data->toArray())
            ->mapWithKeys(function ($item, $key) use ($keyMapping) {
                return [$keyMapping[$key] ?? $key => $item];
            });
        $groupEditors = collect($updatedData->get('linked_table'))->map(function ($item) use($updatedData) {
            // storeCustomLogs($item, 'siddulog');
            return [
                'value' => $item['table_editor'][0]['id'],
                'label' => $item['table_editor'][0]['name'],
                'entity_type' => $item['entity_type']
            ];
        })->groupBy('entity_type');
        // $groupEditors = collect($updatedData->get('linked_table'))->groupBy('entity_type');

        // Update the same key with the new grouped data
        $updatedData->put('linked_table', $groupEditors);
        // storeCustomLogs($updatedData->toArray(), 'siddulog');

        return $updatedData;
    }

    public function getjournalDropdownModle(){
        $data = Journal::select(['id as value' ,'title as label'])->get()->toArray();
        return $data;
    }
}
