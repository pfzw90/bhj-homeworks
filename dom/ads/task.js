"use strict";


function changeSlide(slides, slide) {
    let a = slides.find(slide => slide.classList.contains('rotator__case_active'));
    a.classList.remove('rotator__case_active');   
    slide.classList.add('rotator__case_active');
}

Array.from(document.getElementsByClassName('rotator')).forEach((rotator) => {
    let slides = Array.from(rotator.getElementsByClassName('rotator__case'));
    slides.forEach((slide) => slide.style.color = slide.dataset.color);
    let totalTime = slides.map((slide) => parseInt(slide.dataset.speed)).reduce((a, b) => a + b, 0);
    let timePass = 0;
    slides.forEach((slide) => {
        setTimeout((slides, slide) => {
            changeSlide(slides, slide);
            setInterval(changeSlide, totalTime, slides, slide);
        }, timePass, slides, slide);
        timePass += parseInt(slide.dataset.speed);        
    });   
});

