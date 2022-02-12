$('.product__slick').slick({
    autoplay: false,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    arrows: false,
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    dots: true　//下部ドットナビゲーションの表示
  });


  $('.rip02__slick').slick({
    autoplay: false,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    arrows: true,
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    dots: true,　//下部ドットナビゲーションの表示
    asNavFor: '.rip02__slick02',
    centerMode: true,
    speed: 300,
    centerPadding: '19%'
  });


  $('.rip02__slick02').slick({
    autoplay: false,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    arrows: false,
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    dots: false,　//下部ドットナビゲーションの表示
    asNavFor: '.rip02__slick',
    speed: 600,
    centerMode: true
  });



  //回転する
  function relotate(){
    var rotate = function(logo, angle) {
      logo.css({
      "transform" : "rotate("+angle+"deg)"
      });
     }
     $(window).scroll(function(){
      rotate($(".relotateNude"), $(window).scrollTop()*0.6);
     })
    
  }
  relotate();