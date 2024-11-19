<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index()
    {
        $posts = Post::with('category', 'tags')->orderBy('id', 'desc')->paginate(5);
        return view('blog.index', compact('posts'));
    }

    public function article($slug)
    {
        return view('blog.article');
        // return "это статья";
    }
}