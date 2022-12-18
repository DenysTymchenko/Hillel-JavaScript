function Human(name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function () {
        return `Name: ${this.name}. Age: ${this.age}.`
    }
}

function Car(brand, model, year, license) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.license = license;
    this.createOwner = function (owner) {
        if (owner.age >= 18) {
            this.owner = owner;
        } else {
            console.log(`${owner.name} is under 18.`);
        }
    }
    this.getInfo = function () {
        let info = `Car: ${this.brand} ${this.model}.\nYear: ${this.year}.\nLicence plate: ${this.license}.\n`;

        if (this.owner !== undefined) {
            return info + this.owner.getInfo();
        } else {
            return info + 'No owner.';
        }
    }
}

const Denys = new Human('Denys', 19);
console.log(Denys.getInfo()); //Name: Denys. Age: 19.

const Mykyta = new Human('Mykyta', 15);
console.log(Mykyta.getInfo()); //Name: Mykyta. Age: 15.

const Mazda = new Car('Mazda', 'RX-8', 2019, 'BE7895HE');
Mazda.createOwner(Mykyta); //Mykyta is under 18.
console.log(Mazda.getInfo());
//Car: Mazda RX-8.
//Year: 2019.
//Licence plate: BE7895HE.
//No owner.

const BMW = new Car('BMW', 'M4', 2016, 'BH3232HH');
BMW.createOwner(Denys);
console.log(BMW.getInfo());
//Car: BMW M4.
//Year: 2016.
//Licence plate: BH3232HH.
//Name: Denys. Age: 19.