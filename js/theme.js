'use strict';

export { themeHandler, toggleDarkTheme };

const body = document.body;
const darkThemeButtonElement = document.querySelector('[data-js-moon]');

body.classList.remove('dark');

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
} else {
    body.classList.add('light');
}

const toggleDarkTheme = function() {
    body.classList.toggle('dark');
    body.classList.toggle('light');

    const currentTheme = document.body.classList.contains('dark');

    if (currentTheme) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

const themeHandler = darkThemeButtonElement.addEventListener('click', () => {
    toggleDarkTheme();
});
