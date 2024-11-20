<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $request->validate(
            [
                's' => 'required'

            ]
        );

        $s = $request->s;
        $posts = Post::like($s)->with('category')->paginate(2);
        return view('blog.search', compact('posts', 's'));
    }
}
