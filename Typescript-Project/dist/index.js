"use strict";
const todos = readTodos();
const btn = document.getElementById("btn");
const input = document.getElementById('todo');
const form = document.querySelector("form");
const list = document.getElementById('todolist');
function readTodos() {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON != null)
        return JSON.parse(todosJSON);
    return [];
}
todos.forEach(createTodo);
function handelSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
}
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
function createTodo(todo) {
    const newLI = document.createElement('LI');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    checkbox.checked = todo.completed;
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}
form.addEventListener('submit', handelSubmit);
