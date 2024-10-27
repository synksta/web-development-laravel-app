<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\MainController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\TagController;

Route::get('/', function () {
    return view('welcome');
    // return "это главная";
})->name('home');

Route::redirect('/home', '/');
Route::redirect('/main', '/');

Route::middleware(AdminMiddleware::class)
    ->prefix('admin')
    ->namespace('App\Http\Controllers\Admin')
    ->name('admin.')
    ->group(function () {
        Route::get('/', [MainController::class, 'index'])->name('index');
        Route::resource('/categories', CategoryController::class);
        Route::resource('/tags', TagController::class);
        Route::resource('/posts', PostController::class);
    });

Route::get('/register', [UserController::class, 'register_form'])->name('register.form');
Route::redirect('/registration', '/register');
Route::redirect('/signup', '/register');
Route::post('/register', [UserController::class, 'register_submit'])->name('register.submit');

Route::get('/login', [UserController::class, 'login_form'])->name('login.form');
Route::redirect('/auth', '/login');
Route::redirect('/authentication', '/login');
Route::redirect('/authorization', '/login');
Route::post('/login', [UserController::class, 'login_submit'])->name('login.submit');

Route::get('/logout', [UserController::class, 'logout'])->name('logout');
Route::redirect('/quit', '/logout');

// Route::group(['prefix' => 'admin', 'namespace' => 'App\Http\Controllers\Admin'], function () {

//     Route::get('/', [MainController::class, 'index'])->name('admin.index');
//     Route::resource('/categories', CategoryController::class);
//     Route::resource('/tags', TagController::class);
//     Route::resource('/posts', PostController::class);

//     // Route::get('/', 'MainController@index')->name('admin.index');

// })->middlewarePriority(AdminMiddleware::class);


// Route::middleware([])