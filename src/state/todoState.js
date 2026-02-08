const STORAGE_KEY = "todos";

let todos = loadTodos();

function loadTodos() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export function getTodos() {
  return [...todos];
}

export function addTodo(todo) {
  todos.push(todo);
  saveTodos();
}

export function removeTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  saveTodos();
}
