/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {




    // partner-slider
    $(function () {
        if ($('.partner-slider').length) {
            $(".partner-slider").owlCarousel({
                items: 3,
                margin: 30,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 2000,
                smartSpeed: 2000,
                navText: ["<img src='assets/img/left-arrowsl.svg' class='img-fluid' />", "<img src='assets/img/right-arrowsl.svg' class='img-fluid' />"],
                dots: true,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    480: {
                        items: 3
                    },
                    767: {
                        items: 4
                    },
                    1024: {
                        items: 6
                    },
                    1200: {
                        items: 9
                    }
                }
            });
        }

    });



    // taskSlider
    $(function () {
        if ($('.taskSlider').length) {
            $(".taskSlider").owlCarousel({
                items: 3,
                margin: 30,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3500,
                smartSpeed: 3500,
                navText: ["<img src='assets/img/prev2.svg' class='img-fluid' />", "<img src='assets/img/next2.svg' class='img-fluid' />"],
                dots: true,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
                }
            });
        }
    });




     // Back to top

     var btn = $('#Back-to-Top');

     $(window).scroll(function () {
         if ($(window).scrollTop() > 300) {
             btn.addClass('show');
         } else {
             btn.removeClass('show');
         }
     });
     btn.on('click', function (e) {
         e.preventDefault();
         $('html, body').animate({ scrollTop: 0 }, '300');
     });






    // wow js init
    $(function () {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true
        });
        wow.init();
    });











    

});
