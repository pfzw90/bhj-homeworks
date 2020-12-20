"use strict;"

let sendFileForm = document.getElementById('form');
const progress = document.getElementById('progress');

const showMessage = (success) => {
    let finished = document.createElement('div');
    let msg = 'успешно завершена';
    if (!success) msg = 'не удалась';
    finished.innerText = `Загрузка документа ${sendFileForm.file.value.split(/(\\|\/)/g).pop()} ${msg}.`
    sendFileForm.insertAdjacentElement('beforeend', finished);
}

sendFileForm.addEventListener('submit', function(ev) {
    ev.preventDefault();
    let fileForm = new FormData(sendFileForm);
    let formRequest = new XMLHttpRequest();
    formRequest.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    
    formRequest.upload.onprogress = function(ev) {
        progress.value = (ev.loaded/ev.total).toFixed(1);
    }

    formRequest.upload.onload = () => showMessage(true);
    formRequest.upload.onerror = () => showMessage(false);

    formRequest.upload.onloadend = () => {
    progress.value = 0;
    sendFileForm.reset();
    }

    formRequest.send(fileForm);
})