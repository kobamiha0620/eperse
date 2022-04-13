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
    // asNavFor: '.rip02__slick02',
    centerMode: true,
    speed: 300,
    centerPadding: '21%'
  });


  // $('.rip02__slick02').slick({
  //   fade: true,
  //   autoplay: false,//自動的に動き出すか。初期値はfalse。
  //   infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  //   slidesToShow: 1,//スライドを画面に3枚見せる
  //   arrows: false,
  //   slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
  //   dots: false,　//下部ドットナビゲーションの表示
  //   asNavFor: '.rip02__slick',
  //   speed: 300,
  //   centerMode: true
  // });



  //回転する
  // function relotate(){
  //   var rotate = function(logo, angle) {
  //     logo.css({
  //     "transform" : "rotate("+angle+"deg)"
  //     });
  //    }
  //    $(window).scroll(function(){
  //     rotate($(".relotateNude"), $(window).scrollTop()*0.6);
  //    })
    
  // }
  // relotate();


  function contact(){
    const span = $('#js-online');
    const slide = $('#js-slide');

    span.on('click', function(e){
      e.stopPropagation();
      if(span.hasClass('isShow')){
        span.removeClass('isShow');
        $(slide).slideUp(300);
        
      }else{
        span.addClass('isShow');
        $(slide).slideDown(300);

      }
    });

    slide.on('mouseleave',function(e){
      e.stopPropagation();
      span.removeClass('isShow');
      $(slide).slideUp(300);

    });



    const span2 = $('#js-online2');
    const slide2 = $('#js-slide2');



    span2.on('click', function(e){
      e.stopPropagation();
      if(span2.hasClass('isShow')){
        span2.removeClass('isShow');
        $(slide2).slideUp(300);
        
      }else{
        span2.addClass('isShow');
        $(slide2).slideDown(300);

      }
    });

    slide2.on('mouseleave',function(e){
      e.stopPropagation();
      span2.removeClass('isShow');
      $(slide2).slideUp(300);

    });
  }
  contact();