//__________________Classes______________________
class Hero {
    constructor(id, name, universe, favorite) {
        this._id = id;
        this._name = name;
        this._universe = universe;
        this._favorite = favorite;

        heroes.push(this); //We pushinng every new Hero instance inside of heroes array, so we could get access to it, in future.
    }

    // getters
    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get universe() {
        return this._universe;
    }

    get favorite() {
        return this._favorite;
    }

    // setters
    set favorite(value) {
        this._favorite = value;
        controller('PUT', `heroes/${this.id}`, { favorite: this._favorite }); //every time user changes value of  favorite, we need to change it on server. 
    }

    //methods
    render() {
        const divCard = document.createElement('div');
        const h3Name = document.createElement('h3');
        const h3Universe = document.createElement('h3');
        const divFavorite = document.createElement('h3');
        const h3Favorite = document.createElement('h3');
        const buttonFavorite = document.createElement('h3');
        const imgFavorite = document.createElement('img');
        const buttonDelete = document.createElement('button');

        h3Name.innerText = `Name: ${this._name}`;
        h3Universe.innerText = `Universe: ${this._universe}`;
        h3Favorite.innerText = 'Favorite:';
        buttonDelete.innerText = 'Delete';

        divCard.classList.add('hero-card');
        divFavorite.classList.add('wrapper');
        buttonFavorite.classList.add('favorite-btn');
        imgFavorite.classList.add('favorite-img');
        buttonDelete.classList.add('delete-btn');

        buttonFavorite.setAttribute('favorite', `${this._favorite}`);

        imgFavorite.alt = 'star img';
        this._favorite === 'true' ? imgFavorite.src = 'images/favorite.png' : imgFavorite.src = 'images/not-favorite.png';

        buttonFavorite.addEventListener('click', () => {
            const favoriteValue = buttonFavorite.getAttribute('favorite');
            changeFavorite(favoriteValue, buttonFavorite, imgFavorite, this);
        });

        buttonDelete.addEventListener('click', () => {
            sectionHeroesCards.removeChild(divCard);
            this.delete();
        });

        buttonFavorite.append(imgFavorite);
        divFavorite.append(h3Favorite);
        divFavorite.append(buttonFavorite);

        divCard.append(h3Name);
        divCard.append(h3Universe);
        divCard.append(divFavorite);
        divCard.append(buttonDelete);

        sectionHeroesCards.prepend(divCard);
    }

    delete() {
        //if user decided to delete Hero instance, then we need to delete it from:
        heroes.splice(heroes.indexOf(this), 1); //heroes array, so ids for new instances could generate correctly,
        controller('DELETE', `heroes/${this._id}`);//and database
    }
}

//________________________FUNCTIONS_______________________________

async function controller(method, action, body) {
    const URL = `${API}/${action}`;

    const params = {
        method,
        headers: {
            'Content-Type': "application/json"
        },
    };
    if (body) params.body = JSON.stringify(body);

    const response = await fetch(URL, params);
    const data = await response.json();

    return data;
}

async function setUniverses() {
    const universes = await controller('GET', 'universes');//we get all universes from our db.

    //then creating <option> with each universe value, and append it to selectUniverse.
    universes.forEach(universe => {
        const option = document.createElement('option');
        option.value = universe.name;
        option.innerText = universe.name;

        selectUniverse.append(option);
    })
}

function changeFavorite(favoriteValue, button, img, hero) {
    //1. We need to change button's favorite attribute, so we could get access to it's value, for future using of changeFavorite().
    //2. We need to change img src, so user could see, that he really did smth.
    //3. If Hero class instance was given as an argument, then we need to change value of it's favorite field.
    if (favoriteValue === 'false') {
        button.setAttribute('favorite', 'true');
        img.src = 'images/favorite.png';
        if (hero) hero.favorite = true;
    } else {
        button.setAttribute('favorite', 'false');
        img.src = 'images/not-favorite.png';
        if (hero) hero.favorite = false;
    }
}

async function getHeroesFromDB() {
    const heroesFromDB = await controller('GET', 'heroes');//first we getting array with all heroes objects, that contains inside db. 

    heroesFromDB.forEach(heroFromDB => {
        const { id, name, universe, favorite } = heroFromDB; //then we destructurize all values from every hero obj.
        new Hero(id, name, universe, favorite);//and create Hero instances with them.
    });

    renderHeroes(); //after we done, we can render heroes cards.
}

function renderHeroes() {
    //All Hero instances are pushed to heroes array, when crated.
    //That's mean we could call render() method for every Hero instance, which render a card with hero information.
    heroes.forEach(hero => hero.render());
}

function addNewHero(id, name, universe, favorite) {
    controller('POST', 'heroes', { //creating new hero obj in db.
        name: name,
        universe: universe,
        favorite: favorite
    })

    new Hero(id, name, universe, favorite).render(); //also creating new instance of Hero, and render it.
}

//__________________________________________MAIN_CODE_________________________________________________

const API = 'https://63ef5f59271439b7fe6d10b5.mockapi.io';

const heroes = []; //this is an array, which will be used as a container with all Hero class instances.

//*Form elements
const formAddHero = document.querySelector('.add-hero-form');
const inputHeroName = document.getElementById('hero_name');
const selectUniverse = document.getElementById('universe');
const buttonFavorite = document.querySelector('.favorite-btn');
const buttonAddHero = document.querySelector('.add-hero-btn');
const pError = document.querySelector('.error'); //this is a <p> with error msg inside of it. It have 'display: none' property by default, and will be shown on;y if user creating hero, that exists already.

//*Cards
const sectionHeroesCards = document.querySelector('.heroes-cards');//sections where all hero cards, created by user, will be pushed.

//*EventListeners
formAddHero.addEventListener('submit', e => {
    e.preventDefault();
})

buttonFavorite.addEventListener('click', () => {
    //When user clicks buttonFavorite it must change img inside of it, depending on favorite attribute value
    const favoriteValue = buttonFavorite.getAttribute('favorite');
    const img = buttonFavorite.querySelector('img');

    changeFavorite(favoriteValue, buttonFavorite, img);
})

buttonAddHero.addEventListener('click', () => {
    const id = heroes.length === 0 ? 1 : +heroes[heroes.length - 1].id + 1;
    const name = inputHeroName.value;
    const universe = selectUniverse.value;
    const favorite = buttonFavorite.getAttribute('favorite');

    heroExists = () => heroes.some(hero => hero.name === name && hero.universe === universe);

    if (heroExists()) {
        pError.classList.remove('d-none'); //If hero, that user trying to add, is already exists, then we need to remove 'display: none' property from pError.
    } else {
        pError.classList.add('d-none'); //And make otherwise, if there is no hero like that.
        addNewHero(id, name, universe, favorite);
    }
})

setUniverses(); //we need to fill selectUniverse with universe options, on page's opening.
getHeroesFromDB();//we also need to show all heroes cards, if those exists, on page's opening.
