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