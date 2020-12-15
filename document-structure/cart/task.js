"use strict;"

const getCart = () => JSON.parse(localStorage.getItem('cart'));
const setCart = (cart) => localStorage.setItem('cart',JSON.stringify(cart));
const refreshCart = () => {
    let cart = getCart();
    let docCart = document.querySelector('div.cart');
    if (cart && cart.length > 0) {
    
        if (!docCart.classList.contains('cart__active')) docCart.classList.add('cart__active');
        Array.from(document.querySelectorAll('div.cart .cart__products .cart__product')).forEach(elem => elem.remove());

        cart.forEach(function(item) {
            let product = document.createElement('div');
            product.dataset.id = item.id;
            product.className = 'cart__product';

            let image = document.createElement('img');
            image.src = item.img;
            image.className = 'cart__product-image';

            let quantity = document.createElement('div');
            quantity.innerHTML = item.quantity;
            quantity.className = 'cart__product-count';

            let remove = document.createElement('a');
            remove.className = 'cart__product-remove';
            remove.innerHTML = '&otimes;';
            remove.href = "#"
            remove.addEventListener('click', function(ev) {
                ev.preventDefault();
                cart.splice(cart.indexOf(item => item.id == product.dataset.id));
                if (cart.length == 0) docCart.classList.remove('cart__active');
                setCart(cart);
                refreshCart();
            });

            product.insertAdjacentElement('afterbegin', image);
            product.insertAdjacentElement('beforeend', quantity);
            product.insertAdjacentElement('afterbegin', remove);           
            document.querySelector('div.cart__products').insertAdjacentElement('beforeend', product);

        });
    }
};


Array.from(document.getElementsByClassName('product')).forEach(function(product){
    let id = product.dataset.id;
    let img = product.querySelector('img.product__image').src;
    let quantityContainer = product.querySelector('.product__quantity-value');
    let quantity = parseInt(quantityContainer.innerHTML);

    product.querySelector('.product__quantity-control_dec').addEventListener('click', function(ev) {
        ev.preventDefault();
        if (quantity > 1) quantityContainer.innerHTML = (quantity -= 1);
    });

    product.querySelector('.product__quantity-control_inc').addEventListener('click', function(ev) {
        ev.preventDefault();
        quantityContainer.innerHTML = (quantity += 1);
    });

    product.querySelector('.product__add').addEventListener('click', function(ev) {
        ev.preventDefault();
        let cart = getCart();
        if (!cart) cart = new Array;

        else {
            let f = false;
            cart.forEach(function(cartItem) {
                if (cartItem.id == id) {
                    cartItem.quantity += quantity;
                    f = true;
                    setCart(cart);
                    refreshCart();
                }
            });
            if (f) return;
        }
      
        cart.push({'id' : id, 'img' : img, 'quantity' : quantity});
        setCart(cart);
        refreshCart();
        
    });

})

window.onload = function() {
    localStorage.clear();
    refreshCart();
}
