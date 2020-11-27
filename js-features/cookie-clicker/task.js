"use strict";

let speedCount = document.createElement('p');
let speedCounter = document.createElement('span');
speedCounter.className = 'speed__counter'
speedCount.innerHTML = 'Скорость клика: ';
document.getElementsByClassName('clicker__status')[0].appendChild(speedCount);
speedCount.appendChild(speedCounter);
speedCounter.innerHTML = 0;
let start = new Date();
let prevClick = start.getTime();


document.getElementById('cookie').onclick = () => {
    let cur = new Date();
    let curClick = cur.getTime();
    
    let curSpeed = (1000/(curClick - prevClick)).toFixed(2);
    if (speedCounter.innerHTML === 0) speedCounter.innerHTML = curSpeed;   
    else speedCounter.innerHTML = ((Number(speedCounter.innerHTML) + Number(curSpeed)) / 2).toFixed(2);
    prevClick = curClick;

    
    if (document.getElementById('clicker__counter').innerHTML++ % 2 == 0) document.getElementById('cookie').width += 20;
    else document.getElementById('cookie').width -= 20;



    
 };
