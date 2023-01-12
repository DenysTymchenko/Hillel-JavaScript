//Functions
function createPresents(presentsLinks, colors) {
    const presents = [];

    presentsLinks.forEach(function (link, index) {
        presents.push(new Present(link, colors[index]));
    })

    return presents;
}

function renderPresentsArray(presentsArr) {
    const result = presentsArr
        .map(function (present) {
            return present.renderPresent();
        })
        .join('');

    return result;
}



//Classes
class CongratulationsCard {
    constructor(wishes) {
        this.wishes = wishes;
    }

    renderCard() {
        return `
            <div class="main__card">
                <p>${this.wishes}</p>

                <img class="main__pin-img main__pin-img_left" src="images/pin.png" alt="pin image">
                <img class="main__pin-img main__pin-img_right" src="images/pin.png" alt="pin image">
            </div>
        `
    }
}

class Present {
    constructor(present, boxColor) {
        this.present = present;
        this.boxColor = boxColor;
    }

    renderPresent() {
        return `
            <a class="main__a" href="${this.present}">
                <img class="main__present-img" src="images/present_${this.boxColor}.png" alt="present box">
            </a>
        `
    }
}



//Arrays
const presentsLinks = [
    'images/offer.png',
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
    'images/cat.jpg'
];

const colors = [
    'red',
    'green',
    'blue'
]



WISH = "Congratulations, everyone! Happy New Year! This year was really tough, hard, and complicated for everyone, but I think everyting that is happening in our life - is done for better. In addition to wishes, I have also prepared gifts for you! You can choose any gift box you like, or take all of them, if you're really greedy."
const card = new CongratulationsCard(WISH);

document.write(`
    <section class="main">
        ${card.renderCard()}

        <div class="main__presents">
            ${renderPresentsArray(createPresents(presentsLinks, colors))}
        </div>
    </section>
`)