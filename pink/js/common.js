const navMain = document.querySelector('.main-page__nav');
const navToggle = document.querySelector('.hamburger');
const openMenu = document.querySelector('.main-nav__wrapper');

navMain.classList.remove('main-page__nav--no-js');
navToggle.classList.add('show-hamburger');

navToggle.addEventListener('click', function() {
    if (navToggle.classList.contains('is-closed')) {
        navToggle.classList.remove('is-closed');
        navToggle.classList.add('is-active');
        openMenu.classList.add('main-nav__wrapper--open-block');
    }
    else  {
        navToggle.classList.remove('is-active');
        navToggle.classList.add('is-closed');
        openMenu.classList.remove('main-nav__wrapper--open-block');
    }
});


$(document).ready(function () {
    $('.review-slider__items').slick({
        slideToScroll: 3,
        responsive: [
            {
            breakpoint: 993,
            settings: {
                dots: true,
                arrows: false
            }
        }
    ]
    });
});


$(document).ready(function () {
    $('.price-table').slick({
        arrows: false,
        dots: true,
        initialSlide: 1,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        mobileFirst: true,
        responsive: [
            {
             breakpoint: 720,
             settings: "unslick",
            }
       ]
    });
    // $('.price-table').slick('slickRemove', 0);          //  Убирает лишний слайдер
});








