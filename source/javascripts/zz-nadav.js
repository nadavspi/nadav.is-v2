window.onload = function() {
    fitVids('.fitvids');
}

Zepto(function($) {

    var $nav = $("#navigation");

    $('button[aria-controls="navigation"]').on('click', function() {
        $(this).toggleClass('is-expanded');

        if ($nav.attr('aria-expanded') == 'false') {
            $nav.attr('aria-expanded', true).focus();
        } else {
            $nav.attr('aria-expanded', false);
        }
    });

    if (window.outerWidth >= 800) {
        $nav.attr('aria-expanded', true).attr('tabindex', 1);
    }

});
