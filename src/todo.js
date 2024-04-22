import Task from "./factory";
import { reCreateTask, retrieveStoredTasks } from "./factory";
import { setProjectInLocalStorage } from "./local-storage";

const mainContainer  = document.getElementById('main-container');

function createElementWithClass(tagName, className) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    return element;
}

function showMyDay(){   

    //check if main container exists before proceeding
    if(!mainContainer) {
        console.log('Main container element not found');
        return;
    }

    // clean the main container
    mainContainer.innerHTML = ''; //mainContainer is declare before...

    const dayContainer = createElementWithClass('div', 'day-container');
    
    //create three container that goes inside dayContainer with class name
    const dayTitleContainer = createElementWithClass('div', 'day-title-container');
    const dayListContainer = createElementWithClass('div', 'day-list-container');
    const dayInputContainer = createElementWithClass('div', 'day-input-container');

    //create dayTitle and todayDate and append them to dayTitleContainer
    const dayTitle = document.createElement('h2');
    dayTitle.classList.add('day-title');
    dayTitle.textContent = 'My Day';

    const todayDate = document.createElement('h2');
    todayDate.classList.add('today-date');
    todayDate.textContent = dates().getToday()[0];

    dayTitleContainer.appendChild(dayTitle);
    dayTitleContainer.appendChild(todayDate)
    
    //creates a list of tasks and append it to dayListContainer
    const dailyTaskList = createElementWithClass('ul', 'daily-task-list');
    dayListContainer.appendChild(dailyTaskList);


    //creates an input and append it to the dayInputContainer
    const addTask = createElementWithClass('input', 'task-input');
    addTask.type = "text";
    addTask.name = "daily-task";
    addTask.placeholder = "add a task";

    dayInputContainer.appendChild(addTask);

    //append dayTitleContainer, dayListContainer and dayInputContainer to dayContainer

    dayContainer.appendChild(dayTitleContainer);
    dayContainer.appendChild(dayListContainer);
    dayContainer.appendChild(dayInputContainer);

    //appends the dayContainer to mainContainer
    mainContainer.appendChild(dayContainer);

    restoreStoredTasks(new Date());
    handleUserInput();
}

function dates() {

    const getToday = () => {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1; // Month are zero-indexed

        const formattedDay = String(day).padStart(2,'0');
        const formattedMonth = String(month).padStart(2,'0');
        return [`${formattedDay}.${formattedMonth}`, day, month];
    }
    
    return {getToday};
}

function handleUserInput() {
    const element = document.querySelector('.task-input');

    element.addEventListener('keydown', (event)=> {
        if(event.key === 'Enter') {
            const taskTitle = element.value.trim();
            if (taskTitle) {
                const newTask = new Task(taskTitle);
                newTask.storeTask();
                const taskList = document.querySelector('.daily-task-list');
                const liElement = document.createElement('li');
                liElement.textContent = newTask.title;
                taskList.appendChild(liElement);
                element.value = '';
            }
        }
    });
}

function handleProjectsInputs(event) {

    event.preventDefault();
    
    const projectInput = document.getElementById('project-input');
    const projectName = projectInput.value.trim();

    // There is a bug when duplicating the project name. Needed to be fix

    if (projectName !== '') {
        const projectList = document.querySelector('.projects-list');
        const projectElementList = document.createElement('li');
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('new-project-container');
        projectContainer.textContent = projectName;
        projectElementList.appendChild(projectContainer);
        projectList.appendChild(projectElementList);
        projectInput.value = '';
        setProjectInLocalStorage(projectName);

    }

}

export {showMyDay, handleProjectsInputs}


