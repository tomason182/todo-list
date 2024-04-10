function createTask (title, description, dueDate = new Date(), priority, status) {

    const task = {
        title,
        description,
        dueDate,
        priority,
        status,
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

function storeTaskInLocalStorage (newTask){

    if (storageAvailable("localStorage")) {
        try{
            const taskList = JSON.parse(localStorage.getItem("taskList"));
            if (!taskList) {
                const taskList = [];
            }

            taskList.push(newTask);
            //store the hole list of task in one key
            localStorage.setItem("taskList", JSON.stringify(taskList));
        } catch (e) {
            alert(e);
        }

    }else{
        alert('Too bad, localStorage not available or full')
    }  

    
}

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x,x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            //all browsers except firefox
            (e.code === 22 ||
            //firefox
            e.code === 1014 ||
            //test name field too, because code might not be present
            //all browsers except firefox
            e.name === "QuotaExceededError" ||
            //firefox
            e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            //acknowledge QuotaExceedError only if there is something already store
            storage &&
            storage.length !== 0
        );
    }
}