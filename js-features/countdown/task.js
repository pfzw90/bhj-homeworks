'use strict';

let t = setInterval(() => {
    let time = document.getElementById('timer').textContent;
    document.getElementById('timer').textContent--;
    if (time == 0) {
        clearInterval(t);
        window.alert('Вы победили в конкурсе!');
        let a = document.createElement("a");
        a.href = 'https://yastatic.net/s3/home-static/_/x/Q/xk8YidkhGjIGOrFm_dL5781YA.svg';
        a.target = '_blank';
        document.body.append(a);
        a.click();
    }}, 1000);