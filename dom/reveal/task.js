"use strict";

document.addEventListener('scroll', function() {
    Array.from(this.getElementsByClassName('reveal')).forEach(function(div) {
        if (div.getBoundingClientRect().top < window.innerHeight) div.classList.add('reveal_active')
    })
})