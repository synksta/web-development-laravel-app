<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginUser;
use App\Http\Requests\RegisterUser;
use App\Http\Requests\StoreUser;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    // Register
    public function register_form()
    {
        if (Auth::check()) {
            return redirect()->back()->with('error', 'You are already logged in');
        }
        return view('user.register');
    }

    public function register_submit(RegisterUser $request)
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
        if (Auth::check()) {
            return redirect()->back()->with('error', 'You are already logged in');
        }
        return view('user.login');
    }

    public function login_submit(LoginUser $request)
    {
        if (Auth::attempt($request->only('email', 'password'))) {
            session()->flash('success', 'User logged in successfully');

            if (Auth::user()->is_admin) {
                return redirect()->route('admin');
            }
            return redirect()->route('home');
        }
        return redirect()->back()->with('error', 'Invalid credentials');
    }
    // Logout
    public function logout()
    {
        Auth::logout();
        return redirect()->route('login.form');
    }
}
