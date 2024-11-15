const products = [
  {
    id: 0,
    name: "Caravan Dolphin",
    price: 1000,
    rating: 5,
    category: "Fuzzy",
    img: {
      url: "assets/caravan_dolphin.png",
      width: 750,
      height: 918,
      alt: "kommer sen",
    },
  },

  {
    id: 1,
    name: "Captain",
    price: 1500,
    rating: 5,
    category: "Fuzzy",
    img: {
      url: "assets/no_one_is_captain_but_you.png",
      width: 1000,
      height: 707,
      alt: "kommer sen",
    },
  },

  {
    id: 2,
    name: "In the Jungle",
    price: 800,
    rating: 3.5,
    category: "Normal",
    img: {
      url: "assets/djungle_2.png",
      width: 1000,
      height: 707,
      alt: "kommer sen",
    },
  },

  {
    id: 3,
    name: "FlyIsland",
    price: 1700,
    rating: 4.5,
    category: "Normal",
    img: {
      url: "assets/flysland.png",
      width: 950,
      height: 1284,
      alt: "kommersen",
    },
  },

  {
    id: 4,
    name: "My greek mytology",
    price: 1200,
    rating: 5,
    category: "Poetiskt",
    img: {
      url: "assets/greek_mytology.png",
      width: 891,
      height: 1260,
      alt: "kommer sen",
    },
  },

  {
    id: 5,
    name: "Hundred Acre Woods",
    price: 1000,
    rating: 4,
    category: "Disney",
    img: {
      url: "assets/hundred_acre_woods.png",
      width: 1000,
      height: 707,
      alt: "kommer sen",
    },
  },

  {
    id: 6,
    name: "Colored toughts",
    price: 2000,
    rating: 4.5,
    category: "Fuzzy",
    img: {
      url: "assets/lighthead.png",
      width: 1060,
      height: 1500,
      alt: "kommer sen",
    },
  },

  {
    id: 7,
    name: "Invisible mermaid",
    price: 900,
    rating: 2.5,
    category: "Disney",
    img: {
      url: "assets/little_mermaid.png",
      width: 1000,
      height: 707,
      alt: "kommer sen",
    },
  },

  {
    id: 8,
    name: "Milo and Titch",
    price: 1500,
    rating: 3,
    category: "Disney",
    img: {
      url: "assets/milo_and_titch.png",
      width: 1000,
      height: 707,
      alt: "kommer senare",
    },
  },

  {
    id: 0,
    name: "Ted in Africa",
    price: 1200,
    rating: 4,
    category: "Fuzzy",
    img: {
      url: "assets/ted.png",
      width: 800,
      height: 1000,
      alt: "kommer senare",
    },
  },
];

// Skriver ut produkterna i html dokumentet
const productListSection = document.querySelector("#productList");

products.forEach((product) => {
  productListSection.innerHTML += `
    <figure class="product">
        <img src="${product.img.url}">
        
        <figcaption>${product.name}</figcaption>
        <div>${product.price} kr</div>
        <div>${product.rating}</div>
        
     </figure>
    `;
});
