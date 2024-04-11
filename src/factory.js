import { setTaskInLocalStorage, getTaskFromLocalStorage, removeTaskFromLocalStorage } from "./local-storage";

class Task {
    constructor(title, description, dueDate = new Date(), priority, status ){
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._status = status;
        this._key = generateStorageKey();
        this._taskId = generateTaskId();
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

    // Methods
    removeTask() {
        removeTaskFromLocalStorage(this._key);
    }

    storeTask() {
        setTaskInLocalStorage(this);
    }

    validateTaskId() {
        // Method for validating taskId when the user edit a task.
        // Method should compare the this._taskId of this object with the
        // taskId of the retrieved taskId from the localeStorage.
    }
}

function generateStorageKey(){

    const localStorageKeys = new Set();

    try {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            localStorageKeys.add(key);
        }
    } catch(error) {
        console.error("Error accessing Local Storage", error);
        return 'default-key';
    }

    const maxKeys = 999;

    if (localStorage.length >= maxKeys) {
        alert("Maximum amount of tasks reached");
        return null;
    }

    while (true) {
        const keyGenerator = Math.floor(Math.random()* 10000);
        if (!localStorageKeys.has(keyGenerator.toString())) {
            return keyGenerator.toString();
        }
    }
}