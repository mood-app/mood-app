import { getOils, getEnergyLevels, getSleepCrystal, getMbs } from '../utils.js';

const test = QUnit.test;

test('function getOils should return one randomized oil', (expect) => {
    const expected = true;

    const actual = ['5 drops of Sweet Orange, 3 drops of Peppermint, 3 drops of Rosemary', '3 drops of Peppermint, 3 drops of Sweet Orange', '3 drops of Pine Needle, 2 drops of Grapefruit, 2 drops of Frankincense'].includes(getOils('happy'));


    expect.equal(actual, expected);
});

test('function getEnergyLevels should return one randomized energyLevel solution', (expect) => {
    const expected = true;

    const actual = ['https://www.youtube.com/embed/t7WxjzxAzrU', 'https://www.youtube.com/embed/YyCXWvR4ww0', 'https://www.youtube.com/embed/cwlvTcWR3Gs'].includes(getEnergyLevels('medium'));


    expect.equal(actual, expected);
});


test('function getSleepCrystal should return one randomized crystal', (expect) => {
    const expected = true;

    const actual = ['Malachite, Aquamarine, Bloodstone', 'Blue Lace Agate, Black Tourmaline, Kyanite', 'Selenite, Citrine, Black Obsidian'].includes(getSleepCrystal('ninePlus'));


    expect.equal(actual, expected);
});


test('function getMbs should return one randomized meditation based on mbs choice', (expect) => {
    const expected = true;

    const actual = ['mind.mp3'].includes(getMbs('mind'));


    expect.equal(actual, expected);
});
