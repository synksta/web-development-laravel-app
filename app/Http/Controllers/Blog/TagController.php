<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    public function show($slug)
    {
        $tag = Tag::where('slug', $slug)->firstOrFail();

        $posts = $tag->posts()->with('category')->orderBy('id', 'desc')->paginate(2);
        return view('blog.tags.show', compact('tag', 'posts'));
    }
}
