const closebtn = document.getElementById('js-close');
const menu = document.getElementById('Details-menu-drawer-container');
const bodyElement = document.getElementsByTagName('body');
const summary = document.getElementById('header__icon--summary');
const BG = document.getElementById('menuBg');
closebtn.addEventListener('click', function(){
    bodyElement[0].classList.remove('overflow-hidden-tablet');
    menu.classList.remove('menu-opening');
    summary.setAttribute('aria-expanded', false);
    setTimeout(function(){
        menu.removeAttribute('open');
    }, 500);
    
});

BG.addEventListener('click', function(){
    bodyElement[0].classList.remove('overflow-hidden-tablet');
    menu.classList.remove('menu-opening');
    summary.setAttribute('aria-expanded', false);
    setTimeout(function(){
        menu.removeAttribute('open');
    }, 500);
    
});


function gmenu(){
    let gbtn = document.getElementsByClassName('gmenu__product--subttl');
    for( let $i = 0; $i < gbtn.length; $i++ ) {
        gbtn[$i].onclick = function () {
            this.classList.toggle('active');

        }
    }
}
gmenu();



// $(window).on('load', function() {
//     $('#insta-feed').children('div').addClass('instafeeddiv');
// });


$(function(){
    $('#insta-feed').wrap('<div class="instagram">');
    $('#js-right').click(function () {
      $('.instagram').animate({
        scrollLeft: $('.instagram').scrollLeft() + 600
      }, 300);
      return false;
    });
  
    $('#js-left').click(function () {
      $('.instagram').animate({
        scrollLeft: $('.instagram').scrollLeft() - 600
      }, 300);
      return false;
    });
  
  });

  

//フッターまで行ったらヘッダーをdisplay: none;
// const toFooter =  document.getElementById('js-footer');
// const toreact = toFooter.getBoundingClientRect();
// const elemtop = (toreact.top + window.pageYOffset) - 60;
// // const toRlogo = document.getElementById('mainRlogo');
// const elemRlogo = (toreact.top + window.pageYOffset) - 300;

// $(window).scroll(function(){
//     if(($(window).scrollTop() > elemtop)){
//         $('.header-wrapper').addClass('fixed');
//     }else{
//         $('.header-wrapper').removeClass('fixed');
//     }
// });
// $(window).scroll(function(){
//     if(($(window).scrollTop() > elemRlogo)){
//         $('.main__logo').addClass('fixed');
//         $('.main__sns').addClass('fixed');
//     }else{
//         $('.main__logo').removeClass('fixed');
//         $('.main__sns').removeClass('fixed');
//     }
// });

$(window).scroll(function () {
    if ($(window).scrollTop() > 33) {
        $(".header-wrapper").addClass("active");
        $("#MainContent").addClass('adjustment');
    } else {
        $(".header-wrapper").removeClass("active");
        $("#MainContent").removeClass('adjustment');
    }
});
