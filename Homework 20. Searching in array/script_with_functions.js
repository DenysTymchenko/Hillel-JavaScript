//functions
function sum(arr) {
    let sum = 0;

    arr.map(function (number) {
        sum += number;
    });

    return sum;
}

function findMinItem(arr) {
    let minNumber = arr[0];

    arr.forEach(function (number) {
        minNumber = number < minNumber ? number : minNumber;
    });

    return minNumber;
}

function findMaxItem(arr) {
    let maxNumber = arr[0];

    arr.forEach(function (number) {
        maxNumber = number > maxNumber ? number : maxNumber;
    });

    return maxNumber;
}

function product(arr) {
    let product = 1;

    arr.forEach(function (number) {
        product *= number;
    });

    return product;
}


const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

//Знайти суму та кількість позитивних елементів.
const positiveNums = arr.filter(function (number) {
    return number >= 0;
})

console.log(`Sum of positive numbers: ${sum(positiveNums)}.\nAmmount of positive numbers: ${positiveNums.length}`);

//Знайти мінімальний елемент масиву та його порядковий номер.
//Знайти максимальний елемент масиву та його порядковий номер.
const minNumber = findMinItem(arr);
const maxNumber = findMaxItem(arr);

console.log(`The minimum array element is ${minNumber}, with index ${arr.indexOf(minNumber)}`);
console.log(`The maximum array element is ${maxNumber}, with index ${arr.indexOf(maxNumber)}`);

//Визначити кількість негативних елементів.
const negativeNums = arr.filter(function (number) {
    return number <= 0;
})

console.log(`Ammount of negative numbers: ${negativeNums.length}`);

//Знайти кількість парних позитивних елементів.
const positiveEvenNums = positiveNums.filter(function (number) {
    return number % 2 === 0;
});

console.log(`Ammount of positive even numbers: ${positiveEvenNums.length}`)

//Знайти кількість непарних позитивних елементів.
const positiveOddNums = positiveNums.filter(function (number) {
    return number % 2 !== 0;
})

console.log(`Ammount of positive odd numbers: ${positiveOddNums.length}`);

//Знайти суму парних позитивних елементів.
console.log(`Sum of positive even numbers: ${sum(positiveEvenNums)}`);

//Знайти суму непарних позитивних елементів.
console.log(`Sum of positive even numbers: ${sum(positiveOddNums)}`);

//Знайти добуток позитивних елементів.
console.log(`Protuct of positive numbers: ${product(positiveNums)}`);

//Знайти найбільший серед елементів масиву, інші обнулити.
arr.forEach(function (number, index) {
    arr[index] = number === maxNumber ? number : 0;
});

console.log(arr);