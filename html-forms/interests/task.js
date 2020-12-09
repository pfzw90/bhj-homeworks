"use strict";

Array.from(document.querySelectorAll('div > ul > li > label > input')).forEach((box) => {
    box.addEventListener('change', function() {
        let state = this.checked;
        let parent = this.closest('li');
        Array.from(parent.querySelectorAll('input.interest__check')).forEach((child) => {
            child.checked = state;
        })
    })
})