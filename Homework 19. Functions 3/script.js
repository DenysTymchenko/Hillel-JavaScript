function copy(list, fun) {
    const newList = [];
    for (let i = 0; i < list.length; i++) {
        if (typeof (fun) === 'function') {
            fun(list[i]);
        }
        newList.push(list[i])
    }
    return newList;
}

function logIntoConsole(value) {
    console.log(value);
}

const list = [1, 2, 3, [4, 5, 6], 'a'];

const newList = copy(list, function (value) { return value * 10; }); // => [1, 2, 3, [4, 5, 6], 'a'];
const a = copy(list, logIntoConsole); // => [1, 2, 3, [4, 5, 6], 'a'] and console.log of every item;
const b = copy(newList); // => [1, 2, 3, [4, 5, 6], 'a'];
const c = copy([2, 3, 4]); // => 2,3,4;