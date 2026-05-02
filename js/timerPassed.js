'use strict';

import { themeHandler, toggleDarkTheme } from "./theme.js";

const days = document.querySelector('[data-js-days]');
const hours = document.querySelector('[data-js-hours]');
const minutes = document.querySelector('[data-js-minutes]');
const seconds = document.querySelector('[data-js-seconds]');

const currentDate = new Date();
const currentYear = new Date('1 Jan 2026 00:00:00');

function countdownAfterNewYear() {
    const currentDate = Date.now();
    const difference = currentDate - currentYear;

    const d = Math.floor((difference / 1000 / 60 / 60 / 24));
    const h = Math.floor((difference / 1000 / 60 / 60) % 24);
    const m = Math.floor((difference / 1000 / 60 ) % 60)
    const s = Math.floor((difference / 1000) % 60);

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

countdownAfterNewYear();
setInterval(countdownAfterNewYear, 1000);