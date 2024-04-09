const mainContainer  = document.getElementById('main-container');

function showMyDay(){   

    mainContainer.innerHTML = '';

    const dayContainer = document.createElement('div');
    dayContainer.classList.add('day-container');
    
    const dayTitle = document.createElement('h2');
    dayTitle.textContent = 'My Day';
    
    dayContainer.appendChild(dayTitle);

    mainContainer.appendChild(dayContainer);

}

export {showMyDay}