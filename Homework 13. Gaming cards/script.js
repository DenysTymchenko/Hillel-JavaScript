numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

persons = ['J', 'Q', 'K'];
personsImg = ['jack', 'queen', 'king'];

suits = ['clubs', 'spades', 'diamonds', 'hearts'];

//* cards array will be used for cards rendering
cards = [];

//adding html code of cards with numbers, into cards array
for (i = 0; i < numbers.length; i++) {
    for (j = 0; j < suits.length; j++) {
        cards.push(`
        <div class="card">
        <div class="card__info">
            ${numbers[i]}
            <img src="images/${suits[j]}.svg" alt="${suits[j]}">
        </div>

        <div class="card__info">
            ${numbers[i]}
            <img src="images/${suits[j]}.svg" alt="${suits[j]}">
        </div>
        </div>
        `);
    }
}

//adding html code of cards with persons, into cards array
for (i = 0; i < persons.length; i++) {
    for (j = 0; j < suits.length; j++) {
        cards.push(`
        <div class="card card--person">
        <div class="card__info">
            ${persons[i]}
            <img src="images/${suits[j]}.svg" alt="${suits[j]}">
        </div>

        <img class="person" src="images/${personsImg[i]}.svg" alt="${suits[j]}">

        <div class="card__info">
            ${persons[i]}
            <img src="images/${suits[j]}.svg" alt="${suits[j]}">
        </div>
        </div>
        `);
    }
}

//adding html code of ace cards, into cards array
for (i = 0; i < suits.length; i++) {
    cards.push(`
    <div class="card card--person">
    <div class="card__info">
        T 
        <img src="images/${suits[i]}.svg" alt="${suits[i]}">
    </div>

    <img class="person" src="images/${suits[i]}.svg" alt="${suits[i]}">

    <div class="card__info">
        T 
        <img src="images/${suits[i]}.svg" alt="${suits[i]}">
    </div>
    </div>
    `);
}

//finally render our html code
document.write(`
    <div class="wrapper">
        ${cards.join('')}
    </div>
`);