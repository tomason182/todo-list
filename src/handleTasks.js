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

            console.log(dayToInt);
            console.log(monthToInt);

            const taskByDay = recoverTaskByDate(dayToInt, monthToInt);
    
            taskByDay.forEach((task) => {
                const tasksContainer = document.querySelector('.task-container');
                const taskElement = document.createElement('p');
                taskElement.classList.add('task');
                taskElement.textContent = task.title;
                tasksContainer.appendChild(taskElement);
            });
        });
    }    
}

export{displayStoredTask}