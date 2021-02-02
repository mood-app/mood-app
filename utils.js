import { sleep } from './data.js';


export function setUser(formData) {
    const newUser = {
        name: formData.get('name'),
        zodiac: formData.get('zodiac'),
        sleep: '',
        mood: '',
        energyLevels: '',
        mbs: '',
        // completed: {},
    };
    const stringyNewUser = JSON.stringify(newUser);
    localStorage.setItem('USER', stringyNewUser);
}

export function findById(id, array) {
    for (let item of array) {
        if (item.id === id)
            return item;
    };
}

export function genRandom(array) { 
    //FUNCTION DEFINITION: this function generates a randon number based on the length of any given array
    // ARGUMENT: "array" is a variable/parameter that is returning an array
    // RETURN: A random number (integer)
    return Math.floor(Math.random() * array.length);
};

export function getSleepCrystal(sleeptier) { 
    //FUNCTION DEFINITION: this function is accessing the result array 
    //out of the sleep choice object and using the genRandom function 
    //to generate a random number to access a randomelement in the array
    //ARGUMENT: "sleeptier" is a variable/parameter returning a string
    //RETURN: 'Crystal', which is a string from the results array
    const crystalArray = sleep['choices'][sleeptier]['result'];
    
    const crystal = sleep['choices'][sleeptier]['result'][genRandom(crystalArray)];

    return crystal;
};