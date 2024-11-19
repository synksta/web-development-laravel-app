<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>synksta</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="{{asset('assets/admin/css/style.css')}}">
    <!-- <link href="https://uicdn.toast.com/editor/latest/toastui-editor.css" rel="stylesheet"> -->
    <!-- <script src="https://uicdn.toast.com/editor/latest/toastui-editor-all.min.js"></script> -->



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

            <span class="navbar-text">
                Logged in as {{ Auth::check() ? Auth::user()->name : 'guest' }}
                @if (Auth::check() && Auth::user()->is_admin)
                (Admin)
                @endif
            </span>

            <div class="d-inline-flex">
                @if (Auth::check())
                @if (Auth::user()->is_admin)
                <x-button route="admin.index" label="Admin" class="btn-primary" />
                @endif
                <x-button route="logout" label="Logout" class="btn-danger" />
                @else
                <x-button route="login.form" label="Login" />
                <x-button route="register.form" label="Register" />
                @endif
            </div>
        </div>
    </nav>


</body>

</html>