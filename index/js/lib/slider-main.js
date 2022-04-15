'use strict';

function mainSlider () {
  let mySwiper = '';
  let breakpoint = window.matchMedia('(max-width: 767px)');
  let breakpointChecker = function () {
    if (breakpoint.matches) {
      if (mySwiper) {
        mySwiper.destroy(true, true);
      }

      mySwiper = new Swiper('.main-screen__slider', {
        spaceBetween: 10,
        pagination: {
          el: '.main-screen__slider-pagination',
          type: 'fraction',
        },

        scrollbar: {
          el: '.main-screen__slider-scrollbar',
        },
      });
      return;
    } else {
      if (mySwiper) {
        mySwiper.destroy(true, true);
      }

      mySwiper = new Swiper('.main-screen__slider', {
        pagination: {
          el: '.main-screen__slider-pagination',
          type: 'bullets',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
          },
        },
      });
    }
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

mainSlider();


// слайдер с отзывом
new Swiper('.slider-reviews__wrapper-slide', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
  }
});


// нижний слайдер
function bottomSlider () {
  let mySwiper = '';
  let breakpoint = window.matchMedia('(max-width: 375px)');
  let breakpointChecker = function () {
    if (breakpoint.matches) {
      if (mySwiper) {
        mySwiper.destroy(true, true);
      }

      mySwiper = new Swiper('.furniture-block__wrapper-product', {
        spaceBetween: 10,
        pagination: {
          el: '.furniture-block__slider-pagination',
          type: 'fraction',
        },

        scrollbar: {
          el: '.furniture-block__slider-scrollbar',
        },
      });
      return;
    } else {
      if (mySwiper) {
        mySwiper.destroy(true, true);
      }

     
    }
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

bottomSlider();