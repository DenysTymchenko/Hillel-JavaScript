const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function getRandomNumber() {
    return Math.round(Math.random() * (characters.length - 1)); // random number from 0 to charactes.length - 1
}

function generateKey(length, characters) {
    let key = '';

    for (let i = 0; i < length; i++) {
        key += characters[getRandomNumber()];
    }

    return key;
}

const key = generateKey(16, characters);
console.log(key);