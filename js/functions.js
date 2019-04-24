$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 'slow');

    $('label.hamburguer-menu input').prop('checked', false);
});

const showNavbar = function() {
    const headerHeight = $('header').height() - 40;
    if($(window).scrollTop() > headerHeight) {
        $('nav').parent().removeClass('hidden-content');
    } else if($(window).scrollTop() < headerHeight) {
        $('nav').parent().addClass('hidden-content');
    }
};


$(document).ready(function() {
    AOS.init();

    $(window).scroll(function() {
        showNavbar();
    });

    $('#my-years').text(calculateAge(new Date(1993, 08, 09)));
});

function calculateAge(birthday) {
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

$('#go-to-top').on('click', function(_event) {
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
