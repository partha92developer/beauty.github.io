$(document).ready(function(){

    // Preloder
    // $(window).on('load', function() {
    //     $('#preloader').fadeOut('slow', function() {
    //         $(this).remove();
    //     });
    // });
   
    // scrollTop

    $(window).scroll(function(){
        var x=$ (document).scrollTop();
        if(x>50){
            $(".scrolltop").fadeIn("slow");
        }
        else{
            $(".scrolltop").fadeOut("slow");
        }
    });
    $(".scrolltop").click(function(){
        $(window).scrollTop(0);
    });


    // CUSTOM HEADER & FOOTER
    $(document).ready(function () {
        $("#header-container").load( "header.html");
        $("#footer-container").load("footer.html");
    });

    // header nav-menu
    $('ul li a').click(function(){
      $('li a').removeClass("active");
      $(this).addClass("active");
    });


    // nav menu
    $(".mobile-menu i").click(function(){
        $(".menu-main").fadeIn();
        $("body").addClass("overflow-hidden")
    });
    $(".close-menu i").click(function(){
        $(".menu-main").fadeOut();
        $("body").removeClass("overflow-hidden")
    });

    // Banner-slider
    $('.bann-sld').slick({
        dots: false,
        infinite: true,
        speed:300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        // prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left-long'></i></button>",
		// nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right-long'></i></button>",
        
    });
    // Banner-slider button
    $('.prev-arrow').click(function(){
        $('.bann-sld').slick('slickPrev')
    });
    $('.next-arrow').click(function(){
        $('.bann-sld').slick('slickNext')
    });

    // shop-category
    $('.shop-sld').slick({
        dots: false,
        infinite: true,
        speed:300,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            },
        ]
    });
    // shop-category Button
    $('.prev-arrow').click(function(){
        $('.shop-sld').slick('slickPrev')
    });
    $('.next-arrow').click(function(){
        $('.shop-sld').slick('slickNext')
    });

    // Price Plan
    $('.section-x4 .single-price').mouseenter(function(){
        $('.single-price').removeClass("active");
        $(this).addClass("active");
    });
    
    // section x5
    $(".video-play").magnificPopup({
        type : "iframe",
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>', 
            patterns: {
              youtube: {
                index: 'youtube.com/',
                id: 'v=', 
                src: 'https://www.youtube.com/embed/%id%?autoplay=1'
              },
              vimeo: {
                index: 'vimeo.com/',
                id: '/',
                src: '//player.vimeo.com/video/%id%?autoplay=1'
              },
              gmaps: {
                index: '//maps.google.',
                src: '%id%&output=embed'
              }
            },
            srcAction: 'iframe_src',
        }
    });
    // section-x6 single-specialist
    $('.section-x6 .single-specialist').mouseenter(function(){
        $('.single-specialist').removeClass("active");
        $(this).addClass("active");
    });

    // testimonial-sld
    $('.testimonial-sld').slick({
        dots: false,
        infinite: true,
        speed:300,
        slidesToShow: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            },
        ]
    });
    // testimonial-sld Button
    $('.prev-arrow').click(function(){
        $('.testimonial-sld').slick('slickPrev')
    });
    $('.next-arrow').click(function(){
        $('.testimonial-sld').slick('slickNext')
    });

    // company-logo-sld
    $('.company-sld').slick({
        dots: false,
        infinite: true,
        speed:300,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            },
        ]
    });
    // company-logo-sld Button
    $('.prev-arrow').click(function(){
        $('.company-sld').slick('slickPrev')
    });
    $('.next-arrow').click(function(){
        $('.company-sld').slick('slickNext')
    });

    // video wrap
    // $(".video-btn i").click(function() {
    //     $(".video-popup").fadeIn();
    //   });

    //   $("#closeButton").click(function() {
    //     $(".video-popup").fadeOut();
    //   });
});