$(function() {




    // ハンバーガーメニュ
    $('.menu').on('click',function(){
        $('.menu__line').toggleClass('active');
        $('.gnav').fadeToggle();
    });
    // ハンバーガーメニュ

    var winH = $(window ).height();
      $('.top').outerHeight($(window).height());    
      $(window).on('resize',function(){
        winH = $(window).height();
        $('.top').outerHeight(winH);
      });

    if(window.matchMedia("(max-width: 767px)").matches){
      $('.top').css({
        'height':'-=80px'
        });
    }else{
      $('.top').css({
        'height':'-=200px'
        });
    }

    
  });

