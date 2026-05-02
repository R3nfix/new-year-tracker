'use strict';

const menuContainer = document.querySelector('[data-js-menu-container]');
const burgerMenuButtonElement = document.querySelector('[data-js-menu]');
const burgerMenuButtonCloseElement = document.querySelector('[data-js-close]');

burgerMenuButtonElement.addEventListener('click', () => {
    menuContainer.classList.remove('menu-hide');
});

burgerMenuButtonCloseElement.addEventListener('click', () => {
    menuContainer.classList.add('menu-hide');
});