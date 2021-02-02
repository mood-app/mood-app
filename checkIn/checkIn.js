import checkIn from '../data.js';
import { findById } from '../utils.js';


// const sleepForm = document.querySelector('sleep-form');
// const sleepButton = document.querySelector('sleep-button');

const sleepH1 = document.getElementById('sleep-id');
const sleepForm = document.getElementById('sleep-form');
const sleepSection = document.getElementById('sleep-section');
const moodSection = document.getElementById('mood-section');
const energySection = document.getElementById('energy-section');
const mbsSection = document.getElementById('mbs-section');


sleepSection.style.display = 'flex';
moodSection.style.display = 'none';
energySection.style.display = 'none';
mbsSection.style.display = 'none';


for (let item of checkIn) {
    const sleepH1 = document.getElementById('sleep-id');
    sleepH1.textContent = item[0].question;  
}

for (let choice of checkIn) {
    const radio = document.createElement('input');
    const label = document.createElement('label');
    const span = document.createElement('a');
    const sleepForm = document.getElementById('sleep-form');
  

    span.textContent = choice.description;


    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';
    label.append(span, radio);

    mbsForm.append(choices);
}


// sleep event listners //

const sleepButton = document.createElement('button');
sleepButton.textContent = 'Submit!';
sleepForm.appendChild(sleepButton);


sleepForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // const formData = new FormData(form);

    
    // const selectionId = formData.get('choices');
    // const choice = findById(quest.choices, selectionId);
    // const user = JSON.parse(localStorage.getItem('USER'));

    // questImage.src = `../assets/${choice.render}`;

    
    // resultsSpan.textContent = choice.result;
    // // use the selectionId to set the property dynamically //
    // user.completed[questId] = true;
    
    
    
    
    // if (choice.house) {
    //     user.house = choice.house;
    // }   
    // if (choice.pet) {
    //     user.pet = choice.pet;
    // }   
   
    // if (choice.wand) {
    //     user.wand = choice.wand;
    // }
    
    // localStorage.setItem('USER', JSON.stringify(user));
    
    sleepSection.style.display = 'none';
    moodSection.style.display = 'flex';
  
  //NOT SURE WHERE THIS GOES
   // sleepForm.append(label);

    
});

// mood event listners //

const moodButton = document.createElement('button');
moodButton.textContent = 'Submit!';
moodForm.appendChild(moodButton);

// event listners //
moodForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // const formData = new FormData(form);

    
    // const selectionId = formData.get('choices');
    // const choice = findById(quest.choices, selectionId);
    // const user = JSON.parse(localStorage.getItem('USER'));

    // questImage.src = `../assets/${choice.render}`;

    
    // resultsSpan.textContent = choice.result;
    // // use the selectionId to set the property dynamically //
    // user.completed[questId] = true;
    
    
    
    
    // if (choice.house) {
    //     user.house = choice.house;
    // }   
    // if (choice.pet) {
    //     user.pet = choice.pet;
    // }   
   
    // if (choice.wand) {
    //     user.wand = choice.wand;
    // }
    
    // localStorage.setItem('USER', JSON.stringify(user));
    
    sleepSection.style.display = 'none';
    moodSection.style.display = 'none';
    energySection.style.display = 'flex';

    
    
});

// energy event listners //

const energyButton = document.createElement('button');
energyButton.textContent = 'Submit!';
energyForm.appendChild(energyButton);

// event listners //
energyForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // const formData = new FormData(form);

    
    // const selectionId = formData.get('choices');
    // const choice = findById(quest.choices, selectionId);
    // const user = JSON.parse(localStorage.getItem('USER'));

    // questImage.src = `../assets/${choice.render}`;

    
    // resultsSpan.textContent = choice.result;
    // // use the selectionId to set the property dynamically //
    // user.completed[questId] = true;
    
    
    
    
    // if (choice.house) {
    //     user.house = choice.house;
    // }   
    // if (choice.pet) {
    //     user.pet = choice.pet;
    // }   
   
    // if (choice.wand) {
    //     user.wand = choice.wand;
    // }
    
    // localStorage.setItem('USER', JSON.stringify(user));
    
    sleepSection.style.display = 'none';
    moodSection.style.display = 'none';
    energySection.style.display = 'none';
    mbsSection.style.display = 'flex';

    
    
});

// energy event listners //

const mbsButton = document.createElement('button');
mbsButton.textContent = 'Submit!';
mbsForm.appendChild(mbsButton);

// event listners //
mbsForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // const formData = new FormData(form);

    
    // const selectionId = formData.get('choices');
    // const choice = findById(quest.choices, selectionId);
    // const user = JSON.parse(localStorage.getItem('USER'));

    // questImage.src = `../assets/${choice.render}`;

    
    // resultsSpan.textContent = choice.result;
    // // use the selectionId to set the property dynamically //
    // user.completed[questId] = true;
    
    
    
    
    // if (choice.house) {
    //     user.house = choice.house;
    // }   
    // if (choice.pet) {
    //     user.pet = choice.pet;
    // }   
   
    // if (choice.wand) {
    //     user.wand = choice.wand;
    // }
    
    // localStorage.setItem('USER', JSON.stringify(user));
    
    sleepSection.style.display = 'none';
    moodSection.style.display = 'none';
    energySection.style.display = 'none';
    mbsSection.style.display = 'flex';

    // window.location = '../results.html';
 
    
});


