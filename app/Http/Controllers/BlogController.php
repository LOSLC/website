<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;

class BlogController extends Controller
{

    //  Fonction pour la route "/"
    public function index()
    {
        return Inertia::render();
    }

    // Fonction pour la route "/post/{slug}-{post}"
    // Le slug est une chaîne de caractères qui est généralement utilisée pour créer une URL conviviale
    // Le post est un identifiant numérique qui correspond à l'ID du post dans la base de données
    public function show(string $slug, Post $post)
    {
        return Inertia::render();
    }
}
