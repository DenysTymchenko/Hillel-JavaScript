number1 = +prompt("Enter first number below");
number2 = +prompt("Enter second number below");

sum = number1 + number2;
sub = number1 - number2;
mult = number1 * number2;
divis = number1 / number2;

document.write(`
    <h2>fisrt number = ${number1}</h2>
    <h2>second number = ${number2}</h2>
    <h1>Results</h1>
    <h3>${number1} + ${number2} = ${sum}</h3>
    <h3>${number1} - ${number2} = ${sub}</h3>
    <h3>${number1} * ${number2} = ${mult}</h3>
    <h3>${number1} / ${number2} = ${divis}</h3>
`)