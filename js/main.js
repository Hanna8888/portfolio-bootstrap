/*-----------------------------------------------------------
 * Template Name    : Joe | Responsive Bootstrap Personal Template
 * Author           : Spacecodes
 * Version          : 1.0.0
 * Created          : December 2020
 * File Description : Main js file of the template
 *------------------------------------------------------------
 */

$(document).ready(function() {

    "use strict";

    typingText();
    owlCarousel();
    magnificPopup();
    colorSwitcher();
    themeSwitcher();
    scrollTop();
});

$(window).on("load", function() {
    preLoader();
    workGallery();
});

/*-----------------------------------------------------------------------------
                                   FUNCTIONS
-----------------------------------------------------------------------------*/

// START PRELOADER
function preLoader() {
    $(".preloader").fadeOut(800);
}    
// END PRELOADER

//START TYPED
function typingText() {

    "use strict";

    var $element = $(".element");
    if($element.length){
        var options = {
            strings: $element.attr('data-elements').split(','),
            typeSpeed: 100,
            backDelay: 3000,
            backSpeed: 50,
            loop: true
        };
        var typed = new Typed(".element", options);
    }
}
//END TYPED

// START CAROUSEL CLIENT
function owlCarousel() {

    "use strict";

    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 33,
        nav: false,
        autoplay: false,
        center: false,
        dots: true,
        mouseDrag: true,
        touchDrag: true,
        smartSpeed: 1000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            },

        },
    });
}
// END CAROUSEL CLIENT

// START GALLERY
function workGallery() {

    "use strict";

    var filter = $("#work-nav-filter"),
        items = $(".work-items");
    items.isotope({
        filter: "*",
        layoutMode: "masonry",
        animationOptions: {
            duration: 750,
            easing: "linear"
        }
    });

    filter.find("a").on("click", function() {
        var selector = $(this).attr("data-filter");
        return filter.find("a").removeClass("active"), $(this).addClass("active"), items.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: "linear",
                queue: false,
            }
        });
        return false;
    });
}
// END GALLERY

// START MAGNIFICPOPUP
function magnificPopup() {

    "use strict";

$(".zoom").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    mainClass: "mfp-fade",
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    }
});
}
// END MAGNIFICPOPUP

// START COLOR SWITCH
function colorSwitcher() {

    "use strict";

    $(".switched-sidebar ul li").on("click", function() {
        $("link[href*='color']").attr("href", "css/colors/" + $(this).data('color') + ".css");
    });

    $(".menu-button").on("click", function() {
        $(this).addClass("hide");
        $(".menu-sidebar").addClass("show");
    });

    $(".switch-button").on("click", function() {
        $(this).addClass("hide");
        $(".switched-sidebar").addClass("show");
    });

    $(".menu-sidebar .hide-button").on("click", function() {
        $(this).parent().removeClass("show");
        $(".menu-button").removeClass("hide");
    });

    $(".switched-sidebar .hide-button").on("click", function() {
        $(this).parent().removeClass("show");
        $(".switch-button").removeClass("hide");
    });
}
// END COLOR SWITCH

// START THEME SWITCH
function themeSwitcher() {

    "use strict";

    $('.theme-switch-input').click(function() {
        $("body").toggleClass('light-theme');
    });
}
// END THEME SWITCH

// START SCROLL TO TOP 
function scrollTop() {

    "use strict";

    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $('.chevron-button').fadeIn();
        } else {
            $('.chevron-button').fadeOut();
        }
    });
    $('.chevron-button').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
}
// END SCROLL TO TOP


