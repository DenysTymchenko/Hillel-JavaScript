const users = [
    ["Kateryna", 26, "Kyiv"],
    ["Manuel", 22, "Wroclaw"],
    ["Bohdan", 30, "Ivano-Frankovsk"],
    ["Oleksii", 31, "Dnipro"],
];
const pets = [
    ["Alisa", "cat", "British", "Kateryna"],
    ["Myshka", "dog", "German", "Oleksii"],
    ["Kapusha", "parrot", "Ara", "Manuel"],
];

function createProfilesCard(users, pets) {
    let render = '';

    users.forEach(function (user) {
        let noMatches = true;
        render += '<div class="profiles__card">';

        pets.forEach(function (pet) {
            if (user[0] === pet[3]) {
                noMatches = false;
                render += '<div class="profiles__profile">' + createUserProfile(user) + createPetProfile(pet) + '</div>' + createPetAd(pet);
            }

            if (noMatches && pet === pets[pets.length - 1]) {
                render += '<div class="profiles__profile profiles__profile_no-pet">' + createUserProfile(user) + '</div>' + createDefaultAd();
            }
        });

        render += '</div>'
    });

    return render;
}

function createUserProfile(user) {
    return `
    <h2 class="profiles__title profiles__title_br20">USER</h2>

    <div class="profiles__user">
        <img class="profiles__user-img" src="images/avatar.jpg" alt="user pfp">

        <div class="profiles__user-info">
                <h3>${user[0]}</h3>
                <h3>age: ${user[1]}</h3>
                <h3>city: ${user[2]}</h3>
        </div>
    </div>
    `
}

function createPetProfile(pet) {
    return `
    <h2 class="profiles__title">PET</h2>

    <div class="profiles__pet"">
        <img class="profiles__pet-img" src="images/pets/${pet[1]}.jpg" alt="pet pfp">

        <div class="profiles__pet-info">
            <h3>${pet[0]}</h3>
            <h3>type: ${pet[1]}</h3>
            <h3>breed: ${pet[2]}</h3>
        </div>
    </div>
    `
}

function createPetAd(pet) {
    return `
    <div class="profiles__ad">
        <h2 class="profiles__ad-title">SPECIAL OFFER</h2>
        <img class="profiles__ad-img" src="images/advertisement/${pet[1]}-food.png" alt="${pet[1]} food image">
        <h3 class="profiles__product">${pet[1]} food</h3>
        <h3 class="profiles__price">9.99$</h3>
        <button class="profiles__buy-btn">BUY</button>
    </div>
    `
}

function createDefaultAd() {
    return `
    <div class="profiles__ad">
        <h2 class="profiles__ad-title">SPECIAL OFFER</h2>
        <img class="profiles__ad-img" src="images/advertisement/generator.png" alt="generator image" style="padding: 25px;">
        <h3 class="profiles__product">Generator</h3>
        <h3 class="profiles__price">999.99$</h3>
        <button class="profiles__buy-btn">BUY</button>
    </div>
    `
}

document.write(`
<section class="profiles">
    ${createProfilesCard(users, pets)}
</section>
`);