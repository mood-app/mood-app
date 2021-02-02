
export const sleep = { //accessing keys in objects is faster and more efficienct than iterating through an array
    id: 'sleep',
    question: 'How many hours did you sleep?',
    // image: 'vinyasa-quest.png',
    choices: {
        less6 : {
            id: 'less6',
            description: 'Less than 6 hours of Sleep',
            result: ['amythest', 'opal', 'tiger']
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
        happyMood : {
            id: 'happy',
            description: 'Happy',
            result: ['oils1', 'oils2', 'oils3'],
        }, 
        sadMood:{
            id: 'sad',
            description: 'Sad',
            result: ['oils1', 'oils2', 'oils3'],
        },
        stressedMood : {
            id: 'stressed',
            description: 'Stressed',
            result: ['oils1', 'oils2', 'oils3'],
        }
    }
};
export const energy = {
    id: 'energy',
    question: 'How would you describe your energy levels today?',
    // image: 'vinyasa-quest.png',
    choices: {
        lowEngergy : {
            id: 'low',
            description: 'Low',
            result: ['movement1'],
        }, 
        mediumEngergy : {
            id: 'medium',
            description: 'Medium',
            result: ['movement1'], 
        },
        highEnergy : {
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
        connectMind : {
            id: 'mind',
            description: 'Mind',
            result: ['meditation1'],
        }, 
        connectBody : {
            id: 'body',
            description: 'Body',
            result: ['meditation2'], 
        },
        connectSpirit : {
            id: 'spirit',
            description: 'Spirit',
            result: ['meditation3'],
        }
    }
};

