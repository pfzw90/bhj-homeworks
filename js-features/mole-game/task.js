"use strict";

for (let i = 1; i < 10; i++) {
    let hole = document.getElementById('hole' + String(i));
    hole.onclick = () => {
        let dead = document.getElementById('dead');
        let lost = document.getElementById('lost');
        let clearScores = () => {dead.innerText = 0; lost.innerText = 0};

        if (hole.classList.contains('hole_has-mole')) dead.innerText++;
        else lost.innerText++;

        if (dead.innerText == 10) { window.alert('Вы победили!'); clearScores(); }
        if (lost.innerText == 5) { window.alert('Вы проиграли!'); clearScores(); }
    };
}