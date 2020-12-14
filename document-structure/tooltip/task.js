"use strict;"


Array.from(document.getElementsByClassName('has-tooltip')).forEach((function(link){
    console.log(link)
    let tooltip = document.createElement("div");
    tooltip.innerText = link.title;
    tooltip.className = "tooltip";
    link.insertAdjacentElement('afterend', tooltip);


    link.addEventListener('click', function(ev) {
        ev.preventDefault();
        let active = Array.from(document.getElementsByClassName('tooltip_active'));
        let tip = this.nextElementSibling;
        if (active[0] && !tip.classList.contains('tooltip_active')) active[0].classList.remove('tooltip_active');

        tip.classList.toggle('tooltip_active');

        
        if (tip.classList.contains('tooltip_active')) {
            let linkParams = this.getBoundingClientRect();
            let pos = this.dataset.position;

            if (pos == 'top' || pos == 'bottom') { tip.style.setProperty('left', Math.floor(linkParams.left) + 'px'); }
            if (pos == 'left' || pos == 'right') { tip.style.setProperty('top', Math.floor(linkParams.top) + 'px'); }
            if (pos == 'right') {tip.style.setProperty('left' , Math.floor(linkParams.left + linkParams.width + 10) + 'px'); }
            if (pos == 'left') {tip.style.setProperty('left' , Math.floor(linkParams.left - tip.offsetWidth - 10) + 'px'); }
        }

    });
}));