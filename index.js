const todoInput = document.getElementById('new-todo');
const addButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', addTodo);

function addTodo() {
  const todoText = todoInput.value.trim();
  const deleteButton = document.createElement('button');
  const newTodoItem = document.createElement('li');
  if (todoText) {
    newTodoItem.textContent = todoText;
    newTodoItem.addEventListener('click', toggleComplete);

    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', removeTodo);

    newTodoItem.appendChild(deleteButton);
    todoList.appendChild(newTodoItem);
    todoInput.value = '';
  }
}

function toggleComplete(event) {
  event.target.classList.toggle('completed');
}

function removeTodo(event) {
  const listItem = event.target.parentElement;
  listItem.remove();
}