// const SESSIONS = 'SESSION';
import { setUser, displayUserData } from '../utils.js';


const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    setUser(formData);

    window.location = '../checkIn';
    
});

displayUserData();