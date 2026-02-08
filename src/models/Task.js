export default class Task {
  constructor(title, description, date, priority, checked) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.checked = checked;
  }
}
