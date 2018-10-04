    $('.s-u-modal-wrapper').css("display", "none");
    $('.s-se-cta').click(function(e) {
        e.preventDefault();
        $('.s-u-modal-wrapper').css("display", "flex");
        $('.s-c-form').css("display", "block");
        $('.s-se-thanks').css("display", "none");
    });
    $('.s-u-close').click(function (e) {
        e.preventDefault();
        $('.s-u-modal-wrapper').css("display", "none");
    });
    $('.s-se-sumbit').click(function(e) {
        e.preventDefault();
        $('.s-c-form').css("display", "none");
        $('.s-se-thanks').css("display", "flex");
    });