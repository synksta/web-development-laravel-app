<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\EditPost;
use App\Http\Requests\StorePost;
use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::with('category', 'tags')->paginate(20);
        return view('admin.posts.index', compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::pluck('title', 'id')->all();
        $tags = Tag::pluck('title', 'id')->all();
        return view('admin.posts.create', compact('categories', 'tags'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePost $request)
    {
        $data = $request->all();


        // dd($data);

        $data['thumbnail'] = Post::uploadThumbnail($request, new Post());

        // dd($data);
        $post = Post::create($data);

        // $data['description'] = Post::uploadPostImages($post, 'description');
        // $data['content'] = Post::uploadPostImages($post, 'content');

        $post->update($data);

        // dd($data['thumbnail']);

        $post->tags()->sync($request->tags);

        Log::info($data);

        return response()->json([
            'id' => $post->id,
            'title' => $data['title'],
            'description' => $data['description'],
            'content' => $data['content'],
            'category_id' => $data['category_id'],
            'tags' => $data['tags'],
            'thumbnail' => $data['thumbnail'],
        ], 200);

        // if ($request->ajax()) {
        //     return response()->json(['success' => true, 'message' => 'Post created successfully']);
        // }

        // // Если не AJAX-запрос, перенаправляем на индекс постов
        // return redirect(route('admin.posts.index'))->with('success', 'Post created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $post = Post::findOrFail($id);
        $categories = Category::pluck('title', 'id')->all();
        $tags = Tag::pluck('title', 'id')->all();
        return view('admin.posts.edit', compact('post', 'categories', 'tags'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EditPost $request, string $id)
    {
        $post = Post::findOrFail($id);

        $data = $request->all();

        $data['thumbnail'] = Post::uploadThumbnail($request, $post);

        $post->update($data);

        $post->tags()->sync($request->tags);

        return redirect(route('posts.index'))->with('success', 'Post updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $post = Post::findOrFail($id);
        $post->tags()->sync([]);
        if ($post->thumbnail) {
            Storage::delete($post->thumbnail);
        }
        $post->delete();
        return redirect(route('posts.index'))->with('success', 'Post deleted successfully');
    }
}
