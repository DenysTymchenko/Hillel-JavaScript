function main(a = 2, b = 3, c) {
    if (typeof (c) === 'function')
        return c(sum(a, b));
    else {
        return sum(a, b);
    }
}

function sum(a, b) {
    return a + b;
}

function isEven(number) {
    return number % 2 === 0;
}

console.log(main(10, 20, isEven));