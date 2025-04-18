<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Inertia\Response;

class BlogController extends Controller
{

    public function index(): Response
    {
        $posts = Post::latest()->select(['id', 'title', 'slug', 'description', 'image', 'views'])->where('status', 'published')->paginate(1);
        $posts->getCollection()->transform(function ($post) {
            $post->likesCount = $post->likes() ?? 0;
            return $post;
        });
        return Inertia::render('blog/main', [
            'posts' => $posts->items(),
            'pagination' => [
                'current_page' => $posts->currentPage(),
                'last_page' => $posts->lastPage(),
                'per_page' => $posts->perPage(),
                'total' => $posts->total(),
                'links' => $posts->linkCollection(),
            ],
        ]);
    }
    public function show(string $slug, Post $post)
    {
        $post->status != 'published' && abort(404);
        $post->update(['views' => $post->views + 1]);
        $post->likesCount = $post->likes() ?? 0;
        return Inertia::render('blog/post/main', [
            'post' => $post,
            'category' => $post->category(),
            'tags' => $post->tags(),
            'comments' => $post->comments()->with('user')->latest()->get(),
            'isLiked' => $post->getIsLikedAttribute()
        ]);
    }
}
