localStorage.clear();

function getData(file, callback) {
    const xml = new XMLHttpRequest();
    xml.open('GET', file);
    xml.send();
    xml.addEventListener('readystatechange', () => {
        if (xml.readyState === 4 && xml.status === 200) {
            const response = JSON.parse(xml.response).children;
            callback(response);
        }
    });
}

function addToStorage(data) {
    localStorage.children ? localStorage.setItem('children', localStorage.children + ',' + data) : localStorage.setItem('children', data);
    console.log(localStorage.children);
}

getData('json/data1.json', addToStorage);
getData('json/data2.json', addToStorage);