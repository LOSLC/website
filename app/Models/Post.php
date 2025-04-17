<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Storage;

class Post extends Model
{
    protected $fillable = [
        "title",
        "content",
        "slug",
        "author_id",
        "category_id",
        "image",
        "status",
        "views",
        "description",
    ];

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }

    public function commentsCount(): int
    {
        return $this->comments()->count();
    }

    public function likes(): int
    {
        return $this->likedBy()->count();
    }

    public function dislikes(): int
    {
        return PostLike::where('post_id', $this->id)->where('is_like', false)->count();
    }

    public function likedBy(): BelongsToMany
    {
        return $this->belongsToMany(User::class, "post_likes");
    }

    public function getIsLikedAttribute(): bool
    {
        return auth()->check() && $this->likedBy->contains(auth()->user());
    }

}
