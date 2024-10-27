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

    public static function uploadPostImages($post, $attributeName)
    {
        $postId = $post->id;

        $uploadPath = config('filesystems.disks.public.root') . "/images/posts/" . $postId;

        // Парсим изображения из Markdown текста
        $markdownText = $post->data[$attributeName];

        $imageRegex = '/data:image\/(jpeg|png|webp);base64,([A-Za-z0-9+\/=]+)/g';

        preg_match_all($imageRegex, $markdownText, $matches);

        // Массив для хранения путей новых изображений
        $newImagesPaths = [];

        foreach ($matches[0] as $base64Image) {
            // Извлекаем данные изображения
            list($type, $data) = explode(';', $base64Image);
            list(, $data) = explode(',', $data);

            // Декодируем base64
            $imageData = base64_decode($data);

            // Генерируем уникальное имя файла
            $fileName = uniqid() . '.webp'; // Или другой формат по вашему выбору

            // Сохраняем изображение
            file_put_contents("$uploadPath/$fileName", $imageData);

            // Добавляем путь к новому изображению в массив
            $newImagesPaths[] = asset("uploads/images/posts/$postId/$fileName");

            // Заменяем ссылку в Markdown на новую
            $markdownText = str_replace($base64Image, end($newImagesPaths), $markdownText);
        }

        // Получаем список существующих файлов в директории
        $existingFiles = Storage::files("public/uploads/images/posts/$postId"); // Укажите правильный путь

        // Удаляем ненужные файлы
        foreach ($existingFiles as $file) {
            if (!in_array(asset($file), $newImagesPaths)) {
                Storage::delete($file); // Удаляем файл из хранилища
            }
        }

        dd($markdownText, $newImagesPaths);

        return $markdownText; // Возвращаем обновленный текст Markdown
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
