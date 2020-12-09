"use strict";

const rudeRobotMsgs = [
    'Привет, одноклеточное.',
    'Человек, ты просто жалок.',
    'Просто идите лесом.',
    'Скажи 300.',
    'Этот чат не для того, чтобы сюда писали всякие блаженные, Вы в курсе?'
];

const printMessage = (clss, field) => {
    let msgText = '';
    let now = new Date();
    if (clss) { msgText = field.value; field.value = ''; }
    else msgText = rudeRobotMsgs[Math.floor(Math.random() * rudeRobotMsgs.length)];
    document.getElementById('chat-widget__messages').innerHTML += `
        <div class="message ${clss}">
            <div class="message__time">${now.getHours()}:${now.getMinutes()}</div>
            <div class="message__text">${msgText}</div>
        </div>`
    Array.from(document.querySelectorAll('.chat-widget__messages > .message')).pop().scrollIntoView();
}

const setTimer = function(elem) {
    if (elem.dataset.timer) clearInterval(elem.dataset.timer);
    elem.dataset.timer = setInterval(printMessage, 30000, '', elem)
}

document.querySelector('div.chat-widget').addEventListener('click', function() {this.classList.add('chat-widget_active')});

document.getElementById('chat-widget__input').addEventListener('focus', function() {setTimer(this)});
document.getElementById('chat-widget__input').addEventListener('blur', function() {clearInterval(this.dataset.timer)})

document.getElementById('chat-widget__input').addEventListener('keypress', function(ev) {
    if (this.value && ev.code == 'Enter') {printMessage('message_client', this); printMessage('', this); setTimer(this);}
});

