import Task from "../models/Task.js";
import { addTodo } from "../state/todoState.js";
import { renderTodos, renderPanelTodos } from "../ui/renderTodos.js";

export function taskHandler(todoDisplay, dialog, projectPanel) {
  return function (event) {
    event.preventDefault();

    const form = event.target;

    const task = new Task(
      form.title.value,
      form.desc.value,
      form.date.value,
      form.priority.value,
      form.check.value
    );

    addTodo(task);
    renderTodos(todoDisplay);
    renderPanelTodos(projectPanel)
    dialog.close();
    form.reset();
  };
}
