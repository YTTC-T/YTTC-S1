/* Swiper : Pagination & Navigation */
// https://swiperjs.com/swiper-api#pagination api 참고
// https://ktsmemo.cafe24.com/s/SwiperJS/357 fade & clickable 참고
// https://ktsmemo.cafe24.com/s/SwiperJS/359 속도 참고
// https://swiperjs.com/types/interfaces/types_modules_autoplay.autoplayoptions autoplay(delay: 4000) 참고
const swiper = new Swiper('.mySwiper', {
  autoplay: {
    delay: 4000
  },
  effect: 'fade',
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar'
  },
  navigation: {
    nextEl: '.swiper-button__next',
    prevEl: '.swiper-button__prev'
  }
})

// https://codepen.io/naradesign/pen/ZOEMyO <- swiper.js autoplay 정지 테스트 참고
