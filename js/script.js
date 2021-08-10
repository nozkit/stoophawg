$(function () {

  // メインビジュアルサイズ調整
  var winH = $(window).height();
  $('#top').outerHeight($(window).height());
  $(window).on('resize', function () {
    winH = $(window).height();
    $('#top').outerHeight(winH);
  });

  if (window.matchMedia("(max-width: 767px)").matches) {
    $('#top').css({
      'height': '-=80px'
    });
  } else {
    $('#top').css({
      'height': '-=220px'
    });
  }
  // メインビジュアルサイズ調整


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

  // リンク位置調整
  $('a[href^="#"]').click(function() {
		var speed = 800;
		var adjust = 200;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - adjust;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
  // リンク位置調整

});

