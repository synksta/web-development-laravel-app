<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    // Register
    public function register_form()
    {
        return view('user.register');
    }

    public function register_submit(StoreUser $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        session()->flash('success', 'User created successfully');
        Auth::login($user);
        return redirect()->route('home');
    }
    // Login
    public function login_form()
    {
        return view('user.login');
    }

    public function login_submit(StoreUser $request)
    {

        session()->flash('success', 'User logged in successfully');
        // Auth::login($user);
        return redirect()->route('home');
    }
    // Logout
    public function logout()
    {
        Auth::logout();
        return redirect()->route('login.form');
    }
}
