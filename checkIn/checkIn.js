import { sleep, mood, energy, mbs } from '../data.js';



const sleepH1 = document.getElementById('sleep-id');
const sleepForm = document.getElementById('sleep-form');


sleepH1.textContent = sleep.question;



for (let item of sleep.choices) {
    const radio = document.createElement('input');
    const choices = document.createElement('label');
    radio.type = 'radio';
    radio.value = item.id;
    radio.name = 'choices';
    choices.textContent = item.description;
    choices.append(radio);

    sleepForm.append(choices);
}
// MOOD 
const moodH1 = document.getElementById('mood-id');
const moodForm = document.getElementById('mood-form');
moodH1.textContent = mood.question;
for (let item of mood.choices) {
    const radio = document.createElement('input');
    const choices = document.createElement('label');
    radio.type = 'radio';
    radio.value = item.id;
    radio.name = 'choices';
    choices.textContent = item.description;
    choices.append(radio);

    moodForm.append(choices);
}
// ENERGY LEVELS 
const energyH1 = document.getElementById('energy-id');
const energyForm = document.getElementById('energy-form');
energyH1.textContent = energy.question;
for (let item of energy.choices) {
    const radio = document.createElement('input');
    const choices = document.createElement('label');
    radio.type = 'radio';
    radio.value = item.id;
    radio.name = 'choices';
    choices.textContent = item.description;
    choices.append(radio);

    energyForm.append(choices);
}
// MBS
const mbsH1 = document.getElementById('mbs-id');
const mbsForm = document.getElementById('mbs-form');
mbsH1.textContent = mbs.question;
for (let item of mbs.choices) {
    const radio = document.createElement('input');
    const choices = document.createElement('label');
    radio.type = 'radio';
    radio.value = item.id;
    radio.name = 'choices';
    choices.textContent = item.description;
    choices.append(radio);

    mbsForm.append(choices);
}
