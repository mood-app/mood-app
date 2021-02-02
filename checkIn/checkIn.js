import checkIn from '../data.js';
import { findById } from '../utils.js';



// const sleepForm = document.querySelector('sleep-form');
// const sleepButton = document.querySelector('sleep-button');


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

    sleepForm.append(label);
}