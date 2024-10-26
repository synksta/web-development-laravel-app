<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUser;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function create()
    {
        return view('user.create');
    }

    public function store(StoreUser $request)
    {
        dd($request->all());
    }
}
