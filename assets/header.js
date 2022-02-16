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
      
    if (location.pathname == '/') {
      $(".pereseLogo").addClass("big");
    } 
  });

  



$(window).scroll(function () {
  if ($(window).scrollTop() > 33) {
      $(".header-wrapper").addClass("active");
      $("#MainContent").addClass('adjustment');
      
      if (location.pathname == '/') {
        $(".pereseLogo").removeClass("big");
      } 
      
  } else {
      $("#MainContent").removeClass('adjustment');
      $(".header-wrapper").removeClass("active");

      if (location.pathname == '/') {
        $(".pereseLogo").addClass("big");
      } 
      
  }
});


function scrollingtoFooter(){



//フッターまで行ったらヘッダーをdisplay: none;
let toFooter =  document.getElementById('perseFooter');
// let toreact = toFooter.getBoundingClientRect();
// let elemtop = (toreact.top);
// let toRlogo = document.getElementById('mainRlogo');
// let elemRlogo = (toreact.top + window.pageYOffset);
let footerH = (toFooter.clientHeight) + 100;
let absolutePositionTop = (toFooter.getBoundingClientRect().top + window.pageYOffset ) - footerH;

window.addEventListener('scroll', ()=> {
  console.log(window.pageYOffset);
});

console.log(absolutePositionTop);
// $(window).scroll(function(){
//     if(($(window).scrollTop() > elemtop)){
//         $('.header-wrapper').addClass('fixed');
//     }else{
//         $('.header-wrapper').removeClass('fixed');
//     }
// });


$(window).scroll(function(){
    if(($(window).scrollTop() > absolutePositionTop)){
        $('.main__logo').addClass('fixed');
        $('.main__sns').addClass('fixed');
    }else{
        $('.main__logo').removeClass('fixed');
        $('.main__sns').removeClass('fixed');
    }
});

}



// ------------------------------------------------------------------------------

const conceptLink = document.querySelector("[href='/#concept']")
conceptLink.onclick = () => {
  if (location.pathname == '/') {
    location = '/index#concept'
  } else {
    location = '/#concept'
  }
}
const producerLink = document.querySelector("[href='/#producer']")
producerLink.onclick = () => {
  if (location.pathname == '/') {
  location = '/index#producer'
  } else {
    location = '/#producer'
  }
}

// ------------------------------------------------------------------------------