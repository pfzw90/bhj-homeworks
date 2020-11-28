"use strict";

for (let item of Array.from(document.querySelectorAll('.menu__item .menu__link'))) {

    let sub_item = item.nextElementSibling;
    if (sub_item != null && sub_item.classList.contains('menu', 'menu_sub')) {
        item.onclick = () => { 
            if (sub_item.classList.contains('menu_active')) sub_item.className = sub_item.classList.remove('menu_active');
            else sub_item.classList.add('menu_active'); 

            let this_menu = item.closest('.menu');
            
            for (let item_close_ul of Array.from(this_menu.children)) {
                for (let item_close_li of Array.from(item_close_ul.children)) {
                    if (item != item_close_li && item_close_li.classList.contains('menu__link') && item_close_li.nextElementSibling != null) {
                        item_close_li.nextElementSibling.classList.remove('menu_active');
                    };
                };
            };
            return false; 
        };
    };  
};