"use strict;"

 
const login = document.getElementById('signin');
const greeting = document.getElementById('welcome');
const form = document.getElementById('signin__form');
const show = (item) => { 
    item.classList.add(item.classList[0] + '_active');
    if (item.id == 'welcome') user_id.innerText = localStorage.id;
}
const hide = (item) => { item.classList.remove(item.classList[0] + '_active') }
       
let logOutBtn = document.createElement('button');
logOutBtn.innerText = 'Выйти';
logOutBtn.className = 'btn logout_btn';
logOutBtn.addEventListener('click', function(ev) {
    ev.preventDefault();
    hide(greeting);
    show(login);
    localStorage.removeItem('id');
});
greeting.insertAdjacentElement('beforeend', logOutBtn);

form.addEventListener('submit', function(ev){
    ev.preventDefault();
    loginForm = new FormData(form);
    let loginRequest = new XMLHttpRequest();
    loginRequest.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    loginRequest.responseType = 'json';

    loginRequest.addEventListener('readystatechange', function() {
        if (this.readyState === loginRequest.DONE && loginRequest.status === 200) {   
            if (loginRequest.response.success === false) {
                window.alert('Неверный логин/пароль');
            } else {
                localStorage.setItem('id', loginRequest.response.user_id)
                hide(login);
                show(greeting);
            }
            form.reset();
        }
    });
    loginRequest.send(loginForm);
});

if (localStorage.id) show(greeting);
else show(login); 