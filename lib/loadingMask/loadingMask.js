Mask = {
    showFader: function () {
        var top = $(window).scrollTop();
        $('.x-mask').css('top', top);
        $('.x-mask').show();
    },
    show: function () {
        var top = $(window).scrollTop();
        $('.x-mask').css('top', top);
        $('.x-mask-msg').css('marginTop', top);

        $('.x-mask').show();
        $('.x-mask-msg').show();
    },
    hide: function () {
        $('.x-mask').hide();
        $('.x-mask-msg').hide();
    }
};
