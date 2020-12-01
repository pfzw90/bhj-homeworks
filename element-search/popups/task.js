"use strict";

document.getElementById('modal_main').classList.add('modal_active');

for (let mod of Array.from(document.querySelectorAll('.modal__close_times'))) {
    mod.onclick = () => {
       mod.closest('.modal').classList.remove('modal_active');
    }
}

Array.from(document.querySelectorAll('.show-success'))[0].onclick = () => {
    document.getElementById('modal_main').classList.remove('modal_active');
    document.getElementById('modal_success').classList.add('modal_active')};