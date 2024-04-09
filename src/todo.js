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
    const addTaskContainer = createElementWithClass('div', 'add-task-container');

    //dayTitle and todayDate goes inside dayTitle container
    const dayTitle = document.createElement('h2');
    dayTitle.classList.add('day-title');
    dayTitle.textContent = 'My Day';

    const todayDate = document.createElement('h2');
    todayDate.classList.add('today-date');
    todayDate.textContent = dates();

    //dayMainContainer show daily tasks
    const dailyTaskList = createElementWithClass('ul', 'daily-task-list');
    dailyTaskList.innerHTML = `<li>this is the first task. Should take info from un input(textarea)</li>`;

    //addTaskContainer allows user to add a task
    const addTask = createElementWithClass('input', 'task-input');
    addTask.type = "text";
    addTask.name = "daily-task";
    addTask.placeholder = "add a task";

    //append dayTitle and todayDate to dayTitleContainer
    dayTitleContainer.appendChild(dayTitle);
    dayTitleContainer.appendChild(todayDate);

    //append addTask into addTaskContainer
    addTaskContainer.appendChild(addTask);

    //append dailyTaskList to dayMainContainer
    dayMainContainer.appendChild(dailyTaskList);
    dayMainContainer.appendChild(addTaskContainer);

    //append elements to dayContainer
    dayContainer.appendChild(dayTitleContainer);
    dayContainer.appendChild(dayMainContainer);

    //append the dayContainer to mainContainer
    mainContainer.appendChild(dayContainer);

    handleUserInput();
    console.log(handleUserInput)
}

function dates() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // Month are zero-indexed

    const formattedDay = String(day).padStart(2,'0');
    const formattedMonth = String(month).padStart(2,'0');
    return `${formattedDay}.${formattedMonth}`;
}

function handleUserInput() {
    const input = document.querySelector('.add-task-container');

    if(!input){
        console.log('input not allow');
        return;
    }

    input.addEventListener('submit', ()=> {
        const getTask = document.querySelector('.task-input').value;
        return getTask;
    })
}

export {showMyDay}


