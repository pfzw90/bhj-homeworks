"use strict";
const slides = Array.from(document.querySelectorAll('.slider__item'));
const dots = Array.from(document.querySelectorAll('.slider__dot'));
let slidesLength = slides.length;

const findActive = () => slides.findIndex(slide => slide.classList.contains('slider__item_active'));

const findNext = (p, n) => {
    if (p + n == slidesLength || p + n < 0) return slidesLength - Math.abs(p + n);
    else return p + n;
}

const selectSlide = (a, n) => { 
    slides[a].classList.remove('slider__item_active');
    dots[a].classList.remove('slider__dot_active');
    slides[n].classList.add('slider__item_active');
    dots[n].classList.add('slider__dot_active');
}

dots[findActive()].classList.add('slider__dot_active');
Array.from(document.getElementsByClassName('slider__arrow_prev'))[0].onclick = () => selectSlide(findActive(),findNext(findActive(),-1));
Array.from(document.getElementsByClassName('slider__arrow_next'))[0].onclick = () => selectSlide(findActive(),findNext(findActive(),1));
dots.forEach((dot, i) => {dot.onclick = () => selectSlide(findActive(), i);});
