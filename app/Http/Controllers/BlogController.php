<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Response;
use Inertia\Inertia;
use App\Models\Post;
use App\Models\Category;

class BlogController extends Controller
{
    public function index(): Response
    {
        $posts = Post::latest()->with(['tags', 'category', 'author'])
            ->select(['id', 'title', 'slug', 'description', 'image', 'views', 'category_id', 'author_id', 'created_at'])
            ->where('status', 'published')->paginate(10);

        $posts->getCollection()->transform(function ($post) {
            $post->category = $post->category();
            $post->likesCount = $post->getLikesCountAttribute();
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

    public function show(string $slug, Post $post): Response
    {
        $post->status != 'published' && abort(404);
        $post = Post::select(['id', 'title', 'slug', 'description', 'content', 'image', 'views', 'category_id', 'author_id', 'created_at'])
            ->with(['tags', 'category', 'author'])
            ->where('slug', $slug)
            ->where('status', 'published')
            ->firstOrFail();
        $post->update(['views' => $post->views + 1]);
        $post->isLiked = $post->getIsLikedAttribute();
        $post->likesCount = $post->getLikesCountAttribute();
        $post->commentsCount = $post->getCommentsCountAttribute();
        $post->createdAt = $post->getCreatedAtAttribute($post->created_at);

        $comments = $post->comments()->with(['author', 'parent'])->latest()->get();
        $comments->transform(function ($comment) {
            $comment->createdAt = $comment->getCreatedAtAttribute($comment->created_at);
            return $comment;
        });

        return Inertia::render('blog/post/main', [
            'post' => $post,
            'tags' => $post->tags(),
            'category' => $post->category(),
            'comments' => $comments,
        ]);
    }

    public function comment(string $slug, Post $post, Request $request): RedirectResponse
    {
        $request->validate(['comment' => ['required', 'string', 'max:1500']]);
        Comment::create([
            'author_id' => auth()->user()->id,
            'post_id' => $post->id,
            'content' => $request->comment,
        ]);

        return Redirect::route('blog.show', [$post->slug, $post->id]);
    }

    public function category(string $slug)
    {
        $category = Category::where('slug', $slug)->firstOrFail()->with('posts');
        $posts = $category->posts()->where('status', 'published')->latest()->paginate(10);

        $posts->getCollection()->transform(function ($post) {
            $post->category = $post->category();
            $post->likesCount = $post->getLikesCountAttribute();
            $post->commentsCount = $post->getCommentsCountAttribute();
            $post->createdAt = $post->getCreatedAtAttribute($post->created_at);

            return $post;
        });

        // return Inertia::render('', [
    }
}
