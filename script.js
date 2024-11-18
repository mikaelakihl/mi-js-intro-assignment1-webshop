'use strict';

const cartBtn = document.querySelector('#cartBtn');

const cartSection = document.querySelector('#cartSection');

const canvasListSection = document.querySelector("#canvasList");

const canvas = [
  {
    id: 0,
    name: "Caravan Dolphin",
    price: 1000,
    amount: 0,
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
    amount: 0,
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
    amount: 0,
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
    amount: 0,
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
    amount: 0,
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
    amount: 0,
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
    amount: 0,
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
    amount: 0,
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
    amount: 0,
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
    amount: 0,
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

//Lägger till funktionen som gör att man kan höja/sänka antalet via minus och plus knapparna

function decreaseAmount(e) {
  const index = e.currentTarget.dataset.id;
  //Lägger till så att det inte går att minska antalet lägre än 0
  if (canvas[index].amount >= 0) {
    canvas[index].amount = 0;
  } else { canvas[index].amount -= 1;
  }
  printCanvas();
}

function increaseAmount(e) {
  const index = e.currentTarget.dataset.id;
  canvas[index].amount += 1;
  printCanvas();
}

//Skriver ut arrayen till HTML som är lagrad i const Canvas

function printCanvas() {
  canvasListSection.innerHTML = '';

  canvas.forEach((canvas, index) => {
    canvasListSection.innerHTML += `
      <figure class="canvas-class">
          <img src="${canvas.img.url}">
          <figcaption>${canvas.name} ${index}</figcaption>
          <div>${canvas.price} kr</div>
          <div>${canvas.rating}</div>
          <div class="pmBtnsContainer">
          <button class="minus" data-id="${index}">-</button>
          <div>${canvas.amount}</div>
          <button class="plus" data-id="${index}">+</button>
          </div>
       </figure>
      `;
  });

  const minusBtns = document.querySelectorAll('button.minus');
  const plusBtns = document.querySelectorAll('button.plus');

 //Lägger till clickevent för plus och minus knappar

 minusBtns.forEach(btn => {
  btn.addEventListener('click', decreaseAmount);
 });

 plusBtns.forEach(btn => {
  btn.addEventListener('click', increaseAmount);
 });

}

printCanvas();

//Lägger till clickevent på varukorgens knapp

cartBtn.addEventListener('click', handleClick);

function handleClick(e){
  cartSection.classList.toggle('cartSectionOpen');
  
}
  


