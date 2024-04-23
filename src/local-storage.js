function setProjectInLocalStorage(projectName) {
    if(!storageAvailable("localStorage")) {
        alert("Local Storage is not available or full");
        return false;
    }
    try {
        const taskList = [];
        localStorage.setItem(projectName, JSON.stringify(taskList));
        return true;
    }catch(error) {
        console.error("Error storing task in Local Storage: ", error);
        alert("Error storing task. Check console for more details");
        return false;
    }
}

function setTaskInLocalStorage(task) {
    if(!storageAvailable("localStorage")) {
        alert("Local Storage is not available or full");
        return false;
    }
    try {
        const projectName = task.projectName;
        console.log(projectName)

        //taskList is not an array. Needed to be fix

        let taskList = JSON.parse(localStorage.getItem(projectName));

        if (taskList === null) {
            taskList = [];
        }

        taskList.push(task);
        localStorage.setItem(projectName, JSON.stringify(taskList));
        return true;
    } catch(error) {
        console.error("Error storing task in Local Storage: ", error);
        alert("Error storing task. Check console for more details");
        return false;
    }
}

function getTaskFromLocalStorage(key) {
    try {
        const storedTask = localStorage.getItem(key);
        if (storedTask) {
            return JSON.parse(storedTask) // parse back to object
        } else {
            return null;
        }
    } catch(error) {
        console.error("Error retrieving task from Local Storage: ", error);
        alert("Error retrieving task. Check console for more details");
        return null;
    }
}

function removeTaskFromLocalStorage(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch(error) {
        console.error("Error trying to remove task from Local Storage: ", error);
        alert("Error removing task from Local Storage. Check console for more details");
        return false;
    }
}

function restoreStoredTasks(date) {
    const day = date.getDate();
    const month = date.getMonth();
    
     const storageKeys = Object.keys(localStorage);

     storageKeys.forEach((key) => {

     })



}

function retrieveStoredTasks(date, month){
    const numberOfTaskInStorage = localStorage.length;
    const tasks = [];

    if(!numberOfTaskInStorage){
        return tasks;
    }else{
        for (let i = 0; i < numberOfTaskInStorage; i++){
            const taskKey = localStorage.key(i);
            const storedTask = getTaskFromLocalStorage(taskKey);
            if (date === new Date(storedTask._dueDate).getDate() && month === new Date(storedTask._dueDate).getMonth()) {
                tasks.push(storedTask);
            }
        }    
        return tasks;
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

export {setProjectInLocalStorage, setTaskInLocalStorage, getTaskFromLocalStorage, removeTaskFromLocalStorage}