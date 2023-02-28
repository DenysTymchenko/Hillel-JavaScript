import { Calculator } from "./calculator/calculator.js";

const calculator = new Calculator();

console.log(calculator.sum(10, 10)); //20
console.log(calculator.sub(10, 10)); //0
console.log(calculator.mult(10, 10)); //100
console.log(calculator.div(10, 10)); //1
console.log(calculator.div(10, 0)); //You can't divide by 0
