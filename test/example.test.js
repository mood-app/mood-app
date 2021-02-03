// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { mood } from '../data.js';
import { getOils, getEnergyLevels } from '../utils.js'

const test = QUnit.test;

test('function getOils should return one randomized oil', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = ['oils1', 'oils2', 'oils3'].includes(getOils('happyMood'));

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('function getEnergyLevels should return one randomized energyLevel solution', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = ['movement1'].includes(getEnergyLevels('mediumEnergy'));

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});