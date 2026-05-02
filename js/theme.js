'use strict';

export { themeHandler, toggleDarkTheme };

const body = document.body;
const darkThemeButtonElement = document.querySelector('[data-js-moon]');

document.body.classList.add('light');
document.body.classList.remove('dark');

const toggleDarkTheme = function() {
    body.classList.toggle('dark');
}

const themeHandler = darkThemeButtonElement.addEventListener('click', () => {
    toggleDarkTheme();
});
