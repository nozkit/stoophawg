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
  
  // header


  // NavBar

  // ヘッダーを取得
  const headerMenuBar = document.getElementById("headerMenuBar");
  // ヘッダーの高さを取得
  const hH = headerMenuBar.clientHeight;
  // ウィンドウの高さを取得
  const winHi = window.innerHeight;
  // ページの高さを取得
  const docH = document.documentElement.scrollHeight;
  // ウィンドウが最下部達した場合のウィンドウ上部の位置を取得
  const windBtm = docH - winHi;

  // 現在地を示す変数を定義
  let pos = 0;
  // スクロール直前の位置を示す変数を定義
  let lastPos = 0;

  const onScroll = () => {
    if (pos > hH && pos > lastPos) {
      headerMenuBar.classList.add("headerMenuBar--unpinned");
    }
    // スクロール位置がヘッダーの高さ分より小さいか
    // またはスクロール位置が最後のスクロール位置より小さい場合はclass名を削除
    if (pos < hH || pos < lastPos || windBtm <= pos) {
      headerMenuBar.classList.remove("headerMenuBar--unpinned");
    }

    // 最後のスクロール位置を保存
    lastPos = pos;
  };

  window.addEventListener("scroll", () => {
    // スクロールするごとにpos（現在地）の値を更新
    pos = window.scrollY;
    onScroll();
  });


  // NavBar



  // リンク位置調整
  $('a[href^="#"]').click(function () {
    var speed = 800;
    var adjust = 200;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
  // リンク位置調整

});

