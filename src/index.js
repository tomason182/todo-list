import './styles.css';
import { showMyDay, handleProjectsInputs } from './todo';

const handleSidebarClicks = () => {
    const sidebarItems = document.querySelector('.content > .sidebar-container > .sidebar-items');
    const addProject = document.querySelector('.project-container-header > .add-project-button');
    const projectDialog = document.getElementById('project-dialog');    

    sidebarItems.addEventListener('click', () => {
        showMyDay();
    });

    addProject.addEventListener('click', () => {
        projectDialog.showModal();
    });

    const cancelProjectDialog = document.getElementById('cancel-add-project-dialog');
    cancelProjectDialog.addEventListener('click', () => {
        projectDialog.close();
    });

    //handle new projects inputs

    const submitProjectButton = document.getElementById('project-submit');
    const projectInput = document.getElementById('project-input');
    

    submitProjectButton.addEventListener('click', (event) => {        
        event.preventDefault();

        const projectName = projectInput.value.trim();

        if(projectName){
            handleProjectsInputs();
            projectDialog.close();
        }
    })

    projectInput.addEventListener('keydown', (event) => {        
        if(event.key === 'Enter'){
            event.preventDefault();

            const projectName = projectInput.value.trim();

            if(projectName){
                handleProjectsInputs();
                projectDialog.close();
            }
            
        }
    })

}

handleSidebarClicks();
showMyDay();

console.log('everything is working awesome!');