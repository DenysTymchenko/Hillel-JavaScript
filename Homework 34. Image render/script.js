function generateNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

function gerRandomImg() {

}


const body = document.querySelector('body');
const imgContainer = document.createElement('div');
imgContainer.classList.add('img-container');

for (let i = 1; i <= 9; i++) {
    const img = document.createElement('img');
    //setInterval(() => img.setAttribute('src', `images/${generateNumber(9, 1)}.jpg`), 1500);
    img.setAttribute('src', `images/${generateNumber(9, 1)}.jpg`);
    img.setAttribute('width', '300px')
    img.setAttribute('height', '300px')

    imgContainer.append(img);
}

body.append(imgContainer);