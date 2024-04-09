const mainContainer  = document.getElementById('main-container');

function showMyDay(){   

    mainContainer.innerHTML = '';

    const dayContainer = document.createElement('div');
    dayContainer.classList.add('day-container');
    
    const dayHeader = document.createElement('div');
    dayHeader.classList.add('day-header');

    const dayTitle = document.createElement('h2');
    dayTitle.classList.add('day-title');
    dayTitle.textContent = 'My Day';

    const todayDate = document.createElement('h2');
    todayDate.classList.add('today-date');
    todayDate.textContent = dates();

    dayHeader.appendChild(dayTitle);
    dayHeader.appendChild(todayDate);    
    dayContainer.appendChild(dayHeader);
    mainContainer.appendChild(dayContainer);

}

function dates() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1 // Month are zero-indexed ;
    return `${day}.${month}`
}

export {showMyDay}