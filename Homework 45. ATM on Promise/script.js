function getMoney(userData, bankData) {
    const isCheckBalance = confirm('Check balance on your card?');

    return new Promise((resolve, reject) => {
        isCheckBalance ? resolve(userData) : reject(userData, bankData);
    });
}

function getUserCurrencies() {
    const userCurrencies = [];

    for (const currency in userData) {
        userCurrencies.push(currency);
    }

    return userCurrencies;
}

function getAvailableCurrencies() {
    const availableCurrencies = []

    for (const currency in bankData) {
        if (bankData[currency].max !== 0 && userData[currency]) {
            availableCurrencies.push(currency)
        }
    }

    return availableCurrencies;
}

const userData = {
    'USD': 1000,
    'EUR': 900,
    'UAH': 15000,
    'BIF': 20000,
    'AOA': 100
};

const bankData = {
    'USD': {
        max: 3000,
        min: 100,
        img: '💵'
    },
    'EUR': {
        max: 1000,
        min: 50,
        img: '💶'
    },
    'UAH': {
        max: 0,
        min: 0,
        img: '💴'
    },
    'GBP': {
        max: 10000,
        min: 100,
        img: '💷'
    }
};

getMoney(userData, bankData)
    .then(
        (userData) => {
            const userCurrencies = getUserCurrencies();
            let currency;

            do {
                currency = prompt(`Enter currency you want to check. (${[...userCurrencies]})`);
            } while (userCurrencies.indexOf(currency) === -1);

            return `Your balance is: ${userData[currency]} ${currency}`;
        },

        (userData, bankData) => {
            const availableCurrencies = getAvailableCurrencies();
            let currency;

            do {
                currency = prompt(`Enter currency you want to withdraw. (${[...availableCurrencies]})`);
            } while (availableCurrencies.indexOf(currency) === -1);

            return Promise.reject(currency);
        }
    )
    .then(
        msg => console.log(msg),

        currency => {
            let ammount = prompt(`Enter how much money you want to withdraw. (min: ${bankData[currency].min} , max: ${bankData[currency].max})`);
            let msg;

            if (ammount < bankData[currency].min) {
                msg = `Sorry, minimum ammount of withdraw is ${bankData[currency].min} ${currency}`
            }
            else if (ammount > bankData[currency].max) {
                msg = `Sorry, maximum ammount of withdraw is ${bankData[currency].max} ${currency}`
            }
            else {
                msg = `Here's your money: ${ammount} ${currency} ${bankData[currency].img}`
            }

            return Promise.reject(msg);
        }
    )
    .then(
        () => { },
        msg => console.log(msg)
    )
    .finally(() => console.log('Thank you, for choosing us. Have a nice day 😉.'));