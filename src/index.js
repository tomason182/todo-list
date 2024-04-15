import './styles.css';
import { showMyDay } from './todo';

const handleSidebarClicks = () => {
    const sidebarItems = document.querySelector('.content > .sidebar-container > .sidebar-items');

    sidebarItems.addEventListener('click', () => {
        showMyDay();
    });
    
    handleProjects();
}

const handleProjects = () => {
    const addProject = document.querySelector('.project-container-header > .add-project-button');

    addProject.addEventListener('click', () => {
        console.log('the add project function has been display')
    })
}

handleSidebarClicks();


showMyDay();

console.log('everything is working awesome!');