const swiper01 = new Swiper('.swiper_makeup01', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className} swiper_makeup01_${index + 1}"></span>`
        },
    }
});

const swiperRip = new Swiper('.swiper_makeup02', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    initialSlide: 5,
    effect: "fade",
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className} swiper_makeup02_${index + 1}"></span>`
        },
    }
});

const swiperVita = new Swiper('.swiper_makeup03', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className} swiper_makeup03_${index + 1}"></span>`
        },
    }
});

const swiperContact = new Swiper('.swiper_makeup04', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className} swiper_makeup04_${index + 1}"></span>`
        },
    }
});

const about = new Swiper('.aboutRnSwiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    autoplay: {
        delay: 800 //3秒ごとにスライダを切り替える
      }
    // If we need pagination
});



const fvSwipe = new Swiper('.fvRnSwipe', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    effect: "fade",

    // spaceBetween: 30,

      // Navigation arrows
      navigation: {
        nextEl: '.fvRnSwipe-button-next',
        prevEl: '.fvRnSwipe-button-prev',
      },
    
    autoplay: {
        delay: 2000 //3秒ごとにスライダを切り替える
    }
});

// アイシャドウ
var swiperEyeshadow = new Swiper(".eyeshadow .mySwiper", {
    // デフォルトの設定
    loop: false,
    spaceBetween: 3.5,
    slidesPerView: 4.5,
    slidesPerGroup: 4,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
  
  //fv
  var swiperEyeshadow02 = new Swiper(".eyeshadow .mySwiper2", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    thumbs: {
      swiper: swiperEyeshadow,
    }
  });


// コンタクト
var swiperEyeshadow = new Swiper(".clenz .mySwiper", {
  // デフォルトの設定
  loop: false,
  spaceBetween: 3.5,
  slidesPerView: 4.5,
  slidesPerGroup: 4,
  freeMode: true,
  watchSlidesProgress: true,  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

//fv
var swiperEyeshadow02 = new Swiper(".clenz .mySwiper2", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  thumbs: {
    swiper: swiperEyeshadow,
  }
});


  
// ベースメイク
var swiperVitas = new Swiper(".vita__fv .mySwiper", {
  // デフォルトの設定
  loop: false,
  spaceBetween: 3.5,
  slidesPerView: 4.5,
  slidesPerGroup: 4,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

//fv
var swiperVita02 = new Swiper(".vita__fv .mySwiper2", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  thumbs: {
    swiper: swiperVitas,
  }
});



//thumb
var swiper = new Swiper("#slyxmich__swiper01 .mySwiper", {
    // デフォルトの設定
    loop: false,
    spaceBetween: 3.5,
    slidesPerView: 4.5,
    slidesPerGroup: 4,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
  
  //fv
  var swiper2 = new Swiper("#slyxmich__swiper01 .mySwiper2", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    thumbs: {
      swiper: swiper,
    }
  });
  
  
  var swiperSly02 = new Swiper("#slyxmich__swiper02 .mySwiper", {
    // デフォルトの設定
    loop: false,
    spaceBetween: 3.5,
    slidesPerView: 4.5,
    slidesPerGroup: 4,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
  
  //fv
  var swiper2Sly02 = new Swiper("#slyxmich__swiper02 .mySwiper2", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    thumbs: {
      swiper: swiperSly02,
    }
  });
  
  

