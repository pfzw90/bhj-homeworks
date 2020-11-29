"use strict";
const slides = Array.from(document.querySelectorAll('.slider__item'));
const dots = Array.from(document.querySelectorAll('.slider__dot'));
let slidesLength = slides.length;

function switchSlide(c) {
    for (let i = 0; i < slidesLength; i++) {
        if (slides[i].classList.contains('slider__item_active')) {
            slides[i].classList.remove('slider__item_active');
            dots[i].classList.remove('slider__dot_active');
            if ((i + c) == slidesLength || (i + c) < 0) {
                let n = slidesLength - Math.abs(i+c);
                slides[n].classList.add('slider__item_active');
                dots[n].classList.add('slider__dot_active')
                
            }
            else {
                slides[i+c].classList.add('slider__item_active');
                dots[i+c].classList.add('slider__dot_active');
            }
            if (c > 0) i++;
        }
    }
}

function selectSlide(dotnum) {
    if (dots[dotnum].classList.contains('slider__dot_active')) return false;
    else {
        for (let i = 0; i < slidesLength; i++) {
            if (i != dotnum) slides[i].classList.remove('slider__item_active');
            dots[i].classList.remove('slider__dot_active');
        }
        dots[dotnum].classList.add('slider__dot_active');
        slides[dotnum].classList.add('slider__item_active')
    }
}


Array.from(document.querySelectorAll('.slider__arrow_prev'))[0].onclick = () => switchSlide(-1);
Array.from(document.querySelectorAll('.slider__arrow_next'))[0].onclick = () => switchSlide(1);

for (let i = 0; i < slidesLength; i++) {
    dots[i].onclick = () => selectSlide(i);
}