<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //index
    public function index()
    {
        $categories = \App\Models\Category::paginate(5);
        return view('pages.category.index', compact('categories'));
    }

    //create
    public function create()
    {
        return view('pages.category.create');
    }

    //store
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:100',
        ]);

        $category = \App\Models\Category::create($validated);

        return redirect()->route('category.index')->with('success', 'Category created successfully');
    }

    //edit
    public function edit($id)
    {
        $category = \App\Models\Category::findOrFail($id);
        return view('pages.category.edit', compact('category'));
    }

    //update
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required|max:100',
        ]);

        $category = \App\Models\Category::findOrFail($id);
        $category->update($validated);

        return redirect()->route('category.index')->with('success', 'Category updated successfully');
    }

    //destroy
    public function destroy($id)
    {
        $category = \App\Models\Category::findOrFail($id);
        $category->delete();

        return redirect()->route('category.index')->with('success', 'Category deleted successfully');
    }
}
