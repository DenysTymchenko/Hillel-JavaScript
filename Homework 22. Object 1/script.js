function convert(obj) {
    const convertedObj = {};

    for (let key in obj) {
        if (typeof (obj[key]) === 'object' && !Array.isArray(obj[key])) {
            Object.assign(convertedObj, convert(obj[key]));
        } else {
            convertedObj[key] = obj[key];
        }
    }

    return convertedObj
};

const obj = {
    x: 10,
    y: 20,
    inner: { x: 20, z: 30 },
    foo2: { k: 23, p: 13 }
};

const newObj = convert(obj);

console.log(newObj);