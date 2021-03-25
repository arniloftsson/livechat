(function ($) {
    $(document).ready(function () {
        var $checker = $('.is-mobile');
        var result = $checker.is(':visible');
        if (result) {
            window.__lc.group = 1;
        }
    });
})(jQuery);