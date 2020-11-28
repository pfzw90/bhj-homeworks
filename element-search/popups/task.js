"use strict";

document.getElementById('modal_main').className += ' modal_active';

for (let mod of Array.from(document.querySelectorAll('.modal__close_times'))) {
    mod.onclick = () => {
       mod.closest('.modal').className = 'modal';
    }
}

Array.from(document.querySelectorAll('.show-success'))[0].onclick = () => {document.getElementById('modal_success').className += ' modal_active'};