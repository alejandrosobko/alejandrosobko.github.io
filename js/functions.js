$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

var showNavbar = function() {
    var headerHeight = $('.header').height() - 100;
    if($(window).scrollTop() > headerHeight) {
        $('nav').removeClass('hidden-content');
    } else if($(window).scrollTop() < headerHeight) {
        $('nav').addClass('hidden-content');
    }
};


$(document).ready(function() {
    $(window).scroll(function() {
        showNavbar();
    });
});