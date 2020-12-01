"use strict";


const checksub = (link) => (link.nextElementSibling != null && link.nextElementSibling.classList.contains('menu', 'menu_sub'));

for (let item of Array.from(document.querySelectorAll('ul.menu_main > li.menu__item > .menu__link')).filter(checksub)) {
    item.onclick = () => { 
            let sub_item = item.nextElementSibling;
            if (sub_item.classList.contains('menu_active')) sub_item.classList.remove('menu_active');
            else sub_item.classList.add('menu_active'); 

            Array.from(item.closest('.menu').children).forEach(elem => {
                Array.from(elem.getElementsByTagName('a')).filter(checksub).forEach(subelem => {
                    if (subelem != item) subelem.nextElementSibling.classList.remove('menu_active');
                });
            });
            
            return false; 
    };         
};  