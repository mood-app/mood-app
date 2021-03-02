import { getUserHistoryStorage } from '../utils.js';


export function seeUserData(userDataStorage) {
    const displayArray = getUserHistoryStorage();

    displayArray.push(userDataStorage);

    localStorage.setItem('USERHISTORY', JSON.stringify(displayArray));

    localStorage.removeItem('SESSIONS');

    return displayArray;

}

export function getSleepData(getHistoryData){
    return getHistoryData.map(item => item.sleep);

}

export function countSleep(getHistoryData){

    const emptyArray = [];

    let less6 = 0;
    let sixToNine = 0;
    let ninePlus = 0;

    for (let item of getHistoryData) {
        if (item.sleep === 'less6'){
            less6++;
        } else if (item.sleep === 'sixToNine'){
            sixToNine++;
        } else if (item.sleep === 'ninePlus'){
            ninePlus++;
        }
    }
    emptyArray.push(less6, sixToNine, ninePlus);

    return emptyArray;

}

export function getDateData(getHistoryData){
    return getHistoryData.map(item => item.date);
}



export function countMood(getHistoryData){

    const emptyArray = [];

    let happy = 0;
    let sad = 0;
    let stressed = 0;

    for (let item of getHistoryData) {
        if (item.sleep === 'less6'){
            happy++;
        } else if (item.sleep === 'sixToNine'){
            sad++;
        } else if (item.sleep === 'ninePlus'){
            stressed++;
        }
    }
    // if this had been an object, you could use a .map to refactor this function. as it stands, this is a good solution
    emptyArray.push(happy, sad, stressed);

    return emptyArray;

}