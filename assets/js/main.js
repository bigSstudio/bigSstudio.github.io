    $(document).ready(function() {
     $(".brackets, .cta-scroll, .cta-scroll a").click(function(t) {
        var e = $(this).attr("href"),
            i = $(e).offset().top;
        $("html, body").animate({
            scrollTop: i
        }, 500), t.preventDefault()
    }), $("#toggle").click(function() {
        $("#vert-nav").toggleClass("open").show()
    }), $(".list-inline-item a").on("click", function() {
        $("#vert-nav").removeClass("open")
    });
    $(window).resize(function() {
        rmvClass()
    }), rmvClass()
}), $(window).on("load", function() {
    $(".loading-screen").fadeOut("slow"), AOS.init({
        offset: 100,
        disable: "mobile",
        duration: 600,
        once: !0
    }), $(".hero-h").typeIt({
        strings: "designing futuristic web interfaces and visual effects",
        speed: 100,
        html: !0,
        lifeLike: !0,
        autoStart: !0,
        startDelay: 2500
    });
    var $container = $('.grid');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    $('.bs-se-filter-link').click(function(){
        $('.bs-se-filter-link .active').removeClass('active');
        $(this).addClass('active');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
});
