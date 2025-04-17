<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\PublicController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PublicController::class, 'home'])->name('home');
Route::name('blog.')->prefix('blog')->group(function () {
    Route::get('/', [BlogController::class, 'index'])->name('index');
    Route::get('/post/{slug}-{post}', [BlogController::class, 'show'])
        ->where('post', '[0-9]+')
        ->where('slug', '[A-Za-z0-9\-]+')
        ->name('show');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
