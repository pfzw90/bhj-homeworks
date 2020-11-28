"use strict";


for (let item of Array.from(document.querySelectorAll('.menu__item .menu__link'))) {
    let sub_item = item.nextElementSibling;
    if (sub_item != null && sub_item.className.includes('menu menu_sub')) {
        item.onclick = () => { 
            if (sub_item.className.includes(' menu_active')) sub_item.className = sub_item.className.replace(' menu_active','');
            else sub_item.className += ' menu_active'; 
            return false; 
        }
    }
}