const body = document.querySelector('body');
const table = document.createElement('table');

let number = 1;

for (let i = 0; i < 10; i++) {
    const tr = document.createElement('tr');

    for (let j = 0; j < 10; j++) {
        const td = document.createElement('td');
        td.innerHTML = number;
        tr.append(td);

        number++;
    }

    table.append(tr);
}

body.append(table);