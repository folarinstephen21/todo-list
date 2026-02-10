import Task from "../models/Task.js";
import { addTodo } from "../state/todoState.js";
import { renderTodos, renderPanelTodos, renderFilterTodos } from "../ui/renderTodos.js";

export function taskHandler(defaultTodo, dialog, projectPanel) {
  return function (event) {
    event.preventDefault();

    const form = event.target;
    console.log(form.date.value)
    const task = new Task(
      form.title.value,
      form.desc.value,
      form.date.value,
      form.priority.value,
      form.check.value
    );

    addTodo(task);
    renderTodos(defaultTodo);
    renderPanelTodos(projectPanel)
    dialog.close();
    form.reset();
  };
}

export function filterHandlers(todayPanel){
  return function(event){
    event.preventDefault();
    renderFilterTodos(todayPanel);
  }
}
