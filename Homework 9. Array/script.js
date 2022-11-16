arr = [];

do {
    getArrayLength = prompt("Please, enter length of your array");
}
while (!(getArrayLength > 0));

for (i = 0; i < getArrayLength; i++) {
    do {
        getArrayValue = parseInt(prompt(`Please, enter value for array with index ${i}`));
    }
    while (isNaN(getArrayValue));

    arr[i] = getArrayValue;
}

document.write(`<h1>Your original array is [${arr}]</h1>`);

for (i = 0; i < getArrayLength; i++) {
    for (j = i + 1; j < getArrayLength; j++) {
        if (arr[i] > arr[j]) {
            temp = arr[j];

            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
}

document.write(`<h2>Your sorted array is [${arr}]</h2>`);

if (arr.length >= 4) {
    arr.splice(1, 3);
    document.write(`<h2>Your array without 2nd, 3rd, and 4rh elements is [${arr}]</h2>`)
}