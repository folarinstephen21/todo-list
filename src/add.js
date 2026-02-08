export const addTask = class Task {
    
    constructor(title, decription, dueDate, priority, checked){
        this.id = crypto.randomUUID();
        this.title = title;
        this.decription = decription;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = checked
    }

    get taskInfo(){
        return `${this.title} due on ${this.dueDate}`
    }

}