function createTask (title, description, dueDate, priority, status) {

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
        this.dueDate = newDueDate;
    }

    const editPriority = function(newPriority) {
        this.priority = newPriority;
    }

    const editStatus = function(newStatus) {
        this.status = newStatus;
    }

    return { ...task, editTaskTitle, editDueDate, editPriority, editStatus};
}