"use strict;"

let sendFileForm = document.getElementById('form');
const progress = document.getElementById('progress');

sendFileForm.addEventListener('submit', function(ev) {
    ev.preventDefault();
    let fileForm = new FormData(sendFileForm);
    let formRequest = new XMLHttpRequest();
    formRequest.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    
    formRequest.upload.onprogress = function(ev) {
        progress.value = (ev.loaded/ev.total).toFixed(1);
    }

    formRequest.upload.onload = () => {
        progress.value = 0;
        let finished = document.createElement('div');
        finished.innerText = `Загрузка документа ${sendFileForm.file.value.split(/(\\|\/)/g).pop()} завершена.`
        sendFileForm.insertAdjacentElement('beforeend', finished);
        sendFileForm.reset();
    }
    formRequest.send(fileForm);
})