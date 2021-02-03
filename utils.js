import { sleep, mood, mbs, energy } from './data.js';

const USER = 'USER';

export function setUser(formData) {
    const newUser = {
        name: formData.get('name'),
        zodiac: formData.get('zodiac'),
        sleep: '',
        mood: '',
        energy: '',
        mbs: '',
        solutions: {},
    };
    const stringyNewUser = JSON.stringify(newUser);
    localStorage.setItem('USER', stringyNewUser);
}

export function getUser() {
    let storage = JSON.parse(localStorage.getItem(USER));

    if (!storage) {
        storage = [];
        localStorage.setItem(USER, JSON.stringify(storage));
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

