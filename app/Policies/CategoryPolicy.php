<?php

namespace App\Policies;

use App\Models\Category;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class CategoryPolicy
{
    private function isAdmin(User $user): bool
    {
        return $user->role === 'admin';
    }

    private function isAuthor(User $user): bool
    {
        return $user->role === 'author';
    }

    private function isCategoryOwner(User $user, Category $category): bool
    {
        return $user->id === $category->author_id;
    }

    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(?User $user): bool
    {
        // Tous les utilisateurs (même non connectés) peuvent voir les catégories
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(?User $user, Category $category): bool
    {
        return true;
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
    public function update(User $user, Category $category): bool
    {
        return $this->isAdmin($user) || $this->isCategoryOwner($user, $category);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Category $category): bool
    {
        return $this->isAdmin($user) || $this->isCategoryOwner($user, $category);
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Category $category): bool
    {
        return $this->isAdmin($user);
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Category $category): bool
    {
        return $this->isAdmin($user);
    }
}