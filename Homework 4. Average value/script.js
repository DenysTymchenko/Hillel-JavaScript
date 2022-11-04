getNumber1 = parseInt(prompt("Enter first number below"))
getNumber2 = parseInt(prompt("Enter second number below"))
getNumber3 = parseInt(prompt("Enter third number below"))

sum = getNumber1 + getNumber2 + getNumber3
avg = (sum / 3).toFixed(2);

alert(`Average value of your numbers is ${avg}`)