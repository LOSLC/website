<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Comment;
use Inertia\Response;
use Inertia\Inertia;
use App\Models\Post;

class BlogController extends Controller
{

    /**
     * Show lastest 10 Posts 
     * @return Response
     */
    public function index(): Response
    {
        $posts = Post::latest()->with(['tags', 'category', 'author'])
            ->select(['id', 'title', 'slug', 'description', 'image', 'category_id', 'author_id', 'created_at'])
            ->where('status', 'published')->paginate(10);

        $posts->getCollection()->transform(function ($post) {
            $post->category = $post->category();
            $post->likesCount = $post->getLikesCountAttribute();
            $post->commentsCount = $post->getCommentsCountAttribute();
            $post->createdAt = $post->getCreatedAtAttribute($post->created_at);

            return $post;
        });

        return Inertia::render('blog', [
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


    /**
     * Show a Post
     * @param string $slug Post slug
     * @param \App\Models\Post $post Post model
     * @return Response 
     */
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

        $comments = $post->comments()
            ->whereNull('parent_id')
            ->with([
                'author:id,name,avatar_url',
                'replies' => function ($query) {
                    $query->with('author:id,name,avatar_url');
                }
            ])
            ->orderBy('created_at', 'desc')
            ->get();

        $comments->transform(function ($comment) {
            $comment->createdAt = $comment->getDateAttribute($comment->created_at);
            $comment->updatedAt = $comment->getDateAttribute($comment->updated_at);

            if ($comment->replies) {
                $comment->replies->each(function ($reply) {
                    $reply->createdAt = $reply->getDateAttribute($reply->created_at);
                    $reply->updatedAt = $reply->getDateAttribute($reply->updated_at);
                });
            }

            return $comment;
        });

        return Inertia::render('post', [
            'post' => $post,
            'tags' => $post->tags,
            'category' => $post->category,
            'comments' => $comments,
        ]);

    }

    public function preview(int $post): Response
    {
        $post = Post::select(['id', 'title', 'slug', 'description', 'content', 'image', 'views', 'category_id', 'author_id', 'created_at'])
            ->with(['tags', 'category', 'author'])
            ->findOrFail($post);

        $post->isLiked = $post->getIsLikedAttribute();
        $post->likesCount = $post->getLikesCountAttribute();
        $post->commentsCount = $post->getCommentsCountAttribute();
        $post->createdAt = $post->getCreatedAtAttribute($post->created_at);

        $comments = $post->comments()
            ->whereNull('parent_id')
            ->with([
                'author:id,name,avatar_url',
                'replies' => function ($query) {
                    $query->with('author:id,name,avatar_url');
                }
            ])
            ->orderBy('created_at', 'desc')
            ->get();

        $comments->transform(function ($comment) {
            $comment->createdAt = $comment->getDateAttribute($comment->created_at);
            $comment->updatedAt = $comment->getDateAttribute($comment->updated_at);

            if ($comment->replies) {
                $comment->replies->each(function ($reply) {
                    $reply->createdAt = $reply->getDateAttribute($reply->created_at);
                    $reply->updatedAt = $reply->getDateAttribute($reply->updated_at);
                });
            }

            return $comment;
        });

        return Inertia::render('post', [
            'post' => $post,
            'tags' => $post->tags,
            'category' => $post->category,
            'comments' => $comments,
        ]);

    }

    public function comment(Request $request, Post $post): RedirectResponse
    {
        $request->validate(['comment' => ['required', 'string', 'max:1500']]);

        $data = [
            'author_id' => auth()->user()->id,
            'post_id' => $post->id,
            'content' => $request->comment,
        ];

        if ($request->parent_id) {
            $parent = Comment::find($request->parent_id);
            $parent->parent_id ? $data['parent_id'] = $parent->parent_id : $data['parent_id'] = $parent->id;
        } else {
            $data['parent_id'] = null;
        }

        Comment::create($data);

        return redirect()->route('blog.show', [$post->slug, $post->id]);
    }
    public function deleteComment(Comment $comment): RedirectResponse
    {
        if (auth()->id() !== $comment->author_id) {
            abort(403);
        }

        $post = $comment->post;
        $comment->delete();

        return redirect()->route('blog.show', [
            'slug' => $post->slug,
            'post' => $post->id
        ]);
    }


    public function like(Request $request, Post $post): RedirectResponse
    {
        $post->likes()->toggle($request->user()->id);

        return redirect()->route('blog.show', [$post->slug, $post->id]);
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
