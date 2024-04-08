const mainContainer  = document.getElementById('main-container');

function showMyDay(){   

    mainContainer.innerHTML = '';

    const dayContainer = document.createElement('div');
    
    const dayTitle = document.createElement('h2');
    dayTitle.textContent = 'My day';
    
    dayContainer.appendChild(dayTitle);

    mainContainer.appendChild(dayContainer);
    
}

