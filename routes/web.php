<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\BlogController;
use Illuminate\Support\Facades\Route;
use App\Models\Post;

Route::get('/', [PublicController::class, 'home'])->name('home');
Route::get('/about', [PublicController::class, 'about'])->name('about');
Route::get('/store', [PublicController::class, 'store'])->name('store');

Route::name('blog.')->prefix('blog')->group(
    function () {
        Route::get('/', [BlogController::class, 'index'])->name('index');

        Route::get('/posts/{slug}-{post}', [BlogController::class, 'show'])
            ->where(['slug' => '[A-Za-z0-9\-]+', 'post' => '[0-9]+'])->name('show');

        Route::get('/categories/{slug}', [BlogController::class, 'category'])->name('category');
    }
);

Route::middleware(['auth', 'verified'])->group(
    function () {
        Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

        Route::post('/blog/posts/{post}/comment', [BlogController::class, 'comment'])->name('blog.comment');

        Route::delete('/blog/comment/{comment}/delete', [BlogController::class, 'deleteComment'])->name('blog.comment.delete');

        Route::post('/blog/posts/{post}/like', [BlogController::class, 'like'])->name('blog.like');
    }
);


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
