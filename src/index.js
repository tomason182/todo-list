import './styles.css';
import { showMyDay } from './todo';

handleSidebarClicks = ()=> {
    const sidebarItems = document.querySelector('.content > .sidebar-container > .sidebar-items');

    sidebarItems.addEventListener('click', () => {
        showMyDay();
    });
}


console.log('everything is working awesome!')