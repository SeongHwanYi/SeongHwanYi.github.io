const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = newTodo.text;
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    
    todoList.appendChild(li);
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function handleTodoSubmit(event){
    event.preventDefault();
    const value = todoInput.value;
    const valueObj = {
        text: value,
        id: Date.now()
    };

    toDos.push(valueObj);

    todoInput.value = "";
    paintTodo(valueObj);

    saveToDos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}