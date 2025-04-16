<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Tag extends Model
{
    protected $fillable = ["name", "user_id"];

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }
}
