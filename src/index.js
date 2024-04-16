import './styles.css';
import { showMyDay } from './todo';

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
    }

handleSidebarClicks();

showMyDay();

console.log('everything is working awesome!');