const swiper = new Swiper('.swiper_makeup01', {
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



