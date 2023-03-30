const swiper = new Swiper('.swiper-products', {
  // Optional parameters
  direction: 'horizontal',
  speed: 1300,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2.5,
      spaceBetween: 18,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
});

const swiperReview = new Swiper('.swiper-review', {
  // Optional parameters
  direction: 'horizontal',
  speed: 1300,

  loop: true,

  pagination: {
    el: '.swiper-pagination-review',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});
