<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Post extends Model
{

    use HasSlug;

    protected $fillable = ['title', 'description', 'content', 'thumbnail', 'category_id'];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($post) {
            $post->thumbnail = null; // Устанавливаем thumbnail в null при создании
        });
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class)->withTimestamps();
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }

    public static function uploadThumbnail($request, $post)
    {

        // Отладка: выводим все данные запроса
        // dd($request->all(), $request->hasFile('thumbnail')); // Проверяем наличие файла


        $result = $post->thumbnail;
        if ($request->hasFile('thumbnail')) {
            if ($post->thumbnail) {
                Storage::delete($post->thumbnail);
            }
            $folder = date('Y-m-d');

            $result = $request->file('thumbnail')->store("images/{$folder}");
            // dd($result);
        }
        return $result;
    }

    public function getThumbnail()
    {
        if ($this->thumbnail) {
            return asset("uploads/$this->thumbnail");
        }
        return asset('uploads/images/no-image.png');
    }

    use HasFactory;
}
