"use strict"
const navMain = document.querySelector('.header-page__menu');
const navToggle = document.querySelector('.hamburger');
const openMenu = document.querySelector('.header-page__menu');

navMain.classList.remove('header-page__menu--no-js');

navToggle.addEventListener('click', function () {
    if (navToggle.classList.contains('is-closed')) {
        navToggle.classList.remove('is-closed');
        navToggle.classList.add('is-active');
        openMenu.classList.add('header-page__menu--open-block');
    } else {
        navToggle.classList.remove('is-active');
        navToggle.classList.add('is-closed');
        openMenu.classList.remove('header-page__menu--open-block');
    }
});
