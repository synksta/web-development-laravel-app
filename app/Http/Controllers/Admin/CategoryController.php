<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\EditCategory;
use App\Http\Requests\StoreCategory;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::paginate(2);
        return view('admin.categories.index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.categories.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategory $request)
    {
        // $request->validate([
        //     'title' => 'required',
        // ]);
        Category::create($request->all());
        // $request->session()->flash('success', 'Category created successfully');
        return redirect(route('admin.categories.index'))->with('success', 'Category created successfully');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $category = Category::findOrFail($id);
        return view('admin.categories.edit', compact('category'));
    }



    /**
     * Update the specified resource in storage.
     */
    public function update(EditCategory $request, string $id)
    {
        $category = Category::findOrFail($id);
        $category->update($request->all());
        // $category->slug = null;
        return redirect(route('admin.categories.index'))->with('success', 'Category updated successfully');

        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // dd(__METHOD__);
        $category = Category::findOrFail($id);

        if ($category->posts->count()) {
            return redirect(route('admin.categories.index'))->with('error', 'Category has posts');
        }
        $category->delete();
        return redirect(route('admin.categories.index'))->with('success', 'Category deleted successfully');
    }
}
