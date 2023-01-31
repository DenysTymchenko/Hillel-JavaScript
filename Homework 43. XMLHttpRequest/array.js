const children = [];

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

function addToStorage(arr) {
    arr.map(item => children.push(item));
    console.log(children);
}

getData('json/data1.json', addToStorage);
getData('json/data2.json', addToStorage);