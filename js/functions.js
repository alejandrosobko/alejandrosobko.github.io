$(document).ready(function() {
  $("#back-top").hide();

  $('.nav a, .button').click(function() {
    var item = $(this).attr("href");
    var destination = $(item).offset().top;
    $("html, body").animate({ scrollTop: destination }, 1200);
    return false;
  });

  var height = $( document ).height();
  var scroll = (height/100)*20;
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > scroll) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });

    $('#back-top a').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 850);
      return false;
    });
  });
});
