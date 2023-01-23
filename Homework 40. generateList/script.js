arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3]], 5];

function generateList(arr) {
    const ul = document.createElement('ul');

    arr.forEach(item => {
        const li = document.createElement('li');
        Array.isArray(item) ? li.append(generateList(item)) : li.innerText = item;
        ul.append(li);
    });

    return ul;
}

document.querySelector('body').append(generateList(arr));