// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { mood } from '../data.js';
import { getOils } from '../utils.js'

const test = QUnit.test;

test('function getOils should return one randomized oil', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = ['oils1', 'oils2', 'oils3'].includes(getOils('happy'));

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
