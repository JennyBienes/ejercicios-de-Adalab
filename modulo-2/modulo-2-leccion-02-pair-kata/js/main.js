'use strict';

const containerOrigin = document.querySelector('.js_origin');
const containerTarget = document.querySelector('.js_target');

const text = containerOrigin.innerHTML;
const upperText = text.toUpperCase();

containerTarget.innerHTML = upperText;