@extends('blog.layouts.meta_layout')

@section('title', "SynkstaWWW | Search | {{ $s }}")

@section('page-title')

<div class="page-title db">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <h2>Search: {{ $s }}</h2>
      </div><!-- end col -->
      <div class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="{{route('home')}}">Home</a></li>
          <li class="breadcrumb-item active">{{$s}}</li>
        </ol>
      </div><!-- end col -->
    </div><!-- end row -->
  </div><!-- end container -->
</div><!-- end page-title -->


@endsection

@section('content')

<div class="page-wrapper">
  <div class="blog-custom-build">

    @if ($posts->count())


    @foreach($posts as $post)
    <div class="blog-box wow fadeIn">
      <div class="post-media">
        <a href="{{route('posts.single', ['slug' => $post->slug])}}" title="">
          <img src="{{ $post->getThumbnail() }}" alt="" class="img-fluid">
          <div class="hovereffect">
            <span></span>
          </div>

        </a>
      </div>

      <div class="blog-meta big-meta text-center">

        <h4><a href="{{route('posts.single', ['slug' => $post->slug])}}" title="">{{$post->title}}</a></h4>
        {!! html_entity_decode($post->description) !!}
        <small><a href="{{route('categories.single',['slug' => $post->category->slug])}}" title="">{{ $post->category->title }}</a></small>
        <small>{{ $post->getPostDate()  }}</small>
        <small><i class="fa fa-eye"></i> {{ $post->views }}</small>
      </div>
    </div>

    <hr class="invis">
    @endforeach

    @else
    No such posts
    @endif

  </div>
</div>

<hr class="invis">

<div class="row">
  <div class="col-md-12">
    <nav aria-label="Page navigation">
      {{ $posts->appends(['s' => request()->s])->links() }}

      <ul class="pagination justify-content-center">
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</div>

@endsection