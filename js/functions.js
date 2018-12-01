/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS('particles-js', {"particles":{"number":{"value":20,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":10,"random":true,"anim":{"enable":false,"speed":10,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":300,"color":"#ffffff","opacity":0.4,"width":2},"move":{"enable":true,"speed":5,"direction":"random","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":800,"line_linked":{"opacity":1}},"bubble":{"distance":800,"size":80,"duration":2,"opacity":0.8,"speed":3},"repulse":{"distance":100,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 50
    }, 'slow');

    $('label.hamburguer-menu input').prop('checked', false);
});

var showNavbar = function() {
    var headerHeight = $('.header').height() - 10;
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

    $('#my-years').text(calculateAge(new Date(1993, 08, 09)));
});

function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

$('#go-to-top').on('click', function(event) {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
})

$('#send-contact-form').on('click', function(event) {
    const $form = $(event.currentTarget).parents('.form-horizontal');
    const $name = $form.find('#inputName');
    const $email = $form.find('#inputEmail');
    const $body = $form.find('#inputBody');
    const $emptyFormAlert = $form.find('#empty-form-alert');

    if (!$name.val() || !$email.val() || !$body.val()) {
        event.preventDefault();
        $emptyFormAlert.text('Nothing to say? Hmm... I would love to read your opinion!');
    } else {
        $emptyFormAlert.text('Message sent! Thanks!');
    }
})