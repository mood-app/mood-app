export function setUser(formData) {
    const newUser = {
        name: formData.get('name'),
        zodiac: formData.get('zodiac'),
        sleep: '',
        mood: '',
        energyLevels: '',
        mbs: '',
        // completed: {},
    };
    const stringyNewUser = JSON.stringify(newUser);
    localStorage.setItem('USER', stringyNewUser);
}

export function findById(id, array) {
    for (let item of array) {
        if (item.id === id)
            return item;
    }
}