result = 0;

do {
    getOperation = prompt("Enter what operation you want to you want to perform:\n+ - / *");
    isRightOperation = getOperation === "+" || getOperation === "-" || getOperation === "/" || getOperation === "*";

    if (!isRightOperation) {
        alert("Entered operation is wrong!");
    }
}
while (!isRightOperation);

do {
    getOperandsAmount = parseInt(prompt("Enter how many operand you want to use (from 1 to 7)"));
    isRightAmount = getOperandsAmount >= 1 && getOperandsAmount <= 7;

    if (!isRightAmount) {
        alert("Number of operands must be from 1 to 7")
    }
}
while (!isRightAmount);

switch (getOperation) {
    case "+":
        for (i = 1; i <= getOperandsAmount; i++) {
            do {
                num = parseInt(prompt(`Enter ${i} number below`));
            }
            while (isNaN(num));

            result += num;
        }

        break;

    case "-":
        for (i = 1; i <= getOperandsAmount; i++) {
            do {
                num = parseInt(prompt(`Enter ${i} number below`))
            }
            while (isNaN(num));

            if (i === 1) {
                result = num;
            }
            else {
                result -= num;
            }
        }

        break;

    case "/":
        for (i = 1; i <= getOperandsAmount; i++) {
            do {
                num = parseInt(prompt(`Enter ${i} number below`))

                if (num === 0) {
                    alert("You can't divide by 0!!!\nTry again")
                }
            }
            while (num === 0 || isNaN(num));

            if (i === 1) {
                result = num;
            }
            else {
                result /= num;
            }
        }

        break;

    case "*":
        result = 1;

        for (i = 1; i <= getOperandsAmount; i++) {
            do {
                num = parseInt(prompt(`Enter ${i} number below`))
            }
            while (isNaN(num));

            result *= num;
        }

        break;
}

alert(`Your final result is ${result}`);