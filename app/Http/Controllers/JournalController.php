<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\JournalService;

class JournalController extends Controller
{
    public $request;
    public $journalService;
    public function __construct(Request $request)
    {
        $this->request = $request;
        $this->journalService = new JournalService;
    }
    public function createJournalController()
    {
        return tryCatchHelper(function () {
            return apiResponse(true, 'successful', $this->journalService->createJournalService($this->request), 201);
        });
    }
    public function getJournalController($edit)
    {
        return tryCatchHelper(function () use ($edit) {
            return apiResponse(true, 'successful', $this->journalService->getJournalService($edit), 201);
        });
    }
    public function getjournalsDropdownController()
    {
        return tryCatchHelper(function (){
            return apiResponse(true, 'successful', $this->journalService->getjournalsDropdownService(), 201);
        });
    }
}
