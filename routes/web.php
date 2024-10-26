<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\MainController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\TagController;

Route::get('/', function () {
    // return view('welcome');
    return "это главная";
});

Route::group(['prefix' => 'admin', 'namespace' => 'App\Http\Controllers\Admin'], function () {

    Route::get('/', [MainController::class, 'index'])->name('admin.index');
    Route::resource('/categories', CategoryController::class);
    Route::resource('/tags', TagController::class);
    Route::resource('/posts', PostController::class);


    // Route::get('/', 'MainController@index')->name('admin.index');

});

Route::get('/register', [UserController::class, 'create'])->name('register.create');
Route::post('/register', [UserController::class, 'store'])->name('register.store');
