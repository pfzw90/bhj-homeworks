"use strict;"

const addTask = function(content, memo) {
    if (memo) {
        let tasksList = JSON.parse(localStorage.getItem('tasks'));
        
        if (!tasksList) tasksList = new Array;
        
        if (tasksList.includes(content)) {
            window.alert('Такая задача уже существует!');
            return;
        }

        tasksList.push(content);
        localStorage.setItem('tasks', JSON.stringify(tasksList));
    }

    let newTask = document.createElement('div');
    newTask.className = 'task';
    
    let newTaskTitle = document.createElement('div');
    newTaskTitle.innerText = content;
    newTaskTitle.className = 'task__title';

    let newDeleteBtn = document.createElement('a');
    newDeleteBtn.className = 'task__remove';
    newDeleteBtn.href = '#';
    newDeleteBtn.innerHTML = '&times;'

    newTask.insertAdjacentElement('afterbegin', newTaskTitle);
    newTask.insertAdjacentElement('beforeend', newDeleteBtn);
    
    newDeleteBtn.addEventListener('click', function(ev) {
        ev.preventDefault();
        this.closest('div').remove();
        let tasksList = JSON.parse(localStorage.getItem('tasks'));
        tasksList.splice(tasksList.indexOf(this.previousElementSibling.innerHTML));
        localStorage.setItem('tasks', JSON.stringify(tasksList));
    });

    document.getElementById('tasks__list').insertAdjacentElement('beforeend', newTask);
}

window.onload = function() {
    let tasksList = JSON.parse(localStorage.getItem('tasks'));
    if (tasksList) tasksList.forEach(task => addTask(task, false));
}

document.getElementById('tasks__form').addEventListener('submit', function(ev) {
    ev.preventDefault();
    let val = document.getElementById('task__input').value;
    if (val) addTask(val, true);
    document.getElementById('task__input').value = '';
});


