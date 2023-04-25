$('.phome__slide').slick({
  fade: true, 
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
    initialSlide: 4,

    asNavFor: '.phome__product--slick02',


  });

  $('.phome__product--slick02').slick({
    fade: true, 
    autoplay: false,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    arrows: false,
    speed: 600,
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    dots: false,　//下部ドットナビゲーションの表示
    initialSlide: 4,

    asNavFor: '.phome__product--slick',

  });
  $('.phome__product--slick03').slick({
    autoplay: false,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    arrows: true,
    speed: 300,
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    dots: true,　//下部ドットナビゲーションの表示
    asNavFor: '.phome__product--slick04'
  });
  
  $('.phome__product--slick04').slick({
    fade: true, 
    autoplay: false,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    arrows: false,
    speed: 600,
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    dots: false,　//下部ドットナビゲーションの表示
    asNavFor: '.phome__product--slick03'

  });






  $('.phome__slicktop--01').slick({
    autoplay: false,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    arrows: true,
    speed: 300,
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    dots: true,　//下部ドットナビゲーションの表示


    asNavFor: '.phome__slicktop--02',


  });

  $('.phome__slicktop--02').slick({
    fade: true, 
    autoplay: false,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    arrows: false,
    speed: 600,
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    dots: false,　//下部ドットナビゲーションの表示

    asNavFor: '.phome__slicktop--01',

  });
  // ふわ
$(function(){
    $(window).scroll(function (){
        $('.fadein_block').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            var target = $('.fadein_block');
            var speed = 500;
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

      $(window).scroll(function (){
        $('.fadein_block3').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            var target = $('.fadein_block3');
            var speed = 800;
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

    $(window).scroll(function (){
      $('.fadein_block2').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          var target = $('.fadein_block2');
          var speed = 800;
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



// スクロールで要素が表示された時にclassを付与する
function add_class_in_scrolling(target) {
    let winScroll = $(window).scrollTop();
    let winHeight = $(window).height();
    let scrollPos = winScroll + winHeight;
    if (target.length) {
      var menuPos = target.offset().top;
    }
    if(menuPos < scrollPos) {
        setTimeout(function(){
            target.addClass('is-show');
        }, 800);
        
    }
}

function addFooter(target) {
  let winScroll = $(window).scrollTop();
  let winHeight = $(window).height();
  let mainlogo = $('.main__logo');
  let mainSns = $('.main__sns');
  let scrollPos = winScroll + winHeight;
  if (target.length) {
    var menuPos = target.offset().top;
  }
  if(menuPos < scrollPos) {
      setTimeout(function(){
        mainlogo.addClass('fixed');
        mainSns.addClass('fixed');
      }, 500);
  }else{
    mainlogo.removeClass('fixed');
    mainSns.removeClass('fixed');
  }
}
$(window).on('load scroll', function() {
  addFooter($('#perseFooter'));
});


$(window).on('load scroll', function() {
  add_class_in_scrolling($('.phome__produce--lblc'));
  add_class_in_scrolling($('.product__intro'));
  add_class_in_scrolling($('.product__intro--art'));
  add_class_in_scrolling($('.product__nude--02'));
  add_class_in_scrolling($('.product__nude--03a'));
  add_class_in_scrolling($('.product__nude--03b'));
  add_class_in_scrolling($('.product__nude--04'));
  add_class_in_scrolling($('.product__rose--01fvc'));
  // add_class_in_scrolling($('.product__rose--02d'));
  // add_class_in_scrolling($('.product__rose--02e'));
  add_class_in_scrolling($('.product__rose--03'));
  add_class_in_scrolling($('.product__rose--04'));
  add_class_in_scrolling($('.product__orange--01'));
  add_class_in_scrolling($('.product__orange--02'));
  // add_class_in_scrolling($('.product__orange--03a'));
  // add_class_in_scrolling($('.product__orange--03b'));
  add_class_in_scrolling($('.product__almond--01'));
  add_class_in_scrolling($('.product__almond--02'));
  add_class_in_scrolling($('.product__almond--03'));
  // add_class_in_scrolling($('.product__almond--04a'));
  // add_class_in_scrolling($('.product__almond--04b'));
  add_class_in_scrolling($('.product__french--01'));
  add_class_in_scrolling($('.product__french--02'));
  add_class_in_scrolling($('.product__french--03'));

  add_class_in_scrolling($('.phome__pararaSp2'));
  add_class_in_scrolling($('.rip06'));
  add_class_in_scrolling($('.product__nude--01'));


});



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
  

$(window).on('load', function(){
  $('.fadeUpTrigger').addClass("fadeUp");
});

