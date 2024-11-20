<?php

namespace App\Providers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        view()->composer(['blog.partials.sidebar', 'blog.layouts.meta_layout'], function ($view) {
            $view->with('popular_posts', Post::orderBy('views', 'desc')->take(3)->get());

            $view->with('latest_posts', Post::orderBy('created_at', 'desc')->take(3)->get());

            if (Cache::has('cats')) {
                $cats = Cache::get('cats');
            } else {
                $cats = Category::withCount('posts')->orderBy('posts_count', 'desc')->get();
                Cache::put('cats', $cats, 30);
            }
            $view->with('cats', $cats);
        });

        view()->composer('blog.partials.navbar', function ($view) {
            $view->with('categories', Category::take(3)->get());
        });
    }
}
