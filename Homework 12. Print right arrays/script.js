sports = [
    ['skier', '⛷'],
    ['snowboarder', '🏂'],
    ['apple', '🍎'],
    ['hockey', '🏒'],
    ['ice skate', '⛸'],
    ['swimmer', '🏊'],
    ['surfer', '🏄‍'],
    ['watermelon', '🍉'],
    ['lemon', '🍋'],
    ['rowboat', '🚣'],
    ['bicyclist', '🚴‍']
];

summer_sports = [];
summer_sports.push(sports[5].slice(), sports[6].slice(), sports[9].slice(), sports[10].slice());

winter_sports = [];
winter_sports.push(sports[0].slice(), sports[1].slice(), sports[3].slice(), sports[4].slice());

fruits = [];

//Checking values from sports array, that are not in winter__sports and summer__sports.
//If value not in any of 2 arrays - we push it in fruits array.
for (i = 0; i < sports.length; i++) {
    valueExist = false

    for (j = 0; j < winter_sports.length; j++) {
        if (sports[i].indexOf(winter_sports[j][0]) > -1 || sports[i].indexOf(summer_sports[j][0]) > -1) {
            valueExist = true;
            break;
        }
    }

    if (!valueExist) {
        fruits.push(sports[i]);
    }
}

console.log('*** Winter sports ***');
for (i = 0; i < winter_sports.length; i++) {
    console.log(winter_sports[i].join(':'));
}
console.log('\n');

console.log('*** Summer sports ***');
for (i = 0; i < summer_sports.length; i++) {
    console.log(summer_sports[i].join(':'));
}
console.log('\n');

console.log('*** Fruits ***');
for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i].join(':'));
}