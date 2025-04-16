<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    protected $fillable = [
        "title",
        "content",
        "slug",
        "user_id",
        "category_id",
        "image",
        "status",
        "views",
    ];

    public function user(): BelongsTo
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
        return PostLike::where('post_id', $this->id)->where('is_like', true)->count();
    }

    public function dislikes(): int
    {
        return PostLike::where('post_id', $this->id)->where('is_like', false)->count();
    }

}
