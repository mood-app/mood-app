
export const sleep = { //accessing keys in objects is faster and more efficienct than iterating through an array
    id: 'sleep',
    question: 'How many hours did you sleep?',
    // image: 'vinyasa-quest.png',
    choices: {
        less6: {
            id: 'less6',
            description: 'Less than 6 hours of Sleep',
            result: ['lepidolite', 'lepidolite', 'lepidolite']
        },
        sixToNine: {
            id: 'sixToNine',
            description: 'In between 6 and 9 hours of Sleep',
            result: ['amythest', 'opal', 'tiger']
        },
        ninePlus: {
            id: 'ninePlus',
            description: 'More than 9 hours of sleep',
            result: ['amythest', 'opal', 'tiger']
        }
    }
};
export const mood = {
    id: 'mood',
    question: 'How are you feeling today?',
    // image: 'vinyasa-quest.png',
    choices: {
        happy: {
            id: 'happy',
            description: 'Happy',
            result: ['5 drops of Sweet Orange, 3 drops of Peppermint, 3 drops of Rosemary', '3 drops of Peppermint, 3 drops of Sweet Orange', '3 drops of Pine Needle, 2 drops of Grapefruit, 2 drops of Frankincense'],
        },
        sad: {
            id: 'sad',
            description: 'Sad',
            result: ['4 drops of Bergamont, 4 drops of Frankincense', '8 drops of Grapefruit, 5 drops of Lavender', '4 drops of Bergamont, 2 drops of Lavender'],
        },
        stressed: {
            id: 'stressed',
            description: 'Stressed',
            result: ['5 drops of Lavender, 3 drops of Ylang ylang, 2 drops of Bergamont', '4 drops of Frankincense, 4 drops of Patchouli', '4 drops of Lavender'],
        }
    }
};
export const energy = {
    id: 'energy',
    question: 'How would you describe your energy levels today?',
    // image: 'vinyasa-quest.png',
    choices: {
        low: {
            id: 'low',
            description: 'Low',
            result: ['movement1'],
        },
        medium: {
            id: 'medium',
            description: 'Medium',
            result: ['movement1'],
        },
        high: {
            id: 'high',
            description: 'High',
            result: ['movement1'],
        }
    }
};
export const mbs = {
    id: 'mbs',
    question: 'Where do you want to feel more connection?',
    // image: 'vinyasa-quest.png',
    choices: {
        mind: {
            id: 'mind',
            description: 'Mind',
            result: ['meditation1'],
        },
        body: {
            id: 'body',
            description: 'Body',
            result: ['meditation2'],
        },
        spirit: {
            id: 'spirit',
            description: 'Spirit',
            result: ['meditation3'],
        }
    }
};
