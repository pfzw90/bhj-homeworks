"use strict";

let bookContent = document.getElementById('book');
console.log(bookContent.classList)

Array.from(document.getElementsByClassName('book__control')).forEach(controlPanel => {
    
    let btns = Array.from(controlPanel.getElementsByTagName('a'))
    let parameter = btns[0].classList[1].replace(/_[a-z]*$/,'');
    let activeClass = parameter.split('_').pop() + '_active';
    let data = parameter.split('-').pop().split('_').join('-');

    btns.forEach(a => 
        a.onclick = function(ev) {
            ev.preventDefault();
            let active = btns.find(a => a.classList.contains(activeClass));
            if (a == active) return;

            active.classList.remove(activeClass);
            a.classList.add(activeClass);

            let choice = a.getAttribute('data-' + data) 
            let param = parameter.replace('ont-', '').replace('ize','').replace('text_','').replace('_color','')

            if (choice !== null) {
                let newList = Array.from(bookContent.classList).filter(style => style.toString().includes('book_' + param) == false)
                bookContent.className = '';
                newList.forEach(el => bookContent.classList.add(el));
                bookContent.classList.add('book_' + param + '-' + choice)
            }

            else {
                bookContent.classList.remove("book_fs-big");
                bookContent.classList.remove("book_fs-small");
            }

        });
})