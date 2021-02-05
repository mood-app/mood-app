import { getUserHistoryStorage } from '../utils.js';


export function seeUserData(userDataStorage) {
    const displayArray = getUserHistoryStorage();

    displayArray.push(userDataStorage);

    localStorage.setItem('USERHISTORY', JSON.stringify(displayArray));

    localStorage.removeItem('SESSIONS');

    return displayArray;

}

export function getSleepData(getHistoryData){
    const seenArray = [];

    for (let item of getHistoryData) {
        seenArray.push(item.sleep);
    }
    return seenArray;

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

    console.log(emptyArray, 'HI');

    return emptyArray;

}

export function getDateData(getHistoryData){
    const seenArray = [];

    for (let item of getHistoryData) {
        seenArray.push(item.date);
    }
    return seenArray;

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
    emptyArray.push(happy, sad, stressed);

    console.log(emptyArray, 'HI');

    return emptyArray;

}