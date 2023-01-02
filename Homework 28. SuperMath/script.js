function getObjKeys(obj) {
    const keys = [];

    for (let key in obj) {
        keys.push(key);
    }

    return keys.join(', ');
}

class SuperMath {
    check(obj) {
        const doCalculation = confirm(`Do you want to make this equetion: ${obj.x} ${obj.sign} ${obj.y}?`);

        return doCalculation ? this.calculate(obj) : this.getNewInput();
    }

    getNewInput() {
        //Variables created for not overriding original obj
        let getX, getY, getSign;

        do {
            getX = +prompt('x = ');
        } while (isNaN(getX));

        do {
            getY = +prompt('y = ');
        } while (isNaN(getY));

        do {
            getSign = prompt(`Input one of these math signs: ${getObjKeys(signs)}`);
        } while (!signs[getSign]);

        return this.check({ x: getX, y: getY, sign: getSign });
    }

    calculate(obj) {
        const operation = signs[obj.sign];

        return `${obj.x} ${obj.sign} ${obj.y} = ${operation(obj.x, obj.y)}`;
    }
}

signs = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '/': function (x, y) { return x / y },
    '*': function (x, y) { return x * y },
    '%': function (x, y) { return x % y },
}

const calculator = new SuperMath();
console.log(calculator.check({ x: 32, y: 33, sign: '*' }));