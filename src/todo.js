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
    mainContainer.innerHTML = '';

    const dayContainer = createElementWithClass('div', 'day-container');
    
    //create three container that goes inside dayContainer with class name
    const dayTitleContainer = createElementWithClass('div', 'day-title-container');
    const dayMainContainer = createElementWithClass('div', 'day-main-container');
    const AddTaskContainer = createElementWithClass('div', 'day-add-task-container');

    //dayTitle and todayDate goes inside dayTitle container
    const dayTitle = document.createElement('h2');
    dayTitle.classList.add('day-title');
    dayTitle.textContent = 'My Day';

    const todayDate = document.createElement('h2');
    todayDate.classList.add('today-date');
    todayDate.textContent = dates();

    //dayMainContainer show daily tasks
    const dailyTaskList = createElementWithClass('ul', 'daily-task-list');
    dailyTaskList.innerHTML = `<li>this is the first task. Should take info from un input</li>`;

    //addTaskContainer allows user to add a task
    const addTask = createElementWithClass('input', 'add-task-input');
    addTask.type = "text";
    addTask.name = "daily-task";

    //append dayTitle and todayDate to dayTitleContainer
    dayTitleContainer.appendChild(dayTitle);
    dayTitleContainer.appendChild(todayDate);

    //append dailyTaskList to dayMainContainer
    dayMainContainer.appendChild(dailyTaskList);
    dayMainContainer.appendChild(addTask);

    //append elements to dayContainer
    dayContainer.appendChild(dayTitleContainer);
    dayContainer.appendChild(dayMainContainer);

    //append the dayContainer to mainContainer
    mainContainer.appendChild(dayContainer);
}

function dates() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // Month are zero-indexed

    const formattedDay = String(day).padStart(2,'0');
    const formattedMonth = String(month).padStart(2,'0');
    return `${formattedDay}.${formattedMonth}`;
}

export {showMyDay}