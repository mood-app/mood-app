import { sleep, mood, mbs, energy } from './data.js';
const USERHISTORY = 'USERHISTORY';
const SESSIONS = 'SESSIONS';

export function setUser(formData) {
    const newUser = {
        name: formData.get('name'),
        zodiac: formData.get('zodiac'),
        date: formData.get('date'),
        sleep: '',
        mood: '',
        energy: '',
        mbs: '',
    };
    const stringyNewUser = JSON.stringify(newUser);
    localStorage.setItem('SESSIONS', stringyNewUser);
}


export function getUserHistoryStorage() {
    let storage = JSON.parse(localStorage.getItem(USERHISTORY));
    if (!storage) {
        storage = [];
        localStorage.setItem(USERHISTORY, JSON.stringify(storage));
    }
    return storage;
}


export function getUser() {
    let storage = JSON.parse(localStorage.getItem(SESSIONS));

    if (!storage) {
        storage = [];
        localStorage.setItem(SESSIONS, JSON.stringify(storage));
    }

    return storage;
}


export function genRandom(array) {
    //FUNCTION DEFINITION: this function generates a randon number based on the length of any given array
    // ARGUMENT: "array" is a variable/parameter that is returning an array
    // RETURN: A random number (integer)
    return Math.floor(Math.random() * array.length);
}

export function getSleepCrystal(sleeptier) {
    //FUNCTION DEFINITION: this function is accessing the result array 
    //out of the sleep choice object and using the genRandom function 
    //to generate a random number to access a randomelement in the array
    //ARGUMENT: "sleeptier" is a variable/parameter returning a string
    //RETURN: 'Crystal', which is a string from the results array
    const crystalArray = sleep['choices'][sleeptier]['result'];

    const crystal = sleep['choices'][sleeptier]['result'][genRandom(crystalArray)];

    return crystal;
}

export function getOils(moodtier) {

    const oilsArray = mood['choices'][moodtier]['result'];

    const oil = mood['choices'][moodtier]['result'][genRandom(oilsArray)];

    return oil;

}

export function getEnergyLevels(energytier) {

    const energyArray = energy['choices'][energytier]['result'];

    const movement = energy['choices'][energytier]['result'][genRandom(energyArray)];

    return movement;

}

export function getMbs(mbstier) {
    const mbsArray = mbs['choices'][mbstier]['result'];

    const meditate = mbs['choices'][mbstier]['result'][genRandom(mbsArray)];

    return meditate;
}

export function makeItNice(moodtier) {
    // FUNCTION DEFINITION: I want to parse a string from the data and 
    //create an array so the results are displayed
    //vertically
    let string = moodtier;
    let res = string.split(',');

    return res;
}

export function makeitAList(moodtier) {
    //FUNCTION DEFINITION: This function is going to dynamically 
    //populte the result (oil, crystals) as an unordered list
    let moodArray = makeItNice(moodtier);
    let moodList = document.createElement('ul');
    moodList.className = 'result-list';

    for (let i = 0; i < Object.keys(moodArray).length; i++) {
        let item = document.createElement('li');
        item.className = 'result-li';

        item.appendChild(document.createTextNode(Object.values(moodArray)[i]));

        moodList.appendChild(item);
    }
    return moodList;
}

export function displayUserData() {

    const li = document.createElement('li');

    const user = JSON.parse(localStorage.getItem('SESSIONS'));

    const userAvatar = user.zodiac;
    const userName = user.name;

    const avatarImg = document.createElement('img');
    avatarImg.src = `../assets/zodiac/${userAvatar}.png`;

    const userNameDiv = document.createElement('span');
    userNameDiv.textContent = `${userName}`;


    const userDisplay = document.getElementById('navbar');

    li.append(avatarImg);

    const li2 = document.createElement('li');

    li2.append(userNameDiv);

    userDisplay.append(li, li2);

}


// userhistory = {
//     username1: [{session1}, {session2},]
//     username2: [],
//     username3: []
// }
