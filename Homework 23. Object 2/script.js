function assignObjects(obj1, obj2) {
    const assignedObj = obj1;

    for (let key in obj2) {
        assignedObj[key] = obj2[key];
    }

    return assignedObj
};

const obj1 = {
    x: 10
};

const obj2 = {
    x: 20,
    y: 30
};

const obj3 = assignObjects(obj1, obj2);

console.log(obj3);
