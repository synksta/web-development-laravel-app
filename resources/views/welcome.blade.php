<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>synksta</title>



    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="{{asset('assets/admin/css/admin.css')}}">


</head>

<body class="font-sans antialiased bg-black text-white/50">
    @if (session()->has('success'))
    <div class="alert alert-success">
        {{ session()->get('success') }}
    </div>
    @endif
    @if (session()->has('error'))
    <div class="alert alert-danger">
        {{ session('error') }}
    </div>
    @endif


    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="{{ route('home') }}"><b>synksta</b>WWW</a>
            @if (Auth::check())
            <span class="navbar-text">
                Logged in as {{ Auth::user()->name }}
                @if(Auth::user()->is_admin)
                (Admin)
                @endif
            </span>
            <div class="d-inline-flex">
                @if(Auth::user()->is_admin)
                <a href="{{route('admin.index')}}" class="my-0 mx-2 btn btn-primary btn-block">Admin</a>
                @endif
                <a href="{{route('logout')}}" class="my-0 mx-2 btn btn-danger btn-block">Logout</a>
            </div>

            @else
            <span class="navbar-text">
                Logged in as guest
            </span>
            <div class="d-inline-flex">
                <a href="{{route('login.form')}}" class="my-0 mx-2 btn btn-default btn-block">Login</a>
                <a href="{{route('register.form')}}" class="my-0 mx-2 btn btn-default btn-block">Register</a>
            </div>
            @endif
        </div>
    </nav>

    <script src="{{asset('assets/admin/js/admin.js')}}"></script>

</body>

</html>