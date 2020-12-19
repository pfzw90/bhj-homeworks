"use strict;"

const editor = document.getElementById('editor');
let eraseButn = document.createElement('button');
eraseButn.innerText = 'Очистить содержимое';
eraseButn.addEventListener('click', () => {editor.value = ''; localStorage.editorText=''});
editor.insertAdjacentElement('afterend', eraseButn)

editor.addEventListener('input', function() {
    localStorage.editorText = JSON.stringify(this.value);
});

if (localStorage.editorText) editor.value = JSON.parse(localStorage.editorText);

