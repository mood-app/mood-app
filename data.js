// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

//randomizing function that chooses an index from each array
const sleep = {
    sleep6hoursRadioButton: {
        crystals: ['amythest', 'opal', 'tiger']
        // meditations: ['meditations1', 'meditations2', 'meditations3']
        // excercises: ['excercise1', 'excercise2', 'excercise3']
    },
    sleep9hoursRadioButton: {
        crystals: ['crystal0', 'am1', 'crystal2']
        meditations: ['meditations1', 'meditations2', 'meditations3']
        excercises: ['excercise1', 'excercise2', 'excercise3']
    },
    mbsRadioButton: {
        mind: {
            option1: ['','' ,'' , ]
            option2: ['yoga']
        }
        body: {
            ['','','']
        } 
        spirit: {

        
        ['','','']
        };
    },
    energyLevelsRadioButton: {
        low: ['','','']
        medium: ['','','']
        high: ['','','']
    },
    moodRadioButton: {
        happy: ['','','']
        sad: ['','','']
        mad: ['','','']
    }
};
export


const sleep = {
    id: 'sleep',
    question: 'How many hours did you sleep?',
    // image: 'vinyasa-quest.png',
    choices: [{
        id: 'less6',
        description: 'Less than 6 hours of Sleep',
        result: ['amythest', 'opal', 'tiger'],
    }, 
    {
        id: '6to9',
        description: 'In between 6 and 9 hours of Sleep',
        result: ['amythest', 'opal', 'tiger'],
    },
    {
        id: '9plus',
        description: 'More than 9 hours of sleep',
        result: ['amythest', 'opal', 'tiger'],
    }
    ]
};
const mood = {
    id: 'mood',
    question: 'How are you feeling today?',
    // image: 'vinyasa-quest.png',
    choices: [{
        id: 'happy',
        description: 'Happy',
        result: ['oils1', 'oils2', 'oils3'],
    }, 
    {
        id: 'sad',
        description: 'Sad',
        result: ['oils1', 'oils2', 'oils3'],
    },
    {
        id: 'stressed',
        description: 'Stressed',
        result: ['oils1', 'oils2', 'oils3'],
    }
    ]
};
const energylevels = {
    id: 'energylevels',
    question: 'How would you describe your energy levels today?',
    // image: 'vinyasa-quest.png',
    choices: [{
        id: 'low',
        description: 'Low',
        result: ['movement1'],
    }, 
    {
        id: 'medium',
        description: 'Medium',
        result: ['movement1'], 
    },
    {
        id: 'high',
        description: 'High',
        result: ['movement1'],
    }
    ]
};
const mbs = {
    id: 'mbs',
    question: 'Where do you want to feel more connection?',
    // image: 'vinyasa-quest.png',
    choices: [{
        id: 'mind',
        description: 'Mind',
        result: ['meditation1'],
    }, 
    {
        id: 'body',
        description: 'Body',
        result: ['meditation2'], 
    },
    {
        id: 'spirit',
        description: 'Spirit',
        result: ['meditation3'],
    }
    ]
};

const checkIn = [
    sleep, 
    mood,
    energylevels,
    mbs
];