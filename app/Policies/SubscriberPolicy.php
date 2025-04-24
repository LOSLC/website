<?php

namespace App\Policies;

use App\Models\Subscriber;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class SubscriberPolicy
{
    private function isAdmin(User $user): bool
    {
        return $user->role === 'admin';
    }

    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $this->isAdmin($user);
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Subscriber $subscriber): bool
    {
        return $this->isAdmin($user);
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $this->isAdmin($user);
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Subscriber $subscriber): bool
    {
        return $this->isAdmin($user);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Subscriber $subscriber): bool
    {
        return $this->isAdmin($user);
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Subscriber $subscriber): bool
    {
        return $this->isAdmin($user);
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Subscriber $subscriber): bool
    {
        return $this->isAdmin($user);
    }
}
