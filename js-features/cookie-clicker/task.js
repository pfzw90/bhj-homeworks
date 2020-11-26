"use strict";

document.getElementById('cookie').onclick = () => {
    if (document.getElementById('clicker__counter').innerHTML++ % 2 == 0) document.getElementById('cookie').width += 20;
    else document.getElementById('cookie').width -= 20;
};
