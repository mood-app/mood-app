import { getOils, getEnergyLevels, getSleepCrystal, getMbs } from '../utils.js';

const test = QUnit.test;

test('function getOils should return one randomized oil', (expect) => {
    const expected = true;

    const actual = ['5 drops of Sweet Orange, 3 drops of Peppermint, 3 drops of Rosemary', '3 drops of Peppermint, 3 drops of Sweet Orange', '3 drops of Pine Needle, 2 drops of Grapefruit, 2 drops of Frankincense'].includes(getOils('happy'));


    expect.equal(actual, expected);
});

test('function getEnergyLevels should return one randomized energyLevel solution', (expect) => {
    const expected = true;

    const actual = ['Chair yoga', 'Yoga for self-intamacy', 'Qi-gong flow'].includes(getEnergyLevels('medium'));


    expect.equal(actual, expected);
});

test('function getSleepCrystal should return one randomized crystal', (expect) => {
    const expected = true;

    const actual = ['Blue lace agate, Black tourmaline, Kyanite', 'Malachite, Aquamarine, Bloodstone', 'Selenite, Citrine, Black obsidian'].includes(getSleepCrystal('ninePlus'));


    expect.equal(actual, expected);
});

test('function getMbs should return one randomized meditation based on mbs choice', (expect) => {
    const expected = true;

    const actual = ['meditation1'].includes(getMbs('mind'));


    expect.equal(actual, expected);
});
