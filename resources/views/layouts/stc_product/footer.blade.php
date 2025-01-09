<footer>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-sm-6 col-6">
                <div class="footer_links">
                    <h3>روابط سريعة</h3>
                    <ul>
                        <li><a href="{{route('products')}}">منتجات</a></li>
                       <!--  <li><a href="{{route('index')}}">منتجات جديدة</a></li>
                        <li><a href="{{route('index')}}">الأكثر مبيعا</a></li> -->
                        <li><a href="{{route('contact_us')}}">اتصل بنا</a></li>
                        <li><a href="{{route('about-us')}}">معلومات عنا</a></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-sm-6 col-6">
                <div class="footer_links">

                    <h3>الفئة الأعلى</h3>
                    @foreach ($categorys as $category)


                        <ul>
                            <li><a href="javascript:void();">{{$category->name}}</a></li>
                        
                        </ul>
                    @endforeach
                </div>
            </div>

            <div class="col-lg-4 col-sm-12 col-12">
                <div class="footer_about">
                    <div class="logo_footer">
                        <a href="{{route('index')}}">
                        <img src="{{asset('stc_css/images/Logo.svg')}}" alt="logo">
                        </a>
                    </div>
                    <p>دعم العملاء:</p>
                    <div class="phone_foot">
                        <a href="tel:(629) 555-0129">(629) 555-0129</a>
                    </div>
                    <p>4517 واشنطن أفينيو، مانشستر، كنتاكي 39495</p>
                    <div class="phone_foot">
                        <a href="mailto:معلومات@test.com">معلومات@test.com</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="footer_bottom">
        <p>شركة الشعار التجارية © 2025. تصميم مطوق</p>
    </div>
</footer>


