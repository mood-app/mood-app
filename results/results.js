//NEED TO GET USER AND DISPLAY WHAT THEYRE CHOICE RESULTS ARE
import { getUser, getSleepCrystal, getOils, getMbs, getEnergyLevels } from '../utils.js';

const userData = getUser();

const sleepDiv = document.getElementById('sleep');
const moodDiv = document.getElementById('mood');
const mbsDiv = document.getElementById('mbs');
const energyDiv = document.getElementById('energy');

//SLEEP
const sleepTier = getSleepCrystal(userData.sleep);

const sleepLessImage = document.createElement('img');
sleepLessImage.src = `../assets/crystals/${sleepTier}.jpg`;
const sleepResult = document.createElement('p');

sleepResult.textContent = `${sleepTier}`;

sleepDiv.append(sleepLessImage, sleepResult);

// MOOD
const moodTier = getOils(userData.mood);

const moodImage = document.createElement('img');
moodImage.src = `../assets/oils/${moodTier}.jpg`;
const moodResult = document.createElement('p');

moodResult.textContent = `${moodTier}`;

moodDiv.append(moodImage, moodResult);

// MBS
const mbsTier = getMbs(userData.mbs);

const mbsImage = document.createElement('img');
mbsImage.src = `../assets/mbs/${mbsTier}.jpg`;

mbsDiv.append(mbsImage);

// ENERGY
const energyTier = getEnergyLevels(userData.energy);

const energyImage = document.createElement('img');
energyImage.src = `../assets/energy/${energyTier}.jpg`;
const energyVideo = document.createElement('iframe');
energyVideo.src = energyTier;

energyDiv.append(energyImage, energyVideo);

if (userData.energy === 'high') {
    const stallionVideo = document.createElement('iframe');
    stallionVideo.src = 'https://www.youtube.com/embed/7PBYGu4Az8s';
    energyDiv.append(stallionVideo);
}



