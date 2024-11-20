<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Basic -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <!-- Mobile Metas -->
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Site Metas -->
  <title>@yield('title')</title>

  <meta name="keywords" content="">
  <meta name="description" content="">
  <meta name="author" content="">

  <!-- Site Icons -->
  <link rel="shortcut icon" href="{{asset('assets/markedia/images/favicon.ico')}}" type="image/x-icon" />
  <link rel="apple-touch-icon" href="{{asset('assets/markedia/images/apple-touch-icon.png')}}">

  <!-- Design fonts -->
  <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700" rel="stylesheet">

  <link rel="stylesheet" href="{{asset('assets/markedia/css/style.css')}}">


</head>

<body>

  <div id="wrapper">
    @include('blog.partials.navbar')

    @yield('page-title')

    <section class="section lb page-wrapper ">
      <div class="container">
        <div class="row">
          <div class="d-none d-lg-block col-lg-4 col-md-12 col-sm-12 col-xs-12">
            @include('blog.partials.sidebar')
          </div><!-- end col -->
          <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
            @yield('content')
          </div><!-- end col -->
          <div class="d-block d-lg-none col-lg-4 col-md-12 col-sm-12 col-xs-12">
            @include('blog.partials.sidebar')
          </div><!-- end col -->
        </div><!-- end row -->
      </div><!-- end container -->
    </section>



    <footer class="footer">
      <div class="container">
        <div class="row">

          @if ($latest_posts->count())
          <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <div class="widget">
              <h2 class="widget-title">Latest Posts</h2>
              <div class="blog-list-widget">
                <div class="list-group">
                  @foreach ($latest_posts as $post)
                  <a href="{{route('posts.single', ['slug' => $post->slug])}}" class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="w-100 justify-content-between">
                      <img src="{{$post->getThumbnail()}}" alt="" class="img-fluid float-left">
                      <h5 class="mb-1">{{$post->title}}</h5>
                      <small>{{$post->getPostDate()}}</small>
                      <small><i class="fa fa-eye"></i>{{$post->views}}</small>
                    </div>
                  </a>
                  @endforeach

                </div>
              </div><!-- end blog-list -->
            </div><!-- end widget -->
          </div><!-- end col -->
          @endif

          @if ($popular_posts->count())
          <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <div class="widget">
              <h2 class="widget-title">Popular Posts</h2>
              <div class="blog-list-widget">
                <div class="list-group">
                  @foreach ($popular_posts as $post)
                  <a href="{{route('posts.single', ['slug' => $post->slug])}}" class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="w-100 justify-content-between">
                      <img src="{{$post->getThumbnail()}}" alt="" class="img-fluid float-left">
                      <h5 class="mb-1">{{$post->title}}</h5>
                      <small>{{$post->getPostDate()}}</small>
                      <small><i class="fa fa-eye"></i>{{$post->views}}</small>
                    </div>
                  </a>
                  @endforeach
                </div>
              </div><!-- end blog-list -->
            </div><!-- end widget -->
          </div><!-- end col -->
          @endif


          @if ($cats->count())
          <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <div class="widget">
              <h2 class="widget-title">Categories</h2>
              <div class="link-widget">
                <ul>
                  @foreach ($cats as $cat)
                  <li><a href="{{route('categories.single', ['slug'=>$cat->slug])}}">{{$cat->title}} <span>{{$cat->posts_count}}</span></a></li>
                  @endforeach
                </ul>
              </div><!-- end link-widget -->
            </div><!-- end widget -->
          </div><!-- end col -->
          @endif

        </div><!-- end row -->

        <div class="row">
          <div class="col-md-12 text-center">
            <br>
            <br>
            <div class="copyright">&copy; Markedia. Design: <a href="http://html.design">HTML Design</a>.</div>
          </div>
        </div>
      </div><!-- end container -->
    </footer><!-- end footer -->

    <div class="dmtop">Scroll to Top</div>

  </div><!-- end wrapper -->

  <script src="{{asset('assets/markedia/js/scripts/jquery.min.js')}}"></script>
  <script src="{{asset('assets/markedia/js/scripts/tether.min.js')}}"></script>
  <script src="{{asset('assets/markedia/js/scripts/bootstrap.min.js')}}"></script>
  <script src="{{asset('assets/markedia/js/scripts/animate.js')}}"></script>
  <script src="{{asset('assets/markedia/js/scripts/custom.js')}}"></script>


</body>

</html>