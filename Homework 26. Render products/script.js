function createTr(category, objArr) {
    const tr = objArr
        .map(function (product) {
            return new Product(category, product.type, product.price);
        })
        .map(function (product) {
            return product.render();
        })
        .join('');

    return tr;
}

function Product(category, type, price) {
    this.category = category;
    this.type = type;
    this.price = price;
    this.render = function () {
        return `
            <tr>
                <td><img src="images/${this.category}/${this.type}.svg" alt="grater" width="50" height="50"></td>
                <td>${this.type}</td>
                <td>${this.price} USD</td>
            </tr>
        `
    }
}

let kitchenProducts = [
    {
        type: 'grater',
        price: 10
    },
    {
        type: 'pastry-bag',
        price: 25
    },
    {
        type: 'scale',
        price: 5
    },
    {
        type: 'whisk',
        price: 15
    }
];

let devicesProducts = [
    {
        type: 'desktop',
        price: [100, 1000]
    },
    {
        type: 'laptop',
        price: [50, 1500]
    },
    {
        type: 'smartphone',
        price: [80, 2000]
    },
    {
        type: 'tablet',
        price: [20, 1300]
    }
];

let cosmeticsProducts = [
    {
        type: 'blush',
        price: 100
    },
    {
        type: 'eyeshadow',
        price: 50
    },
    {
        type: 'lipstick',
        price: 80
    },
    {
        type: 'nail-polish',
        price: 200
    },
    {
        type: 'perfume',
        price: 300,
    }
];

document.write(`
    <table>
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            ${createTr('kitchen', kitchenProducts)}
            ${createTr('devices', devicesProducts)}
            ${createTr('cosmetics', cosmeticsProducts)}
        </tbody>
    </table>
`)