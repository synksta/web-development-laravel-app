<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Tag;

class MainController extends Controller
{
    public function index()
    {
        return view('admin.index');
    }
}
