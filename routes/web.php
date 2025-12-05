<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/login', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/', function () {
    $activities = app(\App\Http\Controllers\ActivityController::class)->index();

    return Inertia::render('keplan/Shedule', [
        'activities' => $activities
    ]);
});


// Route::get('/home', function () {
//     return Inertia::render('Home');
// })->name('home');
// Route::get('/test', function () {
//     return Inertia::render('Test');
// });
// Route::get('/about', function () {
//     return Inertia::render('About');
// })->name('about');

// Route::get('/open-access', function () {
//     return Inertia::render('OpenAccess');
// })->name('open-access');

// Route::get('/App', function () {
//     return Inertia::render('App');
// })->name('home');

// Route::get('/journals', function () {
//     return Inertia::render('Journals');
// })->name('journals');

// Route::get('/contact-us', function () {
//     return Inertia::render('ContactUs');
// })->name('contact-us');;

// Route::get('/editor-in-chief', function () {
//     return Inertia::render('EditorInChief');
// })->name('editor-in-chief');


// Route::get('/editor-guidelines', function () {
//     return Inertia::render('EditorGuidelines');
// })->name('editor-in-chief');

// Route::get('/editor-guidelines', function () {
//     return Inertia::render('EditorGuidelines');
// })->name('editor-in-chief');

// Route::get('/associate-editor-guidelines', function () {
//     return Inertia::render('AssociateEditorGuidelines');
// })->name('editor-in-chief');

// Route::get('/reviewer-guidelines', function () {
//     return Inertia::render('ReviewerGuidelines');
// })->name('reviewer-guidelines');

// Route::get('/authors-guidelines', function () {
//     return Inertia::render('AuthorsGuidelines');
// })->name('authors-guidelines');

// Route::get('/manuscript-submission', function () {
//     return Inertia::render('ManuscriptSubmission');
// })->name('/manuscript-submission');

// Route::get('/membership-program', function () {
//     return Inertia::render('MembershipProgram');
// })->name('/membership-program');

// Route::get('/policies-ethics', function () {
//     return Inertia::render('PoliciesAndEthics');
// })->name('/policies-ethics');

// Route::get('/peerReview', function () {
//     return Inertia::render('PeerReview');
// })->name('/peer-review');

// Route::get('/processing-fee', function () {
//     return Inertia::render('ProcessingFee');
// })->name('/processing-fee');

// Route::get('/reprints', function () {
//     return Inertia::render('Reprints');
// })->name('/reprints');

// Route::get('/grants-cover-letter', function () {
//     return Inertia::render('GrantsCoverLetter');
// })->name('/grants-cover-letter');

// Route::get('/latest-artical-theory', function () {
//     return Inertia::render('LatestArticalTheory');
// })->name('/latest-artical-theory');


//   Route::get('/common-text/{type}', function ($type) {
//     return Inertia::render('CommonTextPage', [
//         'type' => $type,
//     ]);
// })->name('common.text');
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    // Route::get('/dashboard', function () {
    //     return Inertia::render('Dashboard');
    // })->name('dashboard');
    // Route::get('/journal-form', function () {
    //     return Inertia::render('Journalform');
    // });
    // Route::get('/table', function () {
    //     return Inertia::render('Table');
    // });
    // Route::get('/editor-form', function () {
    //     return Inertia::render('EditorForm');
    // });
    // Route::get('/article-form', function () {
    //     return Inertia::render('ArticleForm');
    // });
    // Route::get('/slaider-form', function () {
    //     return Inertia::render('Slaiderselector');
    // });
    // Route::get('/members-in-form', function () {
    //     return Inertia::render('MembersIn');
    // });
    // Route::get('/our-editors-form', function () {
    //     return Inertia::render('OurEditors');
    // });
    // Route::get('/articel-types', function () {
    //     return Inertia::render('ArticelTypes');
    // });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
