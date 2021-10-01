(function(a) {
    jQuery("nav#dropdown").meanmenu();
    a.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade"
    });
    a(window).on("load", function() {
        var b = a(".portfolio-content");
        b.isotope({
            filter: "*",
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: false
            }
        });
        a(".portfolio-menu li a").on("click", function() {
            a(".portfolio-menu li a.active").removeClass("active");
            a(this).addClass("active");
            var c = a(this).attr("data-filter");
            b.isotope({
                filter: c,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false
                }
            });
            return false
        })
    });
    a(".slider-carousel").owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        dots: false,
        smartSpeed: 3000,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    a(window).on("load", function() {
        a("#preloader").fadeOut("slow", function() {
            a(this).remove()
        })
    })
})(jQuery);