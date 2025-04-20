<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\BlogController;
use Illuminate\Support\Facades\Route;
use App\Models\Post;

Route::get('/', [PublicController::class, 'home'])->name('home');
Route::get('/about', [PublicController::class, 'about'])->name('about');

Route::name('blog.')->prefix('blog')->group(
    function () {
        Route::get('/', [BlogController::class, 'index'])->name('index');
        Route::get('/posts/{slug}-{post}', [BlogController::class, 'show'])
            ->where(['slug' => '[A-Za-z0-9\-]+', 'post' => '[0-9]+'])->name('show');
        Route::post('/posts/{slug}-{post}/comment', [BlogController::class, 'comment'])
            ->where(['slug' => '[A-Za-z0-9\-]+', 'post' => '[0-9]+'])->name('comment');
        Route::get('/categories/{slug}', [BlogController::class, 'category'])->name('category');
    }
);

Route::middleware(['auth', 'verified'])->group(
    function () {
        Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
        Route::post('/blog/posts/{post}/like', [BlogController::class, 'like'])->name('blog.like');
        Route::post('/blog/posts/{post}/dislike', [BlogController::class, 'dislike'])->name('blog.dislike');
    }
);


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
