'use strict';

const popupElement = document.querySelector('[data-js-popup]');
const buttonPopupOpenElement = document.querySelector('[data-js-openpopup]');
const buttonPopupCloseElement = document.querySelector('[data-js-closepopup]');

buttonPopupOpenElement.addEventListener('click', () => {
    popupElement.classList.remove('popup__container--hide');
});

buttonPopupCloseElement.addEventListener('click', () => {
    popupElement.classList.add('popup__container--hide');
});