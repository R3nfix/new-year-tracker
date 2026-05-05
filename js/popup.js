'use strict';

const popupContainer = document.querySelector('[data-js-popup]');
const buttonPopupOpenElement = document.querySelector('[data-js-openpopup]');
const buttonPopupCloseElement = document.querySelector('[data-js-closepopup]');

buttonPopupOpenElement.addEventListener('click', () => {
    popupContainer.style.display = 'block';
    popupContainer.classList.remove('popup__container--hide');
});

buttonPopupCloseElement.addEventListener('click', () => {
    popupContainer.classList.add('popup__container--hide');

    setTimeout(() => {
        popupContainer.style.display = 'none';
    }, 500);
});