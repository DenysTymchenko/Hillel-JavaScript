function getObjKeys(obj) {
    const keys = [];

    for (const key in obj) {
        keys.push(key);
    }

    return keys.join(', ')
}

class Hamburger {
    constructor() {
        this.price = 0;
        this.calories = 0;
    }

    setPrice(price) {
        this.price += price;
    }

    setCalories(calories) {
        this.calories += calories;
    }

    getPrice() {
        return this.price;
    }

    getCalories() {
        return this.calories
    }

    getInfo() {
        return `Your hamburger's price: ${newHamburger.getPrice()}$, calories: ${newHamburger.getCalories()}`
    }

    create() {
        this.chooseSize();
        this.addIngridients('toppings');
        this.addIngridients('additions');
    }

    chooseSize() {
        do {
            this.size = prompt(`Enter size of burger (${getObjKeys(HAMBURGER.size)}) below:`);
        } while (!HAMBURGER.size[this.size]);

        newHamburger.setPrice(HAMBURGER.size[this.size].price);
        newHamburger.setCalories(HAMBURGER.size[this.size].calories);
    }

    addIngridients(category) {
        let question = `Do you want any ${category}?`

        while (confirm(question)) {
            do {
                this.ingridient = prompt(`What ${category} do you want? (${getObjKeys(HAMBURGER[category])})`);
            } while (!HAMBURGER[category][this.ingridient]);

            newHamburger.setPrice(HAMBURGER[category][this.ingridient].price);
            newHamburger.setCalories(HAMBURGER[category][this.ingridient].calories);

            question = 'Do you want more?'
        }
    }
}

HAMBURGER = {
    size: {
        small: {
            price: 5,
            calories: 20
        },

        big: {
            price: 10,
            calories: 40
        }
    },

    toppings: {
        cheese: {
            price: 1,
            calories: 20
        },

        salad: {
            price: 2,
            calories: 5
        },

        potato: {
            price: 1.5,
            calories: 10
        }
    },

    additions: {
        spices: {
            price: 1.5,
            calories: 0
        },

        mayonnaise: {
            price: 2,
            calories: 5
        }
    }
}

const newHamburger = new Hamburger();
newHamburger.create();
alert(newHamburger.getInfo());