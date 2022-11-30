function findArrItemsSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

function transformToNumbersArray(arr) {
    const numbersArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            numbersArr.push(arr[i]);
        }
    }

    return numbersArr;
}

function findBiggerArray(arr1, arr2) {
    const sum1 = findArrItemsSum(transformToNumbersArray(arr1));
    const sum2 = findArrItemsSum(transformToNumbersArray(arr2));

    if (sum1 > sum2) {
        return arr1;
    }
    else if (sum1 < sum2) {
        return arr2;
    }
    else {
        return 'Both arrays have the same sum'
    }
}

const arr_1 = ['dasd', undefined, 2, 3, 4, [1, 2, 3]];
const arr_2 = ['dasd', undefined, 2, 1, 4, [1, 2, 3]];

console.log(findBiggerArray(arr_1, arr_2));