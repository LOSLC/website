<?php

namespace App\Policies;

use App\Models\Post;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class PostPolicy
{
    private function isAdmin(User $user): bool
    {
        return $user->role === 'admin';
    }

    private function isAuthor(User $user): bool
    {
        return $user->role === 'author';
    }

    private function isPostOwner(User $user, Post $post): bool
    {
        return $user->id === $post->author_id;
    }

    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(?User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(?User $user, Post $post): bool
    {
        return $post->status === 'published' ||
            ($user && ($this->isPostOwner($user, $post) || $this->isAdmin($user)));
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $this->isAdmin($user) || $this->isAuthor($user);
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Post $post): bool
    {
        if ($this->isAdmin($user)) {
            return true;
        }

        return $this->isAuthor($user) && $this->isPostOwner($user, $post);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Post $post): bool
    {
        if ($this->isAdmin($user)) {
            return true;
        }

        return $this->isPostOwner($user, $post);
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Post $post): bool
    {
        return $this->isAdmin($user);
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Post $post): bool
    {
        return $this->isAdmin($user);
    }
}