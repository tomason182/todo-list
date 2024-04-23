import { recoverTaskByDate } from "./local-storage";

function displayStoredTask() {
    const dates = document.querySelectorAll('.date');

    dates.forEach((date) => {
        const taskByDay = recoverTaskByDate(date);

        taskByDay.forEach((task) => {
            const tasksContainer = document.querySelector('.task-container');
            const taskElement = document.createElement('p');
            taskElement.classList.add('task');
            taskElement.textContent = task.title;
            tasksContainer.appendChild(taskElement);
        });
    });
}

export{displayStoredTask}