rightRainbow = ['Richard', 'Of', 'York', 'Gave', 'Battle', 'In', 'Vain'];

hero = ['Ivan'];
native = ['York', 'Of'];
destination = ['Poltava', 'In'];


rainbow = hero.concat(native, destination);
rainbow = rainbow.reverse();


//adding values of needed words, that are not inside of rainbow array
for (i = 0; i < rightRainbow.length; i++) {
    if (rainbow.indexOf(rightRainbow[i]) === -1) {
        rainbow.push(rightRainbow[i]);
    }
}


//removing values of unneeded words from rainbow array
for (i = 0; i < rainbow.length; i++) {
    if (rightRainbow.indexOf(rainbow[i]) === -1) {
        rainbow.splice(i, 1);
    }
}

//putting values in a right place
for (i = 0; i < rainbow.length; i++) {
    if (rainbow[i] !== rightRainbow[i]) {
        temp = rainbow[i];
        rainbow[i] = rightRainbow[i];
        rainbow[rightRainbow.indexOf(temp)] = temp;
    }
}


//Colors have the same indexes as words (in rainbow array)
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

//adding word, and circle with the color of it's word on top.
for (i = 0; i < rainbow.length; i++) {
    document.write(`
        <div class = "wrapper">
            <div class = "circle" style ="background-color: ${colors[i]}"></div>
            <p>${rainbow[i]}</p>
        </div>
    `)
}