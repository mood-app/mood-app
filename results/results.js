//NEED TO GET USER AND DISPLAY WHAT THEYRE CHOICE RESULTS ARE
import { getUser, getSleepCrystal, getOils, getMbs, getEnergyLevels, makeItNice, makeitAList, getUserHistoryStorage } from '../utils.js';

import { seeUserData, countSleep } from '../userHistory/historyUtils.js';


const userData = getUser();

const sleepDiv = document.getElementById('sleep');
const moodDiv = document.getElementById('mood');
const mbsDiv = document.getElementById('mbs');
const energyDiv = document.getElementById('energy');

//SLEEP
const sleepTier = getSleepCrystal(userData.sleep);
makeItNice(sleepTier);
const sleepLessImage1 = document.createElement('img');
const sleepLessImage2 = document.createElement('img');
const sleepLessImage3 = document.createElement('img');
sleepLessImage1.src = `../assets/crystals/${sleepTier}1.png`;
sleepLessImage2.src = `../assets/crystals/${sleepTier}2.png`;
sleepLessImage3.src = `../assets/crystals/${sleepTier}3.png`;

const sleepResult = document.createElement('p');

sleepResult.textContent = `${sleepTier}`;

sleepDiv.append(sleepLessImage1, sleepLessImage2, sleepLessImage3, makeitAList(sleepTier));

// MOOD
const moodTier = getOils(userData.mood);
const moodImage = document.createElement('img');
moodImage.src = `../assets/oils/oils-image.png`;


moodDiv.append(moodImage, makeitAList(moodTier));

// MBS
const mbsTier = getMbs(userData.mbs);
const mbsVideo = document.createElement('iframe');
mbsVideo.src = mbsTier;
mbsDiv.append(mbsVideo);


// ENERGY
const energyTier = getEnergyLevels(userData.energy);
const energyVideo = document.createElement('iframe');
energyVideo.src = energyTier;

energyDiv.append(energyVideo);

const testButton = document.getElementById('test-button');

const userDataStorage = getUser();
const getHistoryData = getUserHistoryStorage();

//TEST BUTTON
testButton.addEventListener('click', () => {
    console.log(seeUserData(userDataStorage));
    console.log(countSleep(getHistoryData), 'HI');

});

// results display //

const crystalDiv = document.getElementById('sleep');
const oilDiv = document.getElementById('mood');
const movementDiv = document.getElementById('energy');
const katDiv = document.getElementById('mbs');
const crystalButton = document.getElementById('crystal-button');
const oilButton = document.getElementById('oil-button');
const movementButton = document.getElementById('movement-button');
const katButton = document.getElementById('kat-button');

oilDiv.style.display = 'none';
movementDiv.style.display = 'none';
katDiv.style.display = 'none';

crystalButton.addEventListener('click', () => {
    
    crystalDiv.style.display = 'flex';
    oilDiv.style.display = 'none';
    movementDiv.style.display = 'none';
    katDiv.style.display = 'none';

});

oilButton.addEventListener('click', () => {
    
    crystalDiv.style.display = 'none';
    oilDiv.style.display = 'flex';
    movementDiv.style.display = 'none';
    katDiv.style.display = 'none';

});

movementButton.addEventListener('click', () => {
    
    crystalDiv.style.display = 'none';
    oilDiv.style.display = 'none';
    movementDiv.style.display = 'flex';
    katDiv.style.display = 'none';

});

katButton.addEventListener('click', () => {
    
    crystalDiv.style.display = 'none';
    oilDiv.style.display = 'none';
    movementDiv.style.display = 'none';
    katDiv.style.display = 'flex';

});

