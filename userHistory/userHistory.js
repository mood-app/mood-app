import { getUser, getUserHistoryStorage } from '../utils.js';

const testButton = document.getElementById('test-button');
const historyStorage = getUserHistoryStorage(); 
const userDataStorage = getUser();

function seeHistoryData(historyStorage) { 
    //FUNCTION DEFINITION: This function is going to
    //push our session local storage to our history local storage
    const displayArray = [];
    console.log("in here");
    for (let item in historyStorage) {
        
        displayArray.push(item);
    }
    return displayArray;
}

function seeUserData(userDataStorage) { 
    //FUNCTION DEFINITION: This function is going to
    //push our session local storage to our history local storage
    const displayArray = [];
    let obj = {};

    console.log(obj);
    displayArray.push(userDataStorage);
    // for (let item in userDataStorage) {
    //     console.log(item);
    //     displayArray.push(item);
    // }
    return displayArray;
}
console.log(getUser());


testButton.addEventListener('click', () => {
    console.log(seeHistoryData(historyStorage));
    console.log(seeUserData(userDataStorage));

});


// function seeUserData(userDataStorage) { 
//     //FUNCTION DEFINITION: This function is going to
//     //push our session local storage to our history local storage
//     const displayArray = [];
//     let obj = {
//         'username1' : [{ 'session': '1' }]
//     };
//     let username2 = [{ 'session': '2' }];

//     obj['username2'] = username2;
//     console.log(obj);
//     displayArray.push(userDataStorage);
//     // for (let item in userDataStorage) {
//     //     console.log(item);
//     //     displayArray.push(item);
//     // }
//     return displayArray;
// }
// console.log(getUser());