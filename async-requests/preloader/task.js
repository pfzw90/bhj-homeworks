"use strict;"
const refreshCurrencyTable = function(cur) {
    for (let element in cur) {
            let code = document.createElement('div');
            code.innerText = cur[element]["CharCode"];
            code.className = 'item__code';

            let value = document.createElement('div');
            value.innerText = cur[element]['Value'];
            value.className = 'item__value';

            let currency = document.createElement('div');
            currency.innerText = 'руб.';
            currency.className = 'item__currency';

            let item = document.createElement('div');
            item.className = 'item';

            item.insertAdjacentElement('beforeend', code);
            item.insertAdjacentElement('beforeend', value);
            item.insertAdjacentElement('beforeend', currency);

            let rates = document.getElementById('items')
            rates.insertAdjacentElement('beforeend', item);
    }
}


window.onload = function() {
    let list = localStorage.getItem('currencyList');
    if (list) refreshCurrencyTable(JSON.parse(list));

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
    xhr.responseType = 'json'
    xhr.addEventListener('readystatechange', function(ev) {
    if (this.readyState === xhr.DONE && xhr.status === 200) {
        document.getElementById('loader').classList.remove('loader_active')
        Array.from(document.querySelectorAll('#items > .item')).forEach(elem => elem.remove()); 
        let currencyList = xhr.response['response']['Valute'];
        refreshCurrencyTable(currencyList);
        localStorage.setItem('currencyList', JSON.stringify(currencyList));   
    }});
    xhr.send();
}   

