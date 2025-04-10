<?php

namespace App\Observers;

use App\Models\Editor;

class EditorObserver
{
    /**
     * Handle the Editor "created" event.
     */
    public function created(Editor $editor): void
    {
        //
    }

    /**
     * Handle the Editor "updated" event.
     */
    public function updated(Editor $editor): void
    {
        //
    }

    /**
     * Handle the Editor "deleted" event.
     */
    public function deleted(Editor $editor): void
    {
        //
    }

    /**
     * Handle the Editor "restored" event.
     */
    public function restored(Editor $editor): void
    {
        //
    }

    /**
     * Handle the Editor "force deleted" event.
     */
    public function forceDeleted(Editor $editor): void
    {
        //
    }
}
