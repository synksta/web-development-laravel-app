@extends('admin.layouts.layout')

@section('content')
<!-- Content Wrapper. Contains page content -->
<!-- <div class="content-wrapper"> -->
<!-- Content Header (Page header) -->
<section class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-6">
        <h1>Edit post</h1>
      </div>
      <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active">Blank Page</li>
        </ol>
      </div>
    </div>
  </div><!-- /.container-fluid -->
</section>

<!-- Main content -->
<section class="content">
  <div class="card card-primary">
    <div class="card-header">
      <h3 class="card-title">Post "{{ $post -> title }}"</h3>
    </div>
    <form role="form" method="post" action="{{ route('admin.posts.update', ['post' => $post->id]) }}" enctype="multipart/form-data">
      @csrf
      @method('PUT')
      <div class="card-body">

        <!-- Title -->
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control @error('title') is-invalid @enderror" id="title" name="title" placeholder="Call the post" value="{{ $post->title }}">
        </div>

        <!-- Description -->
        <div class="form-group">
          <label for="description">Description</label>
          <textarea class="form-control" rows="5" id="description" name="description" placeholder="What is this post about">{{ $post->description }}</textarea>
        </div>

        <!-- Content -->
        <div class="form-group">
          <label for="content">Content</label>
          <textarea class="form-control" rows="8" id="content" name="content" placeholder="Content...">{{ $post->content }}</textarea>
        </div>

        <!-- Category -->
        <div class="form-group">
          <label for="category_id">Category</label>
          <select class="custom-select" id="category_id" name="category_id">
            @foreach ($categories as $key => $val)
            <option value="{{ $key }}" @if($key==$post->category_id) selected @endif>{{ $val }}</option>
            @endforeach
          </select>
        </div>

        <!-- Tags -->
        <div class="form-group">
          <label for="tags">Tags</label>
          <select class="select2" name="tags[]" id="tags" multiple="multiple" data-placeholder="Select tags" style="width: 100%;">
            @foreach ($tags as $key => $val)
            <option value="{{ $key }}" @if(in_array($key, $post->tags->pluck('id')->all())) selected @endif>{{ $val }}</option>
            @endforeach
          </select>
        </div>

        <!-- Thumbnail -->
        <div class="form-group">
          <label for="thumbnail">Thumbnail</label>
          <div class="input-group">
            <div class="custom-file">
              <input type="file" class="custom-file-input" name="thumbnail" id="thumbnail">
              <label class="custom-file-label" for="thumbnail"></label>
            </div>
          </div>
          <img src="{{ $post->getThumbnail() }}" class="img-thumbnail mt-2" style="max-width: 300px;">
        </div>
      </div>

      <div class="card-footer">
        <button type="submit" class="btn btn-primary">Confirm</button>
      </div>
    </form>
  </div>
</section>
<!-- /.content -->
<!-- </div> -->
<!-- /.content-wrapper -->
@endsection

<!-- 
<script>
  alert("<?php echo  basename($_SERVER['PHP_SELF']); ?>");
</script> -->