//*Name of product, it's price, and img path - all under the same index, but in different arrays. We need that for further code execution.
fruits = ["grapes", "raspberry", "coconut"];
fruitsPrices = [20, 25, 50];
fruitsImgPath = ["images/fruits/grapes.svg", "images/fruits/raspberry.svg", "images/fruits/coconut.svg"];

vegetables = ["cabbage", "avocado", "tomato"];
vegetablesPrices = [8, 30, 10];
vegetablesImgPath = ["images/vegetables/cabbage.svg", "images/vegetables/avocado.svg", "images/vegetables/tomato.svg"];


do {
    getSeason = prompt("Which season you interested in? (summer or winter)");

    if (getSeason !== null) {
        getSeason = getSeason.replaceAll(" ", "").toLowerCase();
    }
}
while (getSeason !== "winter" && getSeason !== "summer");

multiplayer = getSeason === "winter" ? 2 : 0.8;


do {
    getCategory = prompt("Products, from which categoty, are you interested in? (fruits or vegetables)");

    if (getCategory !== null) {
        getCategory = getCategory.replaceAll(" ", "").toLowerCase();
    }
}
while (getCategory !== "fruits" && getCategory !== "vegetables");


//creating a nice looking question string for user.
getProductQuestion = `Choose product from ${getCategory} category: `;
//if getCategory === 'fruits', then we'll add all the values from fruits array to our string. 
//If it's not: we'll add all the values from vegetables array.
getProductQuestion += getCategory === "fruits" ? `${fruits}` : `${vegetables}`;
//I don't like how all of the array values are sticking together, so I did this to unstick them.
getProductQuestion = getProductQuestion.replaceAll(",", ", ")

do {
    getProduct = prompt(`${getProductQuestion}`);

    if (getProduct !== null) {
        getProduct = getProduct.replaceAll(" ", "").toLowerCase();
    }
}
while (fruits.indexOf(getProduct) === -1 && vegetables.indexOf(getProduct) === -1);


//due to the fact that all values ​​are under the same index - now we can easilly assign them ​​to variables.
switch (getCategory) {
    case "fruits":
        index = fruits.indexOf(getProduct);
        imgPath = fruitsImgPath[index];
        price = fruitsPrices[index];
        break;
    case "vegetables":
        index = vegetables.indexOf(getProduct);
        imgPath = vegetablesImgPath[index];
        price = vegetablesPrices[index];
        break;
}


do {
    getAmmount = parseInt(prompt(`Enter ammount of ${getProduct}`));
}
while (isNaN(getAmmount) || getAmmount < 1);

price *= getAmmount * multiplayer;


document.write(`
    <div class="product" align="center">
        <img src="${imgPath}" alt="${getProduct}" width="100" height="100">
        <p>Selected product: <b>${getProduct}</b></p>
        <p>Ammount of ${getProduct}: <b>${getAmmount}</b></p>
        <p>Selected season: <b>${getSeason}</b></p>
        <p>Selected category: <b>${getCategory}</b></p>
        <p>Final sum: <b>${price} UAH</b></p>
    </div>
`);