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
// makeItNice(moodTier);

const moodImage = document.createElement('img');
moodImage.src = `../assets/oils/oils-image.png`;
// const moodResult = document.createElement('p');
// moodResult.textContent = `${moodTier}`;

moodDiv.append(moodImage, makeitAList(moodTier));



// MBS
const mbsTier = getMbs(userData.mbs);

const mbsVideo = document.createElement('iframe');
mbsVideo.src = `../assets/mbs/${mbsTier}.jpg`;

mbsDiv.append(mbsVideo);


// ENERGY
const energyTier = getEnergyLevels(userData.energy);
const energyVideo = document.createElement('iframe');
energyVideo.src = energyTier;

energyDiv.append(energyVideo);

if (userData.energy === 'high') {
    const stallionVideo = document.createElement('iframe');
    stallionVideo.src = 'https://www.youtube.com/embed/7PBYGu4Az8s';
    energyDiv.append(stallionVideo);
}

const testButton = document.getElementById('test-button');

const userDataStorage = getUser();
const getHistoryData = getUserHistoryStorage();

//TEST BUTTON
testButton.addEventListener('click', () => {
    console.log(seeUserData(userDataStorage));
    console.log(countSleep(getHistoryData), 'HI');

});