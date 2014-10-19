window.onload = function() {
    fitVids('.fitvids');
}

$('button[aria-controls="navigation"]').on('click', function() {
    $nav = $("#navigation");

    if ($nav.attr('aria-expanded') == 'false') {
        $nav.attr('aria-expanded', true).focus();
    } else {
        $nav.attr('aria-expanded', false);
    }
});
