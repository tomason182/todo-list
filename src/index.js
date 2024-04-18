import './styles.css';
import { showMyDay, handleProjectsInputs } from './todo';

const handleSidebarElements = () => {
    const sidebarItems = document.querySelector('.content > .sidebar-container > .sidebar-items');
    const addProject = document.querySelector('.project-container-header > .add-project-button');
    const projectDialog = document.getElementById('project-dialog');
    const cancelProjectDialog = document.getElementById('cancel-add-project-dialog');
    const submitProjectButton = document.getElementById('project-submit');
    const projectInput = document.getElementById('project-input');

    sidebarItems.addEventListener('click', (event) => {
        const clickedItem = event.target;

        if (clickedItem.classList[0] === 'my-day'){
            console.log('my day was pressed');
        }else if (clickedItem.classList[0] === 'week'){
            console.log('the week element was pressed');
        }else if (clickedItem.classList[0] === 'calendar'){
            console.log('the calendar was pressed');
        }
    });

    addProject.addEventListener('click', () => {
        projectDialog.showModal();

        submitProjectButton.addEventListener('click', (e) => {
            handleProjectsInputs(e);
            projectDialog.close();
            }); 
    
        projectInput.addEventListener('keydown', (e) => {        
            if(e.key === 'Enter'){
                handleProjectsInputs(e);
                projectDialog.close();
            }
        });
    });
    
    cancelProjectDialog.addEventListener('click', () => {
        projectDialog.close();
    });

    handleProjectSelection();

    //handle new projects inputs 
}

const handleProjectSelection = () => {
    const projectSelection = document.querySelector('.projects-list');

    projectSelection.addEventListener('click', (event) => {
        const clickedProject = event.target;
    
        console.log(clickedProject);
    })
}

handleSidebarElements();
showMyDay();

console.log('everything is working awesome!');