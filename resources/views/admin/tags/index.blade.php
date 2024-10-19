@extends('admin.layouts.layout')

@section('content')
<!-- Content Wrapper. Contains page content -->
<!-- <div class="content-wrapper"> -->
<!-- Content Header (Page header) -->
<section class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-6">
        <h1>Tags</h1>
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
      <h3 class="card-title">Tags list</h3>
    </div>
    <div class="card-body">
      <a href="{{ route('tags.create') }}" class="btn btn-success mb-3">Add new tag</a>

      @if (count($tags))
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
            @foreach ($tags as $tag)
            <tr>
              <td>{{ $tag->id }}</td>
              <td>{{ $tag->title }}</td>
              <td>{{ $tag->slug }}</td>
              <td>
                <a href="{{ route('tags.edit', ['tag' => $tag->id]) }}" class="btn btn-info btn-sm float-left mr-1`">
                  <i class="fas fa-pencil-alt"></i>
                </a>
                <form action="{{ route('tags.destroy', ['tag' => $tag->id]) }}" method="post" class="float-left ">
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
      <p>No tags</p>
      @endif
    </div>
    <!-- /.card-body -->
    <div class="card-footer">
      {{$tags->links()}}
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