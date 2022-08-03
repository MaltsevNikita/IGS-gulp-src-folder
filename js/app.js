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

  grabCursor: true,
  pagination: { 
    el: '.everyWeek-slider-pagination',
    clickable: true,
  },
  slidesPerView: 1.1,
  mousewheel: {
    invert: false,
  navigation: {
    nextEl: '.everyWeekSlider-button-next',
    prevEl: '.everyWeekSlider-button-prev',
  },
  },
});

const whatElseSlider = new Swiper('.whatElse-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  slidesPerView: 1.1,
  mousewheel: {
    invert: false
  },
  navigation: {
        nextEl: '.whatElse-slider-button-next',
        prevEl: '.whatElse-slider-button-prev',
      },
});