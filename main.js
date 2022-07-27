

// Selector

let todoInput = document.querySelector('.todo-input');
// let todoButton = document.getElementById('todo-button').onclick = function(){
//     console.log('this is onclick function')
// }
let todoButton = document.querySelector('.todo-button');
// let button = document.getElementsByTagName('button')
let todoList = document.getElementById('.todo-list');

// EventListener

todoButton.addEventListener('click', addTodo);


// Function

function addTodo(event){
    event.preventDefault();
    console.log('This is working')
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    let newTodo = document.createElement('li');
    newTodo.innerHTML = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
}