
"use strict;"

const removePopup = () => document.getElementById('subscribe-modal').classList.remove('modal_active');
const showPopup = () => document.getElementById('subscribe-modal').classList.add('modal_active');

console.log(document.cookie, document.cookie.indexOf('popupclosed'));
if (!document.cookie.includes('popupclosed=true')) {
    showPopup();
    Array.from(document.getElementsByClassName('modal__close modal__close_times'))[0].addEventListener('click', function() {
        document.cookie = "popupclosed=true";
        removePopup();
    });}
