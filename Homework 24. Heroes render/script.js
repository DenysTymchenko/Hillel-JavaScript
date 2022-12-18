let marvelHeroes = [
    {
        name: "Thor"
    },
    {
        name: "Spider Man"
    },
    {
        name: "Deadpool"
    }
];

let dcHeroes = [
    {
        name: "Superman"
    },
    {
        name: "Batman"
    }
];

Array.prototype.heroesRender = function (folder) {
    const card = this
        .map(function (obj) {
            const img = `${obj.name.toLowerCase().replace(' ', '')}.svg`;

            return `
            <div class="hero-cards_card">
                <h3 class="hero-cards_card-title">${obj.name}</h3>
                <img class="hero-cards_card-img" src="images/${folder}/${img}" alt="${obj.name} img">
            </div>
            `
        })
        .join('');

    return card;
}

document.write(`
    <section class="hero-cards">
        <h2 class="hero-cards_title">Marvel superheroes</h2>
        
        <div class="hero-cards_wrapper">
            ${marvelHeroes.heroesRender('marvel')}
        </div>
    </section>

    <section class="hero-cards">
        <h2 class="hero-cards_title">DC superheroes</h2>

        <div class="hero-cards_wrapper">
            ${dcHeroes.heroesRender('dc')}
        </div>
    </section>
`);