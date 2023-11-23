document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('task');
    const errorDiv = document.getElementById('error');
    const taskList = document.getElementById('task-list');
    let tasks = [];

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const newTask = taskInput.value.trim();
        if (newTask === '') {
            errorDiv.textContent = 'Please add a task.';
        } else {
            tasks.push(newTask);
            renderTasks();
            taskInput.value = '';
            errorDiv.textContent = ' ';
        }
        
    });

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach(function(task, index) {
            const li = document.createElement('li');
            li.textContent = task;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '❌';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', function() {
                tasks.splice(index, 1);
                renderTasks();
            });
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    }
});

const timerDisplay = document.querySelector('.timer');
const startButton = document.querySelector('.startTimer');
const inputMinutes = document.querySelector('.input-minutes');

let countdown;

function timer(seconds) {
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
}

startButton.addEventListener('click', () => {
    const minutes = parseInt(inputMinutes.value);
    if (!isNaN(minutes)) {
        timer(minutes * 60);
    }
});

alert("Задача успешно добавлена!");
