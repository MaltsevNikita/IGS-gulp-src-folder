const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: { 
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: {
    invert: false,
  },
});

const everyWeekSlider = new Swiper('.everyWeek-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  // pagination: { 
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  grabCursor: true,
  pagination: { 
    el: '.everyWeek-slider-pagination',
    clickable: true,
  },
  mousewheel: {
    invert: false,
  navigation: {
    nextEl: '.everyWeekSlider-button-next',
    prevEl: '.everyWeekSlider-button-prev',
  },
  },
});