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
    const dayMainContainer = createElementWithClass('div', 'day-main-container');
    const addTaskContainer = createElementWithClass('div', 'add-task-container');

    //dayTitle and todayDate goes inside dayTitle container
    const dayTitle = document.createElement('h2');
    dayTitle.classList.add('day-title');
    dayTitle.textContent = 'My Day';

    const todaysDate = document.createElement('h2');
    todaysDate.classList.add('today-date');
    todaysDate.textContent = dates();    

    //addTaskContainer allows user to add a task
    const addTask = createElementWithClass('input', 'task-input');
    addTask.type = "text";
    addTask.name = "daily-task";
    addTask.placeholder = "add a task";

    //append dayTitle and todayDate to dayTitleContainer
    dayTitleContainer.appendChild(dayTitle);
    dayTitleContainer.appendChild(todaysDate);

    //append addTask into addTaskContainer
    addTaskContainer.appendChild(addTask);

    //append dailyTaskList to dayMainContainer
    dayMainContainer.appendChild(addTaskContainer);

    //append elements to dayContainer
    dayContainer.appendChild(dayTitleContainer);
    dayContainer.appendChild(dayMainContainer);

    //append the dayContainer to mainContainer
    mainContainer.appendChild(dayContainer);

    const taskInput = document.querySelector('.task-input');
    handleUserInput(taskInput, dayMainContainer);

}

function dates() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // Month are zero-indexed

    const formattedDay = String(day).padStart(2,'0');
    const formattedMonth = String(month).padStart(2,'0');
    return `${formattedDay}.${formattedMonth}`;
}

function handleUserInput(inputElement, container) {
    inputElement.addEventListener('keydown', (event)=> {
        if(event.key === 'Enter') {
            const task = inputElement.value.trim();
            if (task) {
                const dailyTaskList = createElementWithClass('ul', 'daily-task-list');
                dailyTaskList.innerHTML = `<li>${task}</li>`;
                container.appendChild(dailyTaskList);
                inputElement.value = '';                
            };
        };
    });
}

export {showMyDay}


