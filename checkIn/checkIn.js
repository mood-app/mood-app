import { sleep, mood, energy, mbs } from '../data.js';
import { findById } from '../utils.js';


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

// SLEEP 
sleepH1.textContent = sleep.question;

let item1;
console.log(sleep.choices);
for (item1 in sleep.choices) {
    console.log(sleep.choices.item);
    const radio = document.createElement('input');
    const choices = document.createElement('label');
    radio.type = 'radio';
    radio.value = sleep.choices[item1].id;
    radio.name = 'choices';
    choices.textContent = sleep.choices[item1].description;
    choices.append(radio);
    sleepForm.append(choices);
}

// sleep event listners //

const sleepButton = document.createElement('button');
sleepButton.textContent = 'Submit!';
sleepForm.appendChild(sleepButton);


sleepForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(sleepForm);

    const selectionId = formData.get('choices');

    const user = JSON.parse(localStorage.getItem('USER'));
    
    user.sleep = selectionId;
    
    localStorage.setItem('USER', JSON.stringify(user));


    //leave alone
    sleepSection.style.display = 'none';
    moodSection.style.display = 'flex';    
});



// MOOD 
let item2;
const moodH1 = document.getElementById('mood-id');
const moodForm = document.getElementById('mood-form');
moodH1.textContent = mood.question;
console.log(sleep.choices);
for (item2 in mood.choices) {
    console.log(mood.choices.item2);
    const radio = document.createElement('input');
    const choices = document.createElement('label');
    radio.type = 'radio';
    radio.value = mood.choices[item2].id;
    radio.name = 'choices';
    choices.textContent = mood.choices[item2].description;
    choices.append(radio);

    moodForm.append(choices);
}

// mood event listners //

const moodButton = document.createElement('button');
moodButton.textContent = 'Submit!';
moodForm.appendChild(moodButton);

// event listners //
moodForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(moodForm);

    const selectionId = formData.get('choices');

    const user = JSON.parse(localStorage.getItem('USER'));
    
    user.mood = selectionId;
    
    localStorage.setItem('USER', JSON.stringify(user));


    //leave alone
    sleepSection.style.display = 'none';
    moodSection.style.display = 'none';
    energySection.style.display = 'flex';
    
});



// ENERGY LEVELS 
const energyH1 = document.getElementById('energy-id');
const energyForm = document.getElementById('energy-form');
energyH1.textContent = energy.question;
let item3;
console.log(energy.choices);
for (item3 in energy.choices) {
    console.log(energy.choices.item3);
    const radio = document.createElement('input');
    const choices = document.createElement('label');
    radio.type = 'radio';
    radio.value = energy.choices[item3].id;
    radio.name = 'choices';
    choices.textContent = energy.choices[item3].description;
    choices.append(radio);

    energyForm.append(choices);
}


// energy event listners //

const energyButton = document.createElement('button');
energyButton.textContent = 'Submit!';
energyForm.appendChild(energyButton);

// event listners //
energyForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(energyForm);

    const selectionId = formData.get('choices');

    const user = JSON.parse(localStorage.getItem('USER'));
    
    user.energyLevels = selectionId;
    
    localStorage.setItem('USER', JSON.stringify(user));


    //leave alone
    sleepSection.style.display = 'none';
    moodSection.style.display = 'none';
    energySection.style.display = 'none';
    mbsSection.style.display = 'flex';
    
});




// MBS
const mbsH1 = document.getElementById('mbs-id');
const mbsForm = document.getElementById('mbs-form');
mbsH1.textContent = mbs.question;
let item4;
console.log(mbs.choices);
for (item4 in mbs.choices) {
    console.log(mbs.choices.item4);
    const radio = document.createElement('input');
    const choices = document.createElement('label');
    radio.type = 'radio';
    radio.value = mbs.choices[item4].id;
    radio.name = 'choices';
    choices.textContent = mbs.choices[item4].description;
    choices.append(radio);

    mbsForm.append(choices);
}



// MBS event listners //

const mbsButton = document.createElement('button');
mbsButton.textContent = 'Submit!';
mbsForm.appendChild(mbsButton);

// MBS listners //
mbsForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(mbsForm);

    const selectionId = formData.get('choices');

    const user = JSON.parse(localStorage.getItem('USER'));
    
    user.mbs = selectionId;
    
    localStorage.setItem('USER', JSON.stringify(user));

    
    //leave alone
    sleepSection.style.display = 'none';
    moodSection.style.display = 'none';
    energySection.style.display = 'none';
    mbsSection.style.display = 'flex';

    window.location = '../results';
 
    
});


    
