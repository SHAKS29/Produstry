;(function($){

  var menuTop = $('.custom_nav').offset().top;
    
    $(window).on('scroll', function () {

        var winScroll = $(Window).scrollTop();
        
        if (winScroll > menuTop) {
          $('.custom_nav').addClass('menu_fixed');
        } else{
          $('.custom_nav').removeClass('menu_fixed');
        };

        if (winScroll > 600) {
          $('.backtoTop').fadeIn(1000);
        } else{
          $('.backtoTop').fadeOut(1000);
        }
    })

    $('.backtoTop').on('click', function () {
      $('html,body').animate({
        scrollTop: 0
      }, 1000)
    })





    //menu js 
    $('.menu_toggle').on('click', function(){
        $('#MyNav > ul').fadeToggle(700);
    })
    
    $('.menu_toggle').on('click', function(){
        $('.Logo').toggleClass('Logo_left');
    })

    // slider
    //  $('#banner').pogoSlider(/* opts */).data('plugin_pogoSlider');

    var mySlider = $('#banner').pogoSlider({
        autoplay: true,
        autoplayTimeout: 5000,
        displayProgess: true,
        targetWidth: 1000,
        targetHeight: 300,
        responsive: true,
        generateButtons: false,
        generateNav: false,
        pauseOnHover: false 
    }).data('plugin_pogoSlider');

    // button part

    $('.right_arrow').on('click', function(){
        mySlider.nextSlide();
    })
    
    $('.left_arrow').on('click', function(){
        mySlider.prevSlide();
    })

    //slick
    $('.service_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                  slidesToShow: 2
                }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1
              }
            }
          ]
      });


      // portfolio slider
      
      $('.portfolio_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
              breakpoint: 980,
              settings: {
                slidesToShow: 2
              }
            },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });

      // counter

      $('.counter_number').counterUp({
        delay: 10,
        time: 1000
    });

    // blogpart
    $('.blog_slider').slick({
      centerMode: true,
      centerPadding: '0',
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow:$('.blg_lt-arw'),
      prevArrow:$('.blg_rt_arw'),
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ] 
    });

    // tetimonial part
    $('.testimonial_content_slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      speed: 500,
      fade: true,
      asNavFor: '.testimonial_image_slide'
    });   
    
    $('.testimonial_image_slide').slick({
      centerMode: true,
      centerPadding: '10px',
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow:$('.left-arrow'),
      prevArrow:$('.right-arrow'),
      asNavFor: '.testimonial_content_slide',
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerPadding: '50px'
          }
        }
      ] 
    });   

    // brand part
    $('.brand_slick').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow:$('.left-arrow_brand'),
      prevArrow:$('.right-arrow_brand'),
      speed: 300,
      autoplay: true,
      infinity: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerPadding: '40px'
          }
        }
      ] 
    });   

    // team slick
    $('.team_slick').slick({
      infinite: true,
      autoplay: false,
      dots: false,
      arrows:true,
      nextArrow:$(".left-arrow_brand"),
      prevArrow:$(".right-arrow_brand"),
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px',
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                 
              }
  },
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
  },
          {
              breakpoint: 650,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: '0px'
              }
  }
]
  });


    })(jQuery);



















    // $(function ($) {
    //   var Menu = $('#main_menu'),
    //       Win = $(window),
    //       Sticky = $('.sticky');
  
  
    //   var menuTop = Menu.offset().top;
    //   //alert(menuTop);
  
    //   Win.on('scroll', function () {
  
    //       var winScroll = Win.scrollTop();
  
    //       if (winScroll > menuTop) {
    //           Menu.addClass('nav_change');
    //       } else {
    //           Menu.removeClass('nav_change');
    //       }
  
    //       //sticky button
  
    //       if (winScroll > 300) {
    //           Sticky.fadeIn(1000);
    //       } else {
    //           Sticky.fadeOut(1000);
    //       }
  
    //   });