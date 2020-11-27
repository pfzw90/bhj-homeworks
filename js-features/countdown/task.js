'use strict';

let time = document.getElementById('timer').textContent;
document.getElementById('timer').textContent = new Date(time * 1000).toISOString().substr(11, 8);
let t = setInterval(() => {   
    time--;
    document.getElementById('timer').textContent = new Date(time * 1000).toISOString().substr(11, 8); 
    if (time == 0) {
        clearInterval(t);
        window.alert('Вы победили в конкурсе!');
        let a = document.createElement("a");
        a.href = 'https://yastatic.net/s3/home-static/_/x/Q/xk8YidkhGjIGOrFm_dL5781YA.svg';
        a.target = '_blank';
        document.body.append(a);
        a.click();
    }}, 1000);
  
    