(function ($) {
    $(function () {

        var $window = $(window);

        // Phone nav click function


        $('.sub-menu').parent('li').addClass('has-sub-nav')
        if ($window.width() > 768) {
            $('.has-sub-nav').each(function () {
                var $this = $(this);

                $this.mouseenter(function () {
                    $this.find('.sub-menu').fadeIn()
                    $("body").addClass("subnavShown");
                })
                $this.mouseleave(function () {
                    $this.find('.sub-menu').fadeOut();
                    $("body").removeClass("subnavShown");
                })
            })
        }

        if ($window.width() < 769) {
            $('.has-sub-nav a').click(function (e) {
                e.preventDefault();
                $('.sub-menu').show()
                $("body").addClass("navShown");
                console.log('test')
            })
            $('.hamburger').click(function () {
                $("body").toggleClass("navShown");
            });
            $('.hamburger').click(function () {
                if ($('.sub-menu:visible').length) {
                    $('.sub-menu').hide()
                    $("body").addClass("navShown");
                }
            })
        }

        $('.cart-icon a').click(function (e) {
            e.preventDefault();
            $("body").toggleClass("cartShown");
        });

        $('.cart-heading-cta').click(function (e) {
            e.preventDefault()
            $("body").removeClass("cartShown");
        });

        if ($('.get-the-look-slider-item-wrap').length) {
            $('.get-the-look-slider-item-wrap').slick({
                arrows: true,
                infinite: true,
                autoplay: true,
                navigation: false,
                autoplaySpeed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                fade: false,
                adaptiveHeight: true,
                pauseOnHover: true,
            });
            $(window).on('resize', function () {
                $('.get-the-look-slider-item-wrap').slick('resize');
            });
        }

        $('.instagram-feed-marquee').marquee({
            direction: 'left',
            duration: 50000,
            gap: 50,
            delayBeforeStart: 0,
            duplicated: true,
            startVisible: true
        });
        
        
        
        
        
        
        
        if ($('.shop-item-wrap').length) {
            $('.shop-item-wrap').slick({
                autoplay: false,
                autoplaySpeed: 1500,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.shop-item-wrap').slick('resize');
            });
        }

        if ($('.promise-item-wrap').length) {
            $('.promise-item-wrap').slick({
                autoplay: false,
                autoplaySpeed: 1500,
                slidesToShow: 3,
                slidesToScroll: 2,
                mobileFirst: true,
                arrows: false,
                dots: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.promise-item-wrap').slick('resize');
            });
        }

        if ($('.instagram-feed-item-wrap').length) {
            $('.instagram-feed-item-wrap').slick({
                autoplay: false,
                autoplaySpeed: 1500,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: 'unslick'
                    }
                ]
            })
            $(window).on('resize', function () {
                $('.instagram-feed-item-wrap').slick('resize');
            });
        }

        if ($(window).width() < 769) {
            $(".footer-acordion").each(function () {
                var $this = $(this);
                $this.find("h6").on("click touch", function () {
                    $(".footer-acordion").removeClass("active")
                    $(".footer-acordion ul").slideUp();
                    if ($this.find("ul:visible").length) {
                        $(".footer-acordion").removeClass("active")
                        $(".footer-acordion ul").slideUp();
                    } else {
                        $this.addClass("active")
                        $(".footer-acordion ul").slideUp();
                        $this.find("ul").slideDown();
                    }
                })
            })
        }


        $('.scroll-nav-slide-trigger a, .see-different-products ').click(function (e) {
            e.preventDefault();
            $('body').addClass('slide-out-show');
            $('html').addClass('slideShown');


        })


        // ANIMATION CHECK IF IN VIEW
        var $animation_elements = $('.anim-el');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var insetAmount = window_height / 20 // fifth of the screen
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height) - insetAmount;

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $(function () {
                        var el = $('.product-item');
                        var index = 0;
                        var timer = window.setInterval(function () {
                            if (index < el.length) {
                                el.eq(index++).addClass('product-item-show');
                            } else {
                                window.clearInterval(timer);
                            }
                        }, 200);
                    });
                    console.log('red')
                }
            });
        }
        $window.on('scroll orientationchange resize', check_if_in_view);
        $window.trigger('scroll');
        const updateProperties = (elem, state) => {
            elem.style.setProperty('--x', `${state.x}px`)
            elem.style.setProperty('--y', `${state.y}px`)
            elem.style.setProperty('--width', `${state.width}px`)
            elem.style.setProperty('--height', `${state.height}px`)
            elem.style.setProperty('--radius', state.radius)
            elem.style.setProperty('--scale', state.scale)
        }





        // Start Product Js
        $(".product-description-accordion").each(function () {
            var $this = $(this);
            $this.find("h6").on("click touch", function () {
                $(".product-description-accordion").removeClass("active")
                $(".product-description-accordion-content").slideUp();
                if ($this.find(".product-description-accordion-content:visible").length) {
                    $(".product-description-accordion").removeClass("active")
                    $(".product-description-accordion-content").slideUp();
                } else {
                    $this.addClass("active")
                    $(".product-description-accordion-content").slideUp();
                    $this.find(".product-description-accordion-content").slideDown();
                }
            })
        })

        if ($('.product-description-thumb-wrap').length) {
            $('.product-description-thumb-wrap').slick({
                autoplay: false,
                autoplaySpeed: 1500,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: 'unslick'
                }
            ]
            })
            $(window).on('resize', function () {
                $('.product-description-thumb-wrap').slick('resize');
            });
        }
        // End Product Js

        // Start Shop Js
        $('.shop-tab-trigger ul li').click(function () {
            $('.shop-tab-trigger ul li').removeClass('tab-active');
            $(this).addClass('tab-active');
            $('.shop-tab-item-wrap .shop-tab-item').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });



        if ($window.width() < 769) {
            $('.shop-tab-trigger-wrap').each(function () {
                var $$this = $(this);
                $$this.find('.tab-mobi-text em').click(function () {
                    $(this).parent('.shop-tab-trigger').addClass('dropdown-active');
                    $$this.find('.shop-tab-trigger').find('ul').slideToggle();
                })
                $$this.find('.shop-tab-trigger ul li').click(function () {
                    var valText = $(this).text(),
                        showText = $$this.find('.tab-mobi-text em')
                    console.log(valText)
                    $('.shop-tab-trigger ul li').removeClass('dropdown-inner-active')
                    $(this).parents('.shop-tab-trigger').addClass('dropdown-inner-active')
                    $(this).parents('.shop-tab-trigger').addClass('dropdown-inner-active')
                    $$this.find('.shop-tab-trigger').removeClass('dropdown-active')
                    $$this.find('.shop-tab-trigger').find('ul').slideUp();
                    showText.text(valText)
                })
            })


        }

        // End Shop Js

        var btnDistance = $('.add-to-cart-btn').offset().top;
        console.log(btnDistance)
        $(window).on('scroll', function () {
            var scrollY = $(this).scrollTop();
            console.log(scrollY)
            if (scrollY > btnDistance) {
                $('.sticky-cart').show();
            } else {
                $('.sticky-cart').hide();
            }

        })

        if ($('.product-content-wrap').length) {
            if ($(window).width() > 700) {
                var cartHeight = $('.sticky-cart').outerHeight() + 60;
                $('.main-footer-section').css({
                    'padding-bottom': cartHeight
                })
            }
        }

    }) // End ready function.

})(jQuery)




var mac = 0;
if (navigator.userAgent.indexOf('Mac') > 0) {
    mac = 1;
} else {
    mac = 0;
}
if (1 == mac) {
    $('body').addClass('mac-os');
} else {
    $("body").addClass('win-os');
}

function increaseCount(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}