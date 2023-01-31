function getData(file1, file2, callback) {
    const xml = new XMLHttpRequest();
    xml.open('GET', file1);
    xml.send();
    xml.addEventListener('readystatechange', () => {
        if (xml.readyState === 4 && xml.status === 200) {
            const response = JSON.parse(xml.response).children;

            const innerXml = new XMLHttpRequest();
            innerXml.open('GET', file2);
            innerXml.send();
            innerXml.addEventListener('readystatechange', () => {
                if (innerXml.readyState === 4 && innerXml.status === 200) {
                    const innerResponce = JSON.parse(innerXml.response).children;
                    callback(response, innerResponce);
                }
            });
        }
    });
}

function showConcatedArr(arr1, arr2) {
    console.log([...arr1, ...arr2]);
}

getData('json/data1.json', 'json/data2.json', showConcatedArr);