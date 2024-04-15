import './styles.css';
import { showMyDay } from './todo';

const handleSidebarClicks = () => {
    const sidebarItems = document.querySelector('.content > .sidebar-container > .sidebar-items');
    const addProject = document.querySelector('.project-container-header > .add-project-button');

    sidebarItems.addEventListener('click', () => {
        showMyDay();
    });

    addProject.addEventListener('click', () => {
        console.log('adding project still working');
    });
}

handleSidebarClicks();

showMyDay();

console.log('everything is working awesome!');