function createSumFunction() {
    let result = 0;
    return function returnSum(number) {
        return result += number;
    }
}

let sum = createSumFunction();

console.log(sum(3)); //=> 3
console.log(sum(5)); //=> 8
console.log(sum(20)); //=> 28