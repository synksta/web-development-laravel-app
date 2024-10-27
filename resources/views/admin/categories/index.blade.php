@extends('admin.layouts.layout')

@section('content')
<!-- Content Wrapper. Contains page content -->
<!-- <div class="content-wrapper"> -->
<!-- Content Header (Page header) -->
<section class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-6">
        <h1>Main Page</h1>
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
  <!-- Default box -->
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Categories list</h3>
    </div>
    <div class="card-body">
      <a href="{{ route('admin.categories.create') }}" class="btn btn-success mb-3">Add new category</a>

      @if (count($categories))
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th style="width: 30px">#</th>
              <th>Title</th>
              <th>Slug</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            @foreach ($categories as $category)
            <tr>
              <td>{{ $category->id }}</td>
              <td>{{ $category->title }}</td>
              <td>{{ $category->slug }}</td>
              <td>
                <a href="{{ route('admin.categories.edit', ['category' => $category->id]) }}" class="btn btn-info btn-sm float-left mr-1`">
                  <i class="fas fa-pencil-alt"></i>
                </a>
                <form action="{{ route('admin.categories.destroy', ['category' => $category->id]) }}" method="post" class="float-left ">
                  @csrf
                  @method('DELETE')
                  <button class="btn btn-danger btn-sm" onclick="return confirm('Are you sure?')">
                    <i class="fas fa-trash"></i>
                  </button>
                </form>
              </td>
            </tr>
            @endforeach
          </tbody>
        </table>
      </div>

      @else
      <p>No categories</p>
      @endif
    </div>
    <!-- /.card-body -->
    <div class="card-footer">
      {{$categories->links()}}
    </div>
    <!-- /.card-footer-->
  </div>
  <!-- /.card -->

</section>
<!-- /.content -->
<!-- </div> -->
<!-- /.content-wrapper -->
@endsection

<!-- 
<script>
  alert("<?php echo  basename($_SERVER['PHP_SELF']); ?>");
</script> -->