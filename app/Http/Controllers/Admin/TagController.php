<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\EditCategory;
use App\Http\Requests\StoreCategory;
use App\Models\Tag;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tags = Tag::paginate(20);
        return view('admin.tags.index', compact('tags'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.tags.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategory $request)
    {
        // $request->validate([
        //     'title' => 'required',
        // ]);

        Tag::create($request->all());
        // $request->session()->flash('success', 'Category created successfully');
        return redirect(route('tags.index'))->with('success', 'Tag created successfully');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $tag = Tag::findOrFail($id);
        return view('admin.tags.edit', compact('tag'));
    }



    /**
     * Update the specified resource in storage.
     */
    public function update(EditCategory $request, string $id)
    {
        $tag = Tag::findOrFail($id);
        $tag->update($request->all());
        // $category->slug = null;
        return redirect(route('tags.index'))->with('success', 'Tag updated successfully');

        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // dd(__METHOD__);
        $category = Tag::findOrFail($id);
        $category->delete();
        return redirect(route('tags.index'))->with('success', 'Tag deleted successfully');
    }
}
