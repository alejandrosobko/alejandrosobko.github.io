$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);

    $('label.hamburguer-menu input').prop('checked', false);
});

var showNavbar = function() {
    var headerHeight = $('.header').height();
    if($(window).scrollTop() > headerHeight) {
        $('nav').parent().removeClass('hidden-content');
    } else if($(window).scrollTop() < headerHeight) {
        $('nav').parent().addClass('hidden-content');
    }
};


$(document).ready(function() {
    $(window).scroll(function() {
        showNavbar();
    });
});