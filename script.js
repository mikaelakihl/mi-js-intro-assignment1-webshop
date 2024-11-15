const products = [

    {
        id: 0,
        name: 'Product 0',
        price: 1000,
        rating: 4,
        category: 'Disney',
        img: { 
            url: 'assets/caravan_dolphin.png',
            width: 750, 
            height: 918,
            alt: 'kommer sen',
         },

    },

    {
        id: 1,
        name: 'Product 1',
        price: 1000,
        rating: 4,
        category: 'Fuzzy',
        img: {
            url: 'assets/no_one_is_captain_but_you.png',
            width: 1000,
            height: 707,
            alt: 'kommer sen',
        },

    },

    {
        id: 2,
        name: 'Product 2',
        price: 1000,
        rating: 4,
        category: 'Normal',
        img: {
            url: 'assets/djungle_2.png',
            width: 1000,
            height: 707,
            alt: 'kommer sen',
        },

    },

    {
        id: 3,
        name: 'Product 3',
        price: 1000,
        rating: 4,
        category: 'Disney',
        img: {
            url: 'assets/flysland.png',
            width: 950,
            height: 1284,
            alt: 'kommersen',
        },

    },

    {
        id: 4,
        name: 'Product 4',
        price: 1000,
        rating: 4,
        category: 'Normal',
        img: {
            url: 'assets/greek_mytology.png',
            width: 891,
            height: 1260,
            alt: 'kommer sen',
        },

    },

    {
        id: 5,
        name: 'Product 5',
        price: 1000,
        rating: 4,
        category: 'Disney',
        img: {
            url: 'assets/hundred_acre_woods.png',
            width: 1000,
            height: 707,
            alt: 'kommer sen',
        },

    },

    {
        id: 6,
        name: 'Product 6',
        price: 1000,
        rating: 4,
        category: 'Disney',
        img: {
            url: 'lighthead.png',
            width: 1060,
            height: 1500,
            alt: 'kommer sen',
        },

    },

    {
        id: 7,
        name: 'Product 7',
        price: 1000,
        rating: 4,
        category: 'Disney',
        img: {
            url: 'assets/little_mermaid.png',
            width: 1000,
            height: 707,
            alt: 'kommer sen',
        },

    },

    {
        id: 8,
        name: 'Product 8',
        price: 1000,
        rating: 4,
        category: 'Disney',
        img: {
            url: 'assets/milo_and_titch.png', 
            width: 1000,
            height: 707,
            alt: 'kommer senare',
        },

    },

    {
        id: 0,
        name: 'Product 0',
        price: 1000,
        rating: 4,
        category: 'Disney',
        img: {
            url: 'assets/ted.png',
            width: 800,
            height: 1000,
            alt: 'kommer senare',
        },

    },


];


// Skriver ut produkterna i html dokumentet
const productListSection = document.querySelector('#productList');

products.forEach(product => {
    productListSection.innerHTML+= `
    <figure class="product">
        <img src="${product.img.url}">
        <figcaption>${product.name}</figcaption>
    </figure>
    <div class="product">
    <div>${product.price} kr</div>
    <div>${product.rating}</div>
    `;
});

