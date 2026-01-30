export const addTask = class Task {
    
    constructor(title, decription, dueDate, priority){
        this.id = crypto.randomUUID();
        this.title = title;
        this.decription = decription;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    get taskInfo(){
        return `${this.title} due on ${this.dueDate}`
    }

}