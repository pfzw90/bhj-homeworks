"use strict";

document.querySelector('div.dropdown__value').addEventListener('click', (ev) => {
    ev.preventDefault();
    document.querySelector('ul.dropdown__list').classList.add('dropdown__list_active');
});

Array.from(document.querySelectorAll('a.dropdown__link')).forEach(option => option.addEventListener('click', function(ev) {
    ev.preventDefault();
    document.querySelector('div.dropdown__value').innerHTML = this.innerHTML;
    document.querySelector('ul.dropdown__list').classList.remove('dropdown__list_active')
}));