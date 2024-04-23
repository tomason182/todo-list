import { recoverTaskByDate } from "./local-storage";

function displayStoredTask() {
    const dates = document.querySelectorAll('.formatted-date');

    if (dates.length !== 0){
        dates.forEach((element) => {
            const date = element.innerHTML
            let day = null;
            let month = null;
            [day, month] = date.split('.');

            const dayToInt = parseInt(day);
            const monthToInt = parseInt(month);

            const taskByDay = recoverTaskByDate(dayToInt, monthToInt);
    
            taskByDay.forEach((task) => {
                const tasksContainer = document.querySelector('.task-container');
                const taskList = document.createElement('ul');
                taskList.classList.add('daily-task-list');
                const taskElement = document.createElement('li');
                taskElement.textContent = task.title;
                taskList.appendChild(taskElement);
                tasksContainer.appendChild(taskList);
            });
        });
    }    
}

export{displayStoredTask}