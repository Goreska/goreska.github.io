var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

new WOW().init();