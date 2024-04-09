const mainContainer  = document.getElementById('main-container');

function createElementWithClass(tagName, className) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    return element;
}

function showMyDay(){   

    mainContainer.innerHTML = '';

    const dayContainer = createElementWithClass('div', 'day-container');
    const dayTitleContainer = createElementWithClass('div', 'day-title-container')
    const dayTitle = document.createElement('h2');
    dayTitle.classList.add('day-title');
    dayTitle.textContent = 'My Day';

    const todayDate = document.createElement('h2');
    todayDate.classList.add('today-date');
    todayDate.textContent = dates();

    dayTitleContainer.appendChild(dayTitle);
    dayTitleContainer.appendChild(todayDate);    
    dayContainer.appendChild(dayTitleContainer);

    
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