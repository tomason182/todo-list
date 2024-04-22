import { setTaskInLocalStorage, getTaskFromLocalStorage, removeTaskFromLocalStorage } from "./local-storage";

export default class Task {
    constructor(title, description, priority, status, projectName = "default", dueDate = new Date()){
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._status = status;
        this._projectName = projectName;
    }

    //getter and setter for title
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }

    //getter and setter for description
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }

    // Getter and setter for dueDate
    get dueDate() {
        return this._dueDate;
    }
    set dueDate(value) {
        this._dueDate = value;
    }

    // Getter and setter for priority
    get priority() {
        return this._priority;
    }
    set priority(value) {
        this._priority = value;
    }

    // Getter and setter for status
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }

    // Getter and setter for project name
    get projectName() {
        return this._projectName;
    }
    set projectName(value) {
        this._projectName = value;
    }

    storeTask() {
        setTaskInLocalStorage(this);
    }

    removeTask() {
        removeTaskFromLocalStorage(this._key);
    }
}

function reCreateTask(key) {
    const restoredObj = getTaskFromLocalStorage(key);
    return new Task(restoredObj._title, restoredObj._description, restoredObj._dueDate, restoredObj._priority, restoredObj._status, restoredObj._key);
}

export {reCreateTask};