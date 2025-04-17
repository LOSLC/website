<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Inertia\Response;

class BlogController extends Controller
{

    //  Fonction pour la route "/"
    public function index(): Response
    {
        $posts = Post::all()->where('status', 'published');
        return Inertia::render('blog/main', ['posts' => $posts]);
    }
    public function show(string $slug, Post $post)
    {
        // return Inertia::render();
    }
}
