function createTask (title, description, dueDate = new Date(), priority, status) {

    const task = {
        title,
        description,
        dueDate,
        priority,
        status,
        key: generateStorageKey(),
    };

    const editTaskTitle = function(newTitle) {
        this.title = newTitle;
    }

    const editDueDate = function(newDueDate) {
        this.dueDate = new Date(newDueDate);
    }

    const editPriority = function(newPriority) {
        this.priority = newPriority;
    }

    const editStatus = function(newStatus) {
        this.status = newStatus;
    }

    const removeTask = function() {
        //function to remove selected task
    }

    const storeTask = function() {
        //function to store created task
    }

    return { ...task, editTaskTitle, editDueDate, editPriority, editStatus};
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