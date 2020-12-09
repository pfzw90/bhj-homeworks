"use strict";

function switchChildren(elem) {
    let state = elem.checked;
    let parent  = elem.closest('li')
    // console.log(parent.querySelector('ul.interests_active'))
    if (parent.querySelector('ul.interests_active') !== 'null') {
        
        console.log('hey')
        Array.from(parent.querySelectorAll('ul.interests_active > li > label > input')).forEach((child) => {
            child.checked = state;
            switchChildren(child);
            let p1  = child.closest('li')
            console.log(p1.querySelector('ul.interests_active'))
        })

        console.log()

    }
    else return;
}

Array.from(document.querySelectorAll('div > ul > li > label > input')).forEach((box) => {
    box.addEventListener('change', function() {
        console.log('oppsa')
        switchChildren(this);
    })
})