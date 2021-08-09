$(function () {


  var winH = $(window).height();
  $('.top').outerHeight($(window).height());
  $(window).on('resize', function () {
    winH = $(window).height();
    $('.top').outerHeight(winH);
  });

  if (window.matchMedia("(max-width: 767px)").matches) {
    $('.top').css({
      'height': '-=80px'
    });
  } else {
    $('.top').css({
      'height': '-=220px'
    });
  }


  // header
  var $win = $(window),
    $header = $('header'),
    animationClass = 'is-animation';

  $win.on('load scroll', function () {
    var value = $(this).scrollTop();
    if (value > 300) {
      $header.addClass(animationClass);
    } else {
      $header.removeClass(animationClass);
    }
  });
  // header

  // NavBar
  
  // NavBar

});

