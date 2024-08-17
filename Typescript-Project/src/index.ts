interface Todo {
    text: string,
    completed: boolean
}

const todos: Todo[] = readTodos();


const btn   = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById('todo')! as HTMLInputElement;
const form  = document.querySelector("form")! as HTMLFormElement;
const list  = document.getElementById('todolist') as HTMLUListElement;


function readTodos(): Todo[]{
    const todosJSON = localStorage.getItem('todos');

    if(todosJSON != null)
        return JSON.parse(todosJSON)

    return [];
}

todos.forEach(createTodo)
function handelSubmit(e: SubmitEvent){
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false
    }
    createTodo(newTodo);
    todos.push(newTodo);

    saveTodos();
    input.value = "";

}
function saveTodos(){
    localStorage.setItem('todos', JSON.stringify(todos))
}
function createTodo(todo: Todo){
    const newLI = document.createElement('LI');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function(){
        todo.completed = checkbox.checked;
        saveTodos()
    })
    checkbox.checked = todo.completed;

    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}

form.addEventListener('submit', handelSubmit)