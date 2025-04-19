<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;
use App\Models\Post;

class BlogController extends Controller
{
    public function index(): Response
    {
        $posts = Post::latest()->with(['tags', 'category', 'author'])
            ->select(['id', 'title', 'slug', 'description', 'image', 'views', 'category_id', 'author_id', 'created_at'])
            ->where('status', 'published')->paginate(10);

        $posts->getCollection()->transform(function ($post) {
            $post->tags = $post->tags();
            $post->category = $post->category();
            $post->isLiked = $post->getIsLikedAttribute();
            $post->likesCount = $post->getLikesCountAttribute() ?? 0;
            $post->commentsCount = $post->getCommentsCountAttribute();
            $post->createdAt = $post->getCreatedAtAttribute($post->created_at);

            return $post;
        });

        return Inertia::render('blog/main', [
            'posts' => $posts->items(),
            'pagination' => [
                'current_page' => $posts->currentPage(),
                'links' => $posts->linkCollection(),
                'last_page' => $posts->lastPage(),
                'per_page' => $posts->perPage(),
                'total' => $posts->total(),
            ],
        ]);
    }

    public function show(string $slug, Post $post)
    {
        $post->status != 'published' && abort(404);
        $post->update(['views' => $post->views + 1]);
        $post->likesCount = $post->getLikesCountAttribute() ?? 0;
        return Inertia::render('blog/post/main', [
            'post' => $post,
            'tags' => $post->tags(),
            'category' => $post->category(),
            'isLiked' => $post->getIsLikedAttribute(),
            'comments' => $post->comments()->with('user')->latest()->get(),
        ]);
    }
}
