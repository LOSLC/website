<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

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

    // Relations
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

    public function likes(): BelongsToMany
    {
        return $this->belongsToMany(User::class, "post_likes");
    }
    // End of relations 

    // Get attributes
    public function getCommentsCountAttribute(): int
    {
        return $this->comments()->count() ?? 0;
    }

    public function getLikesCountAttribute(): int
    {
        return $this->likes()->count() ?? 0;
    }

    public function getIsLikedAttribute(): bool
    {
        return auth()->check() && $this->likes->contains(auth()->user());
    }

    public function getCreatedAtAttribute(string $value): string
    {
        return Carbon::parse($value)->format('d M Y');
    }

}
