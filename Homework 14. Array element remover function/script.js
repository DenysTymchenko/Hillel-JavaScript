function removeElement(array, item) {
    index = array.indexOf(item);
    array.splice(index, 1);
}

arr = ['a', 'b', 'c', 'k', 'd'];
removeElement(arr, 'k');
console.log(arr);