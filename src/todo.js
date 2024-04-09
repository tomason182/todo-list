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
    todayDate.textContent = dates();

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

    //add task to the daily list
    const taskInput = document.querySelector('.task-input');
    handleUserInput(taskInput, dailyTaskList);
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
                const newTask = document.createElement('li');
                newTask.textContent = task;
                container.appendChild(newTask);
                inputElement.value = '';                
            };
        };
    });
}

export {showMyDay}


