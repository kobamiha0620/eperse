$('.phome__slide').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    arrows: false,
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    dots: true　//下部ドットナビゲーションの表示
  });


  $('.phome__product--slick').slick({
    autoplay: false,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    arrows: true,
    speed: 300,
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    dots: true,　//下部ドットナビゲーションの表示
    asNavFor: '.phome__product--slick02'

  });

  $('.phome__product--slick02').slick({
    autoplay: false,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    arrows: false,
    speed: 500,
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    dots: false,　//下部ドットナビゲーションの表示
    asNavFor: '.phome__product--slick'

  });
  $('.phome__product--slick03').slick({
    autoplay: false,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    arrows: true,
    speed: 300,
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    dots: true　//下部ドットナビゲーションの表示

    
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 33) {
        $(".fadeUpTrigger").addClass("fadeUp");
    } 
});



  // ふわ
$(function(){
    $(window).scroll(function (){
        $('.fadein_block').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            var target = $('.fadein_block');
            var speed = 600;
            if(scroll > elemPos - windowHeight){
                target.find('.fadein01').addClass('scrollin');
                setTimeout(function(){
                    target.find('.fadein02').addClass('scrollin');
                    setTimeout(function(){
                        target.find('.fadein03').addClass('scrollin');
                        setTimeout(function(){
                            target.find('.fadein04').addClass('scrollin');
                            setTimeout(function(){
                                target.find('.fadein05').addClass('scrollin');
                                setTimeout(function(){
                                    target.find('.fadein06').addClass('scrollin');
                                },speed);
                            },speed);
                        },speed);
                    },speed);
                },speed);
            }
        });
    });
});


$(window).on('load scroll', function() {
    add_class_in_scrolling($('.phome__produce--lblc'));
});
 
// スクロールで要素が表示された時にclassを付与する
function add_class_in_scrolling(target) {
    var winScroll = $(window).scrollTop();
    var winHeight = $(window).height();
    var scrollPos = winScroll + winHeight;
 
    if(target.offset().top < scrollPos) {
        setTimeout(function(){
            target.addClass('is-show');
        },1000);
        
    }
}

class ParallaxEffectBackground {
    constructor() {
      this.devided = 5;
      this.target = '.phome__parara';
      this.setBackgroundPosition();
    }
  
    getScrollTop() {
      return Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop,
        window.scrollY
      );
    }
  
    setBackgroundPosition() {
      document.addEventListener('scroll', e => {
        const scrollTop = this.getScrollTop();
        const position = scrollTop / this.devided;
        if (position) {
          document.querySelectorAll(this.target).forEach(element => {
            element.style.backgroundPosition = 'center top -' + position + 'px';
          });
        }
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', event => {
    new ParallaxEffectBackground();
  });
  

