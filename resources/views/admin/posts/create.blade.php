@extends('admin.layouts.layout')

@section('content')

@php
Log::info("hi");
@endphp

<script src="https://uicdn.toast.com/editor/latest/toastui-editor-all.min.js"></script>
<!-- Content Wrapper. Contains page content -->
<!-- <div class="content-wrapper"> -->
<!-- Content Header (Page header) -->
<section class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-6">
        <h1>New post</h1>
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
      <h3 class="card-title">New post</h3>
    </div>
    <form id="postForm" role="form" method="post" action="{{ route('admin.posts.store') }}" enctype="multipart/form-data">
      @csrf
      @method('POST')
      <div class="card-body">

        <!-- Title -->
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control @error('title') is-invalid @enderror" id="title" name="title" placeholder="Call the post">
        </div>

        <!-- Description -->
        <div class="form-group">
          <label for="description">Description</label>
          <div id="descriptionEditor" name="description"></div>
          <!-- <textarea class="form-control" rows="5" id="description" name="description" placeholder="What is this post about"></textarea> -->
        </div>

        <!-- Content -->
        <div class="form-group">
          <label for="content">Content</label>
          <div id="contentEditor" name="content"></div>
          <!-- <textarea class="form-control" rows="8" id="content" name="content" placeholder="Content..."></textarea> -->
        </div>

        <!-- Category -->
        <div class="form-group">
          <label for="category_id">Category</label>
          <select class="custom-select" id="category_id" name="category_id">
            @foreach ($categories as $key => $val)
            <option value="{{ $key }}">{{ $val }}</option>
            @endforeach
          </select>
        </div>

        <!-- Tags -->
        <div class="form-group">
          <label for="tags">Tags</label>
          <select class="select2" name="tags[]" id="tags" multiple="multiple" data-placeholder="Select tags" style="width: 100%;">
            @foreach ($tags as $key => $val)
            <option value="{{ $key }}">{{ $val }}</option>
            @endforeach
          </select>
        </div>

        <!-- Thumbnail -->
        <div class="form-group">
          <label for="thumbnail">Thumbnail</label>
          <div class="input-group">
            <div class="custom-file">
              <input type="file" class="custom-file-input" name="thumbnail" id="thumbnail">
              <label class="custom-file-label" for="thumbnail">Choose file</label>
            </div>
          </div>
        </div>
      </div>

      <div class="card-footer">
        <button type="submit" class="btn btn-primary">Confirm</button>
      </div>

      <script>
        // Инициализация редакторов
        const descriptionEditor = new toastui.Editor({
          el: document.querySelector('#descriptionEditor'),
          height: '300px',
          initialEditType: 'markdown',
          previewStyle: 'vertical',
        });

        const contentEditor = new toastui.Editor({
          el: document.querySelector('#contentEditor'),
          height: '500px',
          initialEditType: 'markdown',
          previewStyle: 'vertical',
        });




        // Обработка отправки формы
        const form = document.getElementById('postForm');
        form.addEventListener('submit', handleFormSubmit);

        async function sendData(data) {
          return await fetch(form.action, {
            method: form.method,
            body: data,
          })
        }

        async function handleFormSubmit(event) {
          event.preventDefault();
          formData = new FormData(form);
          formData.append('description', descriptionEditor.getMarkdown());
          formData.append('content', contentEditor.getMarkdown());
          console.log(Array.from(formData.entries()))
          try {
            const response = await sendData(formData)
            if (response.ok) {
              window.location.href = response.headers.get('Location');
            } else {
              const responseJson = await response.json();
              console.info("Error: ", responseJson.message);
            }
          } catch (error) {
            console.error("Error: ", error);
          }
          console.log(response)
        }
      </script>

    </form>
  </div>
</section>

@endsection