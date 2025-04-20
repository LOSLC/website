<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ["name", "description", "slug", "author_id"];

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
