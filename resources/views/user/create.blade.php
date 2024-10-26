<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>New user</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <link rel="stylesheet" href="{{asset('assets/admin/css/admin.css')}}">

</head>

<body class="hold-transition register-page">
  <div class="register-box">

    <div class="container mt-2">
      <div class="row">
        <div class="col-12">
          @if ($errors->any())
          <div class="alert alert-danger">
            <ul class="list-unstyled">
              @foreach ($errors->all() as $error)
              <li>{{ $error }}</li>
              @endforeach
            </ul>
          </div>
          @endif

          @if (session()->has('success'))
          <div class="alert alert-sucsess">
            {{ session('success') }}
          </div>
          @endif
        </div>
      </div>
    </div>
    <div class="card card-outline card-primary">
      <div class="card-header text-center">
        <a href="{{route('home')}}" class="h1"><b>synksta</b>WEB</a>
      </div>
      <div class=" card-body">

        <form action="{{ route('register.store')}}" method="post">
          @csrf

          <!-- Name -->
          <div class="input-group mb-3">
            <input type="text" class="form-control" name="name" placeholder="Name" value="{{ old('name') }}">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-user"></span>
              </div>
            </div>
          </div>
          <!-- Email -->
          <div class="input-group mb-3">
            <input type="email" class="form-control" name="email" placeholder="Email" value="{{ old('email') }}">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <!-- Password -->
          <div class="input-group mb-3">
            <input type="password" class="form-control" name="password" placeholder="Password">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <!-- Retype password -->
          <div class="input-group mb-3">
            <input type="password" name="password_confirmation" class="form-control" placeholder="Retype password">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <!-- Submit button -->
          <div class="row">
            <button type="submit" class="mx-2 btn btn-primary btn-block">Register</button>
          </div>
        </form>

        <a href="#" class="mt-3 btn btn-default btn-block">I already have a membership</a>
      </div>
      <!-- /.form-box -->
    </div><!-- /.card -->
  </div>
  <!-- /.register-box -->

  <script src="{{asset('assets/admin/js/admin.js')}}"></script>

</body>

</html>