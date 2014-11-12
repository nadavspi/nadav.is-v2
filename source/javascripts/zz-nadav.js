window.onload = function() {
    fitVids('.fitvids');
}

(function() {
    var nav = document.getElementById('navigation');

    document.querySelector('button[aria-controls="navigation"]')
        .addEventListener('click', function(e) {
            if (nav.getAttribute('aria-expanded') == 'false') {
                nav.setAttribute('aria-expanded', true);
                nav.focus();
            } else {
                nav.setAttribute('aria-expanded', false);
            }
        }, false);

    if (window.outerWidth >= 800) {
        nav.setAttribute('aria-expanded', true);
        nav.setAttribute('tabindex', 1);
    }

}());
