document.querySelector('button').addEventListener("click", e => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        birthday: document.getElementById('birthday').value,
        gender: document.querySelector('input[name="gender"]:checked').id,
        city: document.getElementById('city').value,
        address: document.getElementById('address').value,
        languages: [...document.querySelectorAll('input[type="checkbox"]:checked')].map(language => { return language.id }).join(', ')
    };

    document.querySelector('form').remove();
    renderTableFromData(formData);
})


function renderTableFromData(data) {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    for (const key in data) {
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        const td = document.createElement('td');

        th.innerText = key;
        td.innerText = data[key];

        tr.append(th);
        tr.append(td);

        tbody.append(tr);
    }

    table.append(tbody);
    document.querySelector('body').append(table);
}