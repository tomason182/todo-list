import Task from "./factory";
import { displayStoredTask } from "./handleTasks";
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
        return false;
    }

    // clean the main container
    mainContainer.innerHTML = ''; //mainContainer is declare before...

    const dayContainer = createElementWithClass('div', 'day-container');
    
    //create three container that goes inside dayContainer with class name
    const dayTitleContainer = createElementWithClass('div', 'day-title-container');
    const dayListContainer = createElementWithClass('div', 'task-container');
    const dayInputContainer = createElementWithClass('div', 'day-input-container');

    //create dayTitle and todayDate and append them to dayTitleContainer
    const dayTitle = document.createElement('h2');
    dayTitle.classList.add('day-title');
    dayTitle.textContent = 'My Day';

    const todayDate = document.createElement('h2');
    todayDate.classList.add('formatted-date');
    todayDate.textContent = dates().getToday()[0];

    dayTitleContainer.appendChild(dayTitle);
    dayTitleContainer.appendChild(todayDate);
    
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

    /* restoreStoredTasks(new Date()); */
    handleUserInput();
    displayStoredTask();
}

function showThisWeek() {
    
    if(!mainContainer) {
        console.log('Main Container element not found');
        return false;
    }

    mainContainer.innerHTML = "";

    const weekContainer = createElementWithClass("div", "week-container");
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    for (let i = 0; i < daysOfWeek.length; i ++) {
        const dayContainer = createElementWithClass("div", "day-container");
        const weekTitleContainer = createElementWithClass("div", "week-title-container");
        const dailyWeekTaskContainer = createElementWithClass("div", "daily-week-task-container");
        const dailyWeekTaskInputContainer = createElementWithClass("div", "daily-week-task-input-container");

        const dayName = createElementWithClass("h3", "day-name");
        const date = createElementWithClass("h3", "week-date");
        dayContainer.classList.add(daysOfWeek[i]);

        dayName.textContent = daysOfWeek[i];
        date.textContent = `${dates().getWeek()[i].formattedDay}-${dates().getWeek()[i].formattedMonth}`;

        if (dates().getWeek()[i].today === true) {
            dayContainer.classList.add ("today");
        }

        weekTitleContainer.appendChild(dayName);
        weekTitleContainer.appendChild(date);

        const dailyWeekList = createElementWithClass("ul", "daily-week-task");
        const dailyWeekListItem = document.createElement("li");
        const dailyInputTask = document.createElement("input");
        dailyInputTask.type = "text";
        dailyInputTask.placeholder = "Enter new task";

        dailyWeekListItem.appendChild(dailyInputTask);
        dailyWeekList.appendChild(dailyWeekListItem);
        dailyWeekTaskContainer.appendChild(dailyWeekList);

        dayContainer.appendChild(weekTitleContainer);
        dayContainer.appendChild(dailyWeekTaskContainer);
        dayContainer.appendChild(dailyWeekTaskInputContainer);

        weekContainer.appendChild(dayContainer);
    }

    mainContainer.appendChild(weekContainer);

    handleUserWeeklyInputs();
}

function dates() {
    const today = new Date();

    const getToday = function getTodaysDate () {        
        const day = today.getDate();
        const month = today.getMonth() + 1; // Month are zero-indexed

        const formattedDay = String(day).padStart(2,'0');
        const formattedMonth = String(month).padStart(2,'0');
        return [`${formattedDay}.${formattedMonth}`, today];
    }

    const getWeek = function getThisWeekDays () {

        let week = [
            {
                "dayName": "Monday",
                "date": null,
                "formattedDay": null,
                "formattedMonth": null,
                "index": 1,
                "today": false
            },
            {
                "dayName": "Tuesday",
                "date": null,
                "formattedDay": null,
                "formattedMonth": null,
                "index": 2,
                "today": false
            },
            {
                "dayName": "Wednesday",
                "date": null,
                "formattedDay": null,
                "formattedMonth": null,
                "index": 3,
                "today": false,
            },
            {
                "dayName": "Thursday",
                "date": null,
                "formattedDay": null,
                "formattedMonth": null,
                "index": 4,
                "today": false,
            },
            {
                "dayName": "Friday",
                "date": null,
                "formattedDay": null,
                "formattedMonth": null,
                "index": 5,
                "today": false
            },
            {
                "dayName": "Saturday",
                "date": null,
                "formattedDay": null,
                "formattedMonth": null,
                "index": 6,
                "today": false
            },
            {
                "dayName": "Sunday",
                "date": null,
                "formattedDay": null,
                "formattedMonth": null,
                "index": 7,
                "today": false
            }    
        ];

        week.forEach((obj) => {
            if(today.getDay() === 0){
                if(obj.index === today.getDay() + 7) {
                    obj.date = today;
                    obj.today = true;
                    obj.formattedDay = String(obj.date.getDate()).padStart(2, "0"); // Maybe is better to have a function that format the dates
                    obj.formattedMonth = String(obj.date.getMonth()).padStart(2, "0");
                } else {
                    obj.date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - (7 - obj.index));
                    obj.today = false;
                }
            } else {
                if(obj.index === today.getDay()) {
                    obj.date = today;
                    obj.today = true;
                    obj.formattedDay = String(obj.date.getDate()).padStart(2, "0"); // Maybe is better to have a function that format the dates
                    obj.formattedMonth = String(obj.date.getMonth()).padStart(2, "0");
                }else if(obj.index < today.getDay()) {
                    obj.date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - (today.getDay() - obj.index));
                    obj.today = false;
                    obj.formattedDay = String(obj.date.getDate()).padStart(2, "0"); // Maybe is better to have a function that format the dates
                    obj.formattedMonth = String(obj.date.getMonth()).padStart(2, "0");
                }else{
                    obj.date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (obj.index - today.getDay()));
                    obj.today = false;
                    obj.formattedDay = String(obj.date.getDate()).padStart(2, "0"); // Maybe is better to have a function that format the dates
                    obj.formattedMonth = String(obj.date.getMonth()).padStart(2, "0");
                }
            }
        });

        return week;
    }
    
    return {getToday, getWeek};
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

function handleUserWeeklyInputs() {
    const weeklyContainers = document.querySelectorAll(".day-container");

    weeklyContainers.forEach((container) => {
        container.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const containerData = 6;
                console.log(container.querySelector(".week-title-container"));
                console.log(container.querySelector("input[type='text']").value);
            }
        });
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

export {showMyDay, showThisWeek ,handleProjectsInputs}


