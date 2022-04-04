//thumb
var swiper = new Swiper(".mySwiper", {
  // デフォルトの設定
  loop: false,
  spaceBetween: 3.5,
  slidesPerView: 5,
  slidesPerGroup: 5,
  freeMode: true,
  watchSlidesProgress: true,
  breakpointsBase:'product',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // Swiper のコンテナ幅が 750px 以上の場合
    750: {
      slidesPerView: 5,
      spaceBetween: 3.5,
      slidesPerGroup: 5
    }
  },
});

//fv
var swiper2 = new Swiper(".mySwiper2", {
  breakpointsBase:'product',
  // デフォルトの設定

  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,

  breakpoints: {
    // Swiper のコンテナ幅が 750px 以上の場合
    750: {
      slidesPerView: 1
    }
  },

  thumbs: {
    swiper: swiper,
  },
});


