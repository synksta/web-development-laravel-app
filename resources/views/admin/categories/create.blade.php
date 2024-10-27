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
  <div class="card card-primary">
    <div class="card-header">
      <h3 class="card-title">New category</h3>
    </div>
    <form role="form" method="post" action="{{ route('admin.categories.store') }}">
      @csrf
      <div class="card-body">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control @error('title') is-invalid @enderror" id="title" name="title" placeholder="Enter title">
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