import './styles.css';
import { showMyDay } from './todo';

const handleSidebarClicks = ()=> {
    const sidebarItems = document.querySelector('.content > .sidebar-container > .sidebar-items');

    sidebarItems.addEventListener('click', () => {
        showMyDay();
    });
}

handleSidebarClicks();


console.log('everything is working awesome!')