import { setTaskInLocalStorage, getTaskFromLocalStorage, removeTaskFromLocalStorage } from "./local-storage";

export default class Task {
    constructor(title, description, dueDate = new Date(), priority, status, key = generateStorageKey()){
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._status = status;
        this._key = key;
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

    storeTask() {
        setTaskInLocalStorage(this);
    }

    removeTask() {
        removeTaskFromLocalStorage(this._key);
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

function reCreateTask(key) {
    const restoredObj = getTaskFromLocalStorage(key);
    return new Task(restoredObj._title, restoredObj._description, restoredObj._dueDate, restoredObj._priority, restoredObj._status, restoredObj._key);
}

function retrieveStoredTasks(date, month){
    numberOfTaskInStorage = localStorage.length;
    const tasks = [];
    

    if(!numberOfTaskInStorage){
        return tasks;
    }

    for (let i = 0; i < numberOfTaskInStorage; i++){
        const taskKey = localStorage.key(i);
        const storedTask = getTaskFromLocalStorage(taskKey);
        if (date === storedTask._dueDate.getDate() && month === storedTask._dueDate.getMonth()) {
            tasks.push(storedTask);
        }
    }
}