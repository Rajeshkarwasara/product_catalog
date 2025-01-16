<!doctype html>
<html lang="ar" dir="rtl">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- owl-carousel -->
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="icon" type="image/png" sizes="32x32" href="{{asset('stc_css/images/Logo.svg')}}">


    <!-- font-awesome -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

    <!-- <link rel="preconnect" href="https://fonts.googleapis.com"> -->
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">
    <link rel='stylesheet' href='https://sachinchoolur.github.io/lightslider/dist/css/lightslider.css'>
    <link rel='stylesheet'
        href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/css/intlTelInput.css">
    <!-- custome-css -->
    <link rel="stylesheet" href="{{ asset('stc_css/style.css') }}" />

    <title>Home-page</title>
    <style>
        .cart {
            position: relative;
        }

        .user_login {
            position: relative;
            display: inline-block;
        }

        .dropdown_menu {
            display: none;
            position: absolute;
            top: 100%;
            right: 0;
            background-color: #fff;
            border: 1px solid #ddd;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            min-width: 100px;
        }

        .dropdown_menu ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .dropdown_menu ul li {
            padding: 10px;
            border-bottom: 1px solid #f0f0f0;
        }

        .dropdown_menu ul li a {
            text-decoration: none;
            color: #333;
            display: block;
        }

        .dropdown_menu ul li a:hover {
            background-color: #f8f8f8;
        }

        .user_login:hover .dropdown_menu {
            display: block;
        }
    </style>
</head>

<body>

    <!-- top-nav-bar -->
    <!-- social-links -->


    <header>
        <div class="container">
            <div class="top-nav d-flex justify-content-between align-items-center">
                <div class="text">
                    <h6>مرحبًا بكم في شركة شعّار للتجارة</h6>
                </div>
                <div class="social-icons d-flex">
                    <p>تابعنا:</p>
                    <ul class="d-flex list-unstyled">
                        <li><a href="#"><img src="{{asset('stc_css/images/Facebook.svg')}}" alt="Facebook"></a></li>
                        <li><a href="#"><img src="{{asset('stc_css/images/Instagram.svg')}}" alt="Instagram"></a>
                        </li>
                        <li><a href="#"><img src="{{asset('stc_css/images/Twitter.svg')}}" alt="Twitter"></a></li>
                        <li><a href="#"><img src="{{asset('stc_css/images/Youtube.svg')}}" alt="Youtube"></a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="card_brand">
            <div class="container">
                <div class="Cart-part d-flex justify-content-between align-items-center">
                    <div class="logo">
                        <a href="{{route('index')}}">
                            <img src="{{asset('stc_css/images/Logo.svg')}}" alt="logo">
                        </a>
                    </div>

                    <div class="search-bar d-flex">
                        <form style="width: 100% !important;">
                            <div class="input_search d-flex">
                                <span class="search-button"><i class="fas fa-search"></i></span>
                                <input type="text" name="query" id="search" class="form-control" value="{{ request('query') }}" placeholder="ابحث عن أي شيء...">
                            </div>
                        </form>
                        <div class="dropdown">
                            <!-- <button class="btn btn-primary dropdown-toggle" type="button" id="categoryDropdown"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                جميع الفئات
                            </button> -->

                         <!--  <select class="form-control" id="categorySelect">
    @foreach ($categorys as $category)
        <option value="{{ $category->name }}">{{ $category->name }}</option>
    @endforeach
</select> -->

<div id="product-container"></div>



                        </div>
                    </div>

                    <!-- <div class="cart">
                        <a class="cart_icon" href="{{route('cart-page')}}"><img src="{{asset('stc_css/images/ShoppingCartSimple.svg')}}"
                                alt="Cart"></a>
                        <a class="user_login" href="#"><img src="{{asset('stc_css/images/User.svg')}}" alt="User"></a>
                    </div> -->
                    <div class="cart">
                        <a class="cart_icon" href="{{ route('cart-page') }}" style="position: relative;">
    <img src="{{ asset('stc_css/images/ShoppingCartSimple.svg') }}" alt="Cart" style="width: 30px; height: 30px;">
    @php
        $totalItems = App\Helpers\CartHelper::getTotalItems();
    @endphp
    @if ($totalItems > 0)
        <span class="cart-count" style=" position: absolute;
    top: -5px;
    right: -5px;
    background-color: #ffffff;
    color: #1b6392;
    border-radius: 50%;
    padding: 8px 5px 5px 0px;
    font-size: 12px;
    display: flex
;
    align-items: center;
    height: 20px;
    width: 20px;
">
            {{ $totalItems }}
        </span>
    @endif
</a>



                        @if(Auth::guard('local')->check())
                            <div class="user_login">
                                <div class="login_user_name">

                                    <i class="fa-solid fa-caret-right fa-rotate-by"
                                        style="--fa-rotate-angle: 90deg;"></i>&nbsp;&nbsp;{{ Auth::guard('local')->user()->first_name }}
                                </div>

                                <div class="dropdown_menu">
                                    <ul>
                                        <li><a href="#">My profile</a></li>
                                        <li><a href="{{ route('log_out') }}">Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        @else
                            <div class="user_login">
                                <a href="{{ route('sign_in') }}"><img src="{{asset('stc_css/images/User.svg')}}"
                                        alt="User"></a>

                            </div>
                        @endif


                    </div>



                </div>
            </div>
        </div>

        <!-- Bottom navigation bar -->
        <div class="bottom-nav">
            <div class="container d-flex justify-content-center">
                <nav class="navbar navbar-expand-lg">
                    <div class="container">
                        <div class="dropdown">
                           <!--  <button class="btn btn-primary dropdown-toggle" type="button" id="categoryDropdown"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                جميع الفئات
                            </button>

                            <ul class="dropdown-menu" aria-labelledby="categoryDropdown">
                                @foreach ($categorys as $category)
                                    <li><a class="dropdown-item" href="#">{{$category->name}}</a></li>


                                @endforeach
                               
                            </ul> -->
                            <button class="btn btn-primary dropdown-toggle" type="button" id="categoryDropdown" data-bs-toggle="dropdown" aria-expanded="false">
    جميع الفئات
</button>

<ul class="dropdown-menu" aria-labelledby="categoryDropdown">
    @foreach ($categorys as $category)
        <li><a class="dropdown-item" href="{{route('getproducts',parameters: $category->id)}}" onclick="filterProductsByCategory({{ $category->name }})">{{ $category->name }}</a></li>
    @endforeach
</ul>


                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="{{route('products')}}">منتجات</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="{{route('about-us')}}">معلومات عنا</a>
                                </li>
                                <!-- <li class="nav-item">
                                    <a class="nav-link" href="#">المدونات</a>
                                </li> -->
                                <li class="nav-item">
                                    <a class="nav-link" href="{{route('contact_us')}}">دعم العملاء</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>

    @yield('content')
    @include('layouts.stc_product.footer')
    




    <!-- jQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <!-- Bootstrap JS (Optional, if used elsewhere) -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>

    <!-- Owl Carousel JS -->
    <!-- <script src="{{ asset('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js')}}"></script> -->
    <!-- Owl Carousel JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <script src='https://sachinchoolur.github.io/lightslider/dist/js/lightslider.js'></script>

    <script src='https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/intlTelInput-jquery.min.js'></script>


    @stack('script')


    <script>
        $(document).ready(function () {
            $(".hero_carousel").owlCarousel({
                loop: true,
                margin: 10,
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                rtl: true, // Enable RTL mode
                dots: true, // Ensure dots are enabled
                responsive: {
                    0: {
                        items: 1
                    }
                }
            });
            $('#search').on('keydown', function (e) {
                if (e.key === 'Enter' || e.which === 13) {
                    e.preventDefault();


                    var query = $(this).val(); 
                            // console.log(query);
                    $.ajax({
                        url: '/searchproduct', 
                        type: 'GET', 
                        data: { query: query }, 
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') 
                        },
                        success: function (response) {
                            if (response.status) {
                                // console.log(response.data); 
                                let redirectUrl = '/product-list?query=' + encodeURIComponent(query);
                                // console.log(redirectUrl);
                                window.location.href = redirectUrl;
                            } else {
                                console.log('No products found.');
                            }
                        },
                        error: function (xhr) {
                            console.log('Error:', xhr.responseText); 
                        }
                    });
                }
            });

        });
    </script>


    <script>

        function filterProductsByCategory(categoryName) {
    // Redirect to the products page with the category name as a query parameter
    window.location.href = `/products?category_name=${categoryName}`;
}


        $(document).ready(function () {
            $(".brand_carousel").owlCarousel({
                autoWidth: true,
                loop: true,
                margin: 15,
                nav: true,
                dots: false,
                rtl: true,
                navText: [
                    '<i class="custom-arrow left-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z"/></svg></i>', // Custom left arrow
                    '<i class="custom-arrow right-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z"/></svg></i>'  // Custom right arrow
                ],
            });
        });

    </script>


    <script>
        $(document).ready(function () {

            $('.counter').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });

        });
    </script>

</body>

</html>