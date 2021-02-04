//NEED TO GET USER AND DISPLAY WHAT THEYRE CHOICE RESULTS ARE
import { getUser, getSleepCrystal, getOils, getMbs, getEnergyLevels } from '../utils.js';

const userData = getUser();
// console.log(userData, 'hi');

const sleepDiv = document.getElementById('sleep');
const moodDiv = document.getElementById('mood');
const mbsDiv = document.getElementById('mbs');
const energyDiv = document.getElementById('energy');
//SLEEP
const sleepTier = getSleepCrystal(userData.sleep);
// const sleepChoice = document.createElement('p');
const sleepLessImage = document.createElement('img');
sleepLessImage.src = `../assets/crystals/${sleepTier}.jpg`;
const sleepResult = document.createElement('p');

// sleepChoice.textContent = userData.sleep;
sleepResult.textContent = `${sleepTier}`;

// sleepDiv.appendChild(sleepChoice);
sleepDiv.append(sleepLessImage, sleepResult);


// MOOD
const moodTier = getOils(userData.mood);
// const moodChoice = document.createElement('p');
const moodImage = document.createElement('img');
moodImage.src = `../assets/oils/${moodTier}.jpg`;
const moodResult = document.createElement('p');

// moodChoice.textContent = userData.mood;
moodResult.textContent = `${moodTier}`;



// moodDiv.appendChild(moodChoice);
moodDiv.append(moodImage, moodResult);




// MBS
const mbsTier = getMbs(userData.mbs);
// const mbsChoice = document.createElement('p');
const mbsImage = document.createElement('img');
mbsImage.src = `../assets/mbs/${mbsTier}.jpg`;
// const mbsResult = document.createElement('')

// mbsChoice.textContent = userData.mbs;

// mbsDiv.appendChild(mbsChoice);
mbsDiv.append(mbsImage);

// ENERGY
const energyTier = getEnergyLevels(userData.energy);
// const energyChoice = document.createElement('p');
const energyImage = document.createElement('img');
energyImage.src = `../assets/energy/${energyTier}.jpg`;
const energyVideo = document.createElement('iframe');
energyVideo.src = energyTier;

// energyChoice.textContent = userData.energy;

// energyDiv.appendChild(energyChoice);
energyDiv.append(energyImage, energyVideo);

