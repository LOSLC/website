<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Event extends Model
{
    protected $fillable = [
        "name",
        "description",
        "date",
        "url",
        "image",
        "author_id",
    ];

    public function author():BelongsTo
    {
        return $this->belongsTo(User::class, 'author_id');
    }
}
