"use strict";


let tabs = Array.from(document.getElementsByClassName('tab'));
let tabContents = Array.from(document.getElementsByClassName('tab__content'));

tabs.forEach(tab => { tab.addEventListener('click', function(ev) {
    ev.preventDefault();
    let a = tabs.indexOf(tabs.find(t => t.classList.contains('tab_active')));
    let n = tabs.indexOf(ev.currentTarget);
    if (n !== a) {
        tabs[a].classList.remove('tab_active');
        tabContents[a].classList.remove('tab__content_active');
        tabs[n].classList.add('tab_active');
        tabContents[n].classList.add('tab__content_active');
    }})});