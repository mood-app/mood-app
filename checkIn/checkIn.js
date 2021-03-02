import { sleep, mood, energy, mbs } from '../data.js';
import { getUserHistoryStorage, displayUserData } from '../utils.js';




const sleepH1 = document.getElementById('sleep-id');
const sleepForm = document.getElementById('sleep-form');
const sleepSection = document.getElementById('sleep-section');
const moodSection = document.getElementById('mood-section');
const energySection = document.getElementById('energy-section');
const mbsSection = document.getElementById('mbs-section');
const introSection = document.getElementById('intro');
const introButton = document.getElementById('start-intro');
const nameSpan = document.getElementById('name');



sleepSection.style.display = 'none';
moodSection.style.display = 'none';
energySection.style.display = 'none';
mbsSection.style.display = 'none';


// SLEEP 
sleepH1.textContent = sleep.question;

let item1;
for (item1 in sleep.choices) {

    const radio = document.createElement('input');
    const choices = document.createElement('label');
    radio.type = 'radio';
    radio.value = sleep.choices[item1].id;
    radio.name = 'choices';
    choices.textContent = sleep.choices[item1].description;
    choices.append(radio);
    sleepForm.append(choices);
}

// intro event listners //

introButton.addEventListener('click', () => {
    introSection.style.display = 'none';
    sleepSection.style.display = 'flex';
});


// sleep event listners //

const sleepButton = document.createElement('button');
sleepButton.textContent = 'Submit!';
sleepForm.appendChild(sleepButton);


sleepForm.addEventListener('submit', (e) => {
    e.preventDefault();
   // there is some repition here, where you're doing the same thing in every form. would have been interesting to try and make this dynamic by creating a function that takes in the appropriate form and gets the right stuff out as a return value. The only problem is returning multiple things from the function, which means you'd have to return an object and destructure it on the function call, like so:
    const { user, selectionId } = doFormStuff(sleepForm);

    user.sleep = selectionId;

    localStorage.setItem('SESSIONS', JSON.stringify(user));


    //leave alone
    sleepSection.style.display = 'none';
    moodSection.style.display = 'flex';
});



// MOOD 
let item2;
const moodH1 = document.getElementById('mood-id');
const moodForm = document.getElementById('mood-form');
moodH1.textContent = mood.question;
for (item2 in mood.choices) {
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

    const { user, selectionId } = doFormStuff(moodForm);

    user.mood = selectionId;

    localStorage.setItem('SESSIONS', JSON.stringify(user));


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
for (item3 in energy.choices) {
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

    const { user, selectionId } = doFormStuff(energyForm);

    user.energy = selectionId;

    localStorage.setItem('SESSIONS', JSON.stringify(user));


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
for (item4 in mbs.choices) {
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

    const { user, selectionId } = doFormStuff(mbsForm);

    user.mbs = selectionId;

    localStorage.setItem('SESSIONS', JSON.stringify(user));

    getUserHistoryStorage();

    //leave alone
    sleepSection.style.display = 'none';
    moodSection.style.display = 'none';
    energySection.style.display = 'none';
    mbsSection.style.display = 'flex';

    window.location = '../results';


});

const user = JSON.parse(localStorage.getItem('SESSIONS'));
nameSpan.textContent = user.name;

displayUserData();
function doFormStuff(form) {
    const formData = new FormData(form);

    const selectionId = formData.get('choices');

    const user = JSON.parse(localStorage.getItem('SESSIONS'));

    return { user, selectionId };
}

