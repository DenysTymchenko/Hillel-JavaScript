sum = 0;

do {
    getNum1 = parseInt(prompt("Enter first number (must be greater or equal to 0)"));
    getNum2 = parseInt(prompt("Enter second number (must be greater than the first number)"));
    isRightPrompts = getNum1 >= 0 && getNum2 > getNum1

    if (!isRightPrompts) {
        alert(`Oops... Something went wrong :(
            \nRemember that first number must be less than the second, and all the numbers mustn't be less than 0.
            \nNow try again`)
    }
}
while (!isRightPrompts);

do {
    getStep = parseInt(prompt("Enter step for the cycle"));
    isRightStep = getStep > 0;
}
while (!isRightStep);

for (getNum1; getNum1 <= getNum2; getNum1 += getStep) {
    factorial = 1;

    for (j = getNum1; j >= 1; j--) {
        factorial *= j;
    }

    sum += factorial;
}

alert(`Sum of factorials is ${sum}`);