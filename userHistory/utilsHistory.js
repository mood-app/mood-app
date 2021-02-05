// import { getUser } from '../utils.js';

// const SAVED = 'SAVED';
// const userData = getUser();

// console.log(userData, 'HELP');



// // Remove saved data from sessionStorage
// //sessionStorage.removeItem(SAVED);

// // Remove all saved data from sessionStorage
// //sessionStorage.clear();

// //SET USER
// export function localToSession(){

//     const stringyNewUser = JSON.stringify(userData);
    
//     sessionStorage.setItem(SAVED, stringyNewUser);

// }

// //GET USER
// // export function displaySession(){
    
// //     const myLocalData = sessionStorage.setItem(SAVED, userData);
// //     sessionStorage.getItem('SAVED');


// // }

// export function getUserSaved() {
//     let storage = JSON.parse(sessionStorage.getItem(SAVED));

//     if (!storage) {
//         storage = [];
//         sessionStorage.setItem(SAVED, JSON.stringify(storage));
//     }

//     return storage;
// }

// console.log(getUserSaved(), 'HELP 2');

// //============>
// // Get the text field that we're going to track
// let field = document.getElementById('field');

// // See if we have an autosave value
// // (this will only happen if the page is accidentally refreshed)
// if (sessionStorage.getItem(SAVED)) {
//   // Restore the contents of the text field
//     field.value = sessionStorage.getItem(SAVED);
// }

// // Listen for changes in the text field
// field.addEventListener('change', function() {
//   // And save the results into the session storage object
//     sessionStorage.setItem(SAVED, field.value);
// });




// // // const USER = 'USER';

// export function setUser(formData) {
//     const newUser = {
//         name: formData.get('name'),
//         zodiac: formData.get('zodiac'),
//         sleep: '',
//         mood: '',
//         energy: '',
//         mbs: '',
//         solutions: {},
//     };
//     const stringyNewUser = JSON.stringify(newUser);
//     localStorage.setItem('USER', stringyNewUser);
// }


// // export function getUser() {
// //     let storage = JSON.parse(localStorage.getItem(USER));

// //     if (!storage) {
// //         storage = [];
// //         localStorage.setItem(USER, JSON.stringify(storage));
// //     }

// //     return storage;
// // }


