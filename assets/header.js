const closebtn = document.getElementById('js-close');
const menu = document.getElementById('Details-menu-drawer-container');
const bodyElement = document.getElementsByTagName('body');
const summary = document.getElementById('header__icon--summary');
const BG = document.getElementById('menuBg');
closebtn.addEventListener('click', function () {
  bodyElement[0].classList.remove('overflow-hidden-tablet');
  menu.classList.remove('menu-opening');
  summary.setAttribute('aria-expanded', false);
  setTimeout(function () {
    menu.removeAttribute('open');
  }, 500);

});

BG.addEventListener('click', function () {
  bodyElement[0].classList.remove('overflow-hidden-tablet');
  menu.classList.remove('menu-opening');
  summary.setAttribute('aria-expanded', false);
  setTimeout(function () {
    menu.removeAttribute('open');
  }, 500);

});

//旧
function gmenu() {
  let gbtn = document.getElementsByClassName('gmenu__product--subttl');
  for (let $i = 0; $i < gbtn.length; $i++) {
    gbtn[$i].onclick = function () {
      this.classList.toggle('active');
    }
  }
}
// gmenu();

//リニューアル
function gmenuRnew() {
  let gbtn = document.getElementsByClassName('newgmenu__product--blc');
  for (let $i = 0; $i < gbtn.length; $i++) {
    gbtn[$i].onclick = function () {
      this.classList.toggle('active');
    }
  }
}
gmenuRnew();




// $(window).on('load', function() {
//     $('#insta-feed').children('div').addClass('instafeeddiv');
// });


$(function () {

  if (location.pathname == '/') {
    $("body").addClass("homePerse");
  }

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





// $(window).scroll(function () {
//   if ($(window).scrollTop() > 50) {
//       $(".header-wrapper").addClass("active");
//       $("#MainContent").addClass('adjustment');

//   } else {
//       $("#MainContent").removeClass('adjustment');
//       $(".header-wrapper").removeClass("active");

//   }
// });


//上部固定
function announcementBar() {

  //アナウンスメント
  const anbnr = document.getElementById('shopify-section-announcement-bar');
  const ah = anbnr.clientHeight;
  const header = document.getElementById('header-wrapper');

  window.addEventListener("scroll", function () {
    const scroll = window.pageYOffset;
    
    if (scroll > ah) {
      header.classList.add('fixed');

    } else {
      header.classList.remove('fixed');
    }
  });

}

announcementBar();



// ------------------------------------------------------------------------------

// ページ内リンク
// const conceptLink = document.querySelector("[href='/#concept']")
// conceptLink.onclick = () => {
//   if (location.pathname == '/') {
//     location = '/index#concept'
//   } else {
//     location = '/#concept'
//   }
// }
// const producerLink = document.querySelector("[href='/#producer']")
// producerLink.onclick = () => {
//   if (location.pathname == '/') {
//   location = '/index#producer'
//   } else {
//     location = '/#producer'
//   }
// }



// ------------------------------------------------------------------------------