"use strict";

const cartBtn = document.querySelector("#cartBtn");

const cartSection = document.querySelector("#cartSection");

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
      alt: "Porträtt av en delfin i solnedgången som drar en van under vattnet vars tak består av en mini ö.",
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
      alt: "Landskapsbild av två sträckgubbar vars huvud består av ett hjärta och en hjärna. De vandrar på en väg hand i hand som sedan går skilda riktningar. ",
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
      alt: "Landskapsbild av olika djungeldjur i en djungel",
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
      alt: "Porträtt av en svävande ö med en blå molnig himmel. På ön finns ett träd, en parkbänk och ett vattenfall",
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
      alt: "Porträtt av en staty i form av en ung kvinnas kropp. Från halsen växer det ut 5 olika slags blommor.",
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
      alt: "Landskapsbild av Nalle Puh och hans vänner på ett rave i Sjumilaskogen. ",
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
      alt: "Porträtt av en halvkroppskvinna med rosa t-shirt vars huvud är ersatt med en stor glödlampa. Inuti glödlampan finns en färgexplosion i form av en hjärna",
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
      alt: "Landskapsbild av ett badrum vars utsikt från fönstrerna är under vattenytan och på botten finns lilla sjöjunfrun. ",
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
      alt: "Landskapsbild av Lilo och Stitch som firar Stich födelsedag på semester med deras van vid havet",
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
      alt: "Porträtt av en Nallebjörn som sitter på en sten efter att han har hittat magiska svampar i skogen.",
    },
  },
];

const totalCartOrderSum = document.querySelector("#cartContainer");
console.log("totalCartOrderSum");

const additionalTotalCartOrderSum = document.querySelector(
  "#additionolCartContainer"
);

const liveUpdatedPrice = document.querySelector("#liveUpdatedPrice");

const today = new Date();

const itsMonday = today.getDay() === 1;
const itsFriday = today.getDay() === 5;
const itsSaturday = today.getDay() === 6;
const itsSunday = today.getDay() === 0;
const currentHour = today.getHours();

let slownessTimeout = setTimeout(cleanFormAndTimeOutMessage, 1000 * 60 * 15);

//////////////////////////////////////////////Header//////////////////////////////////////////

//Lägger till clickevent på varukorgens knapp

cartBtn.addEventListener("click", handleClick);

function handleClick(e) {
  cartSection.classList.toggle("cartSectionOpen");
}

function canvasRating(rating) {
  const halfRating = !Number.isInteger(rating); //Kollar om den är ett heltal för annars blir betyget fel vid 4.5
  let html = "";
  for (let i = 0; i < Math.floor(rating); i++) {
    html += `<span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m233-120 93-304L80-600h304l96-320 96 320h304L634-424l93 304-247-188-247 188Z"/></svg></span>`;
  }
  if (halfRating) {
    html += `<span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m606-286-33-144 111-96-146-13-58-136v312l126 77ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg></span>`;
  }
  return html;
}

//------------------------------------------------------------------------------------------------
//-------------------------Skriver ut produkterna i varukorg & varusammanställningen -------------
//------------------------------------------------------------------------------------------------

//---------- Varukorgen -------------------------

function printTotalCartOrderSum() {
  totalCartOrderSum.innerHTML = "";

  let sum = 0;
  let orderedCanvasAmount = 0;
  let message = "";
  let priceIncrease = getPriceMultiplier();

  canvas.forEach((canvas) => {
    orderedCanvasAmount += canvas.amount;

    if (canvas.amount > 0) {
      let canvasPrice = canvas.price;
      if (canvas.amount >= 10) {
        canvasPrice *= 0.9;
      }
      const adjustedCanvasPrice = Math.round(canvasPrice * priceIncrease);
      sum += canvas.amount * adjustedCanvasPrice;
      totalCartOrderSum.innerHTML += `
      <article class="cartOrderSumContainer">
      <img class="cartOrderSumImg" src="${canvas.img.url}">
      <div class="cartOrderSumWrapper">
        <span>${canvas.name}</span> 
        <span>${canvas.amount} st </span> 
        <span>${canvas.amount * adjustedCanvasPrice} kr </span>
        </div>
        <hr class="cartOrderSumLine" width="100%" size="2" noshade>
      </article>
      
      `;
    }
  });

  if (sum <= 0) {
    return;
  }

  if (today.getDay() === 1) {
    sum *= 0.9;
    message += "<p>Måndagsrabatt: 10% på hela beställningen</p>";
    canvas.price * canvas.amount;
  }

  // X På måndagar innan kl. 10 ges 10 % rabatt på hela beställningssumman. Detta visas i varukorgssammanställningen som en rad med texten "Måndagsrabatt: 10 % på hela beställningen".
  // X På fredagar efter kl. 15 och fram till natten mellan söndag och måndag kl. 03.00 tillkommer ett helgpåslag på 15 % på alla munkar. Detta ska inte framgå för kunden att munkarna är dyrare, utan priset ska bara vara högre i "utskriften" av munkarna.
  // X Om kunden har beställt minst 10 munkar av samma sort, ska munkpriset för just denna munksort rabatteras med 10 %
  // X Om kunden beställer totalt mer än 15 munkar så blir frakten gratis. I annat fall är fraktsumman 25 kr plus 10% av totalbeloppet i varukorgen.
  console.log(printTotalCartOrderSum);

  totalCartOrderSum.innerHTML += `<span class="cartOrderSumTotalPrice">Totalt: ${Math.round(sum)} kr</span>`; //Skriver ut totalsumman av antalet
  totalCartOrderSum.innerHTML += `<div>${message}</div>`;

  if (orderedCanvasAmount > 15) {  // Om kunden beställer totalt mer än 15
    totalCartOrderSum.innerHTML += `<span class="cartOrderSumTotalPrice">Frakt ${0} kr</span>`;  //så blir frakten gratis

  } else {
    totalCartOrderSum.innerHTML += `<span class="cartOrderSumTotalPrice">Frakt ${Math.round(25 + (0.1 * sum))} kr</span>`; //I annat fall är fraktsumman 25 kr plus 10% av totalbeloppet i varukorgen.

  }



}

printTotalCartOrderSum();

//----------------------Återställer formuläret efter 15 min ----------------------

function cleanFormAndTimeOutMessage(){
  const orderForm = document.querySelector('#orderForm')
  if (slownessTimeout){
    orderForm.reset();
    alert('Det tog för lång tid för dig att beställa, därmed har vi rensat formuläret!');
  }
  
  
}

// -----------------Varukorgsammanställningen----------------------------  🦄 JENNI: Feedback på detta, se diskussion i Teams.  Är medveten om att detta är upprepad kod som man säkert kan göra på ett smidigare sätt, men jag vet inte hur jag gör med det än så länge.

function additionalPrintTotalCartOrderSum() {
  additionalTotalCartOrderSum.innerHTML = "";

  let sum = 0;
  let message = "";

  canvas.forEach((canvas) => {
    if (canvas.amount > 0) {
      sum += canvas.amount * canvas.price;
      additionalTotalCartOrderSum.innerHTML += `
     <article class="cartOrderSumContainer">
      <img class="cartOrderSumImg" src="${canvas.img.url}">
      <div class="cartOrderSumWrapper">
        <span>${canvas.name}</span> 
        <span>${canvas.amount} st </span> 
        <span>${canvas.price} kr </span> 
        </div>
        <hr class="cartOrderSumLine" width="100%" size="2" noshade>
      </article>
   
      `;
    }
  });

  console.log(additionalPrintTotalCartOrderSum);

  additionalTotalCartOrderSum.innerHTML += `<span class="cartOrderSumTotalPrice">${sum} kr</span>`;
}

additionalPrintTotalCartOrderSum();

///////////////////////////////////Main/////////////////////////////////////////////////////

//Lägger till funktionen som gör att man kan höja/sänka antalet via minus och plus knapparna

function decreaseAmount(e) {
  const index = e.currentTarget.dataset.id;
  //Lägger till så att det inte går att minska antalet lägre än 0
  if (filteredCanvas[index].amount <= 0) {
    filteredCanvas[index].amount = 0;
  } else {
    filteredCanvas[index].amount -= 1;
  }
  printCanvas();
}

function increaseAmount(e) {
  const index = e.currentTarget.dataset.id;
  filteredCanvas[index].amount += 1;
  printCanvas();
}

function getPriceMultiplier() {
  if (
    (itsFriday && currentHour >= 15) ||
    itsSaturday ||
    itsSunday ||
    (itsMonday && currentHour <= 3)
  ) {
    return 1.15;
  }
  return 1;
}

//Skriver ut arrayen till HTML som är lagrad i const Canvas

let filteredCanvas = [...canvas]; // skapar kopia av originalarray

function printCanvas() {
  canvasListSection.innerHTML = "";

  let priceIncrease = getPriceMultiplier();

  filteredCanvas.forEach((canvas, index) => {
    const adjustedCanvasPrice = Math.round(canvas.price * priceIncrease);
    canvasListSection.innerHTML += `
      <figure class="canvas-class">
          <img src="${canvas.img.url}">
          <div class="canvas-wrapper">
          <figcaption>${canvas.name}</figcaption>
          <div>${adjustedCanvasPrice} kr</div>
          <div>${canvasRating(canvas.rating)}</div>
          <div class="pmBtnsContainer pm_btns_container">
            <button class="minus" data-id="${index}">-</button>
            <div>${canvas.amount}</div>
            <button class="plus" data-id="${index}">+</button>
          </div>
          </div>
       </figure>
      `;
  });

  const minusBtns = document.querySelectorAll("button.minus");
  const plusBtns = document.querySelectorAll("button.plus");

  //Lägger till clickevent för plus och minus knappar

  minusBtns.forEach((btn) => {
    btn.addEventListener("click", decreaseAmount);
  });

  plusBtns.forEach((btn) => {
    btn.addEventListener("click", increaseAmount);
  });

  printTotalCartOrderSum();
  additionalPrintTotalCartOrderSum();
}

printCanvas();

//------------------------------------------------------------------------------------------------
//-------------------------Sorterar produkter i array -------------
//------------------------------------------------------------------------------------------------

const sortByNameBtn = document.querySelector("#sortByNameBtn");

const sortByCategorySelectAll = document.querySelector(
  "#sortByCategorySelectAll"
);

const sortByCategorySelectDisney = document.querySelector(
  "#sortByCategorySelectDisney"
);

const sortByCategorySelectNormal = document.querySelector(
  "#sortByCategorySelectNormal"
);

const sortByCategorySelectPoetic = document.querySelector(
  "#sortByCategorySelectPoetic"
);

const sortByCategorySelectFuzzy = document.querySelector(
  "#sortByCategorySelectFuzzy"
);

//---------- Sorterar produkter via namn -------------------------

sortByNameBtn.addEventListener("click", handleSortbyNameClick);

function handleSortbyNameClick(e) {
  filteredCanvas.sort((canvas1, canvas2) => {
    // return canvas1.name > canvas2.name;

    return canvas1.name === canvas2.name
      ? 0
      : canvas1.name < canvas2.name
        ? -1
        : 1;
  });

  printCanvas();
}

//---------- Sorterar produkter via kategori -------------------------  TOOO DOOOO: göra om koden så den fungerar i chrome

sortByCategorySelectAll.addEventListener(
  "click",
  handleSortByCategorySelectAll
);

function handleSortByCategorySelectAll(e) {
  // filteredCanvas.sort((canvas1, canvas2) => {
  //   return canvas1.category > canvas2.category;
  // });

  filteredCanvas = [...canvas];

  printCanvas();
}

sortByCategorySelectDisney.addEventListener(
  "click",
  handleSortByCategorySelectDisney
);

function handleSortByCategorySelectDisney() {
  filteredCanvas = canvas.filter((canvas) => canvas.category === "Disney");

  printCanvas();
}

sortByCategorySelectNormal.addEventListener(
  "click",
  handleSortByCategorySelectNormal
);

function handleSortByCategorySelectNormal(e) {
  filteredCanvas = canvas.filter((canvas) => canvas.category === "Normal");

  printCanvas();
}

sortByCategorySelectPoetic.addEventListener(
  "click",
  handleSortByCategorySelectPoetic
);

function handleSortByCategorySelectPoetic(e) {
  filteredCanvas = canvas.filter((canvas) => canvas.category === "Poetiskt");

  printCanvas();
}

sortByCategorySelectFuzzy.addEventListener(
  "click",
  handleSortByCategorySelectFuzzy
);

function handleSortByCategorySelectFuzzy(e) {
  filteredCanvas = canvas.filter((canvas) => canvas.category === "Fuzzy");

  printCanvas();
}

//---------- Sorterar produkter via betyg -------------------------

const sortByRatingBtn = document.querySelector("#sortByRatingBtn");

sortByRatingBtn.addEventListener("click", handleSortbyRatingClick);

function handleSortbyRatingClick(e) {
  filteredCanvas.sort((canvas1, canvas2) => {
    return canvas2.rating - canvas1.rating;

    // return canvas1.rating === canvas2.rating ? 0 : canvas1.rating < canvas2.rating ? -1 : 1;
  });

  printCanvas();
}

//---------- Sorterar produkter via pris -------------------------

const priceRangeSlider = document.querySelector("#priceRange");
const currentRangeValue = document.querySelector("#currentRangeValue");

priceRangeSlider.addEventListener("input", changePriceRange);

function changePriceRange() {
  const currentPrice = priceRangeSlider.value;
  currentRangeValue.innerHTML = currentPrice;

  filteredCanvas = canvas.filter((canvas) => canvas.price <= currentPrice);

  printCanvas();
}

//------------------------------------------------------------------------------------------------
//-------------------------Validera formulärfält -------------
//------------------------------------------------------------------------------------------------

let inputAdressError = document.querySelector('#inputAdressError');

let inputAdress = document.querySelector('#inputAdress').value;
let inputZipCode = document.querySelector('#inputZipCode').value;
let inputCity = document.querySelector('#inputCity').value;
let inputPhonenumber = document.querySelector('#inputPhonenumber').value;
let inputEmail = document.querySelector('#inputEmail').value;


function validateAdress (){
  if(inputAdress.length === 0) {
    inputAdressError.innerHTML = '*';
    console.warn('Adressfältet är tomt');
    return false;
  }
  AdressError.innerHTML = '<i>*</i>';
  console.warn('Adress är validerad och godkänd');
  return true;
}

function validateEmail(){

}

//------------------------------------------------------------------------------------------------
//-------------------------Kort och faktura betalning -------------
//------------------------------------------------------------------------------------------------

const cardInvoiceRadios = Array.from(
  document.querySelectorAll('input[name="payment_option"]')
);
console.log(cardInvoiceRadios);


const inputs = [
  document.querySelector("#creditCardNumber"),
  document.querySelector("#creditCardYear"),
  document.querySelector("#creditCardMonth"),
  document.querySelector("#creditCardCvc"),
  document.querySelector("#personalId"),
];

const invoiceRadio = document.querySelector("#invoice");
const cardRadio = document.querySelector("#card");
const formSubmitBtn = document.querySelector("#formSubmitBtn");

let selectedPaymentOption = "invoice";

//---------- Regex -------------------------

const emailRegEx = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

const personalIdRegex = new RegExp(
  /^(\d{10}|\d{12}|\d{6}-\d{4}|\d{8}-\d{4}|\d{8} \d{4}|\d{6} \d{4})/
);
const creditCardNumberRegEx = new RegExp(
  /^(5[1-5][0-9]{2}(?=[\s|-])|\d{4}(?=[\s|-])?\d{4}(?=[\s|-])?\d{4}(?=[\s|-])?\d{1,4}(?!\d))$/
); // Mastercard

// ------------------Event lyssnare-----------------------

inputs.forEach((input) => {
  input.addEventListener("focusout", activateFormOrderBtn);
  input.addEventListener("change", activateFormOrderBtn);
});

cardInvoiceRadios.forEach((radioBtn) => {
  radioBtn.addEventListener("change", switchPaymentMethod);
});

//---------- Togglar mellan kort och faktura -------------------------

function switchPaymentMethod(e) {
  invoiceRadio.classList.toggle("hidden");
  cardRadio.classList.toggle("hidden");
  selectedPaymentOption = e.target.value;
  console.log(selectedPaymentOption);
}

function checkIfPersonalIdNumberIsValid() {
  return personalIdRegex.exec(personalId.value);
}

//---------- Aktiverar/inaktiverar disabled på Submit knapp innan/efter kriterier uppfylls -------------------------

function activateFormOrderBtn() {
  formSubmitBtn.setAttribute("disabled", "");

  if (
    selectedPaymentOption === "invoice" &&
    !checkIfPersonalIdNumberIsValid()
  ) {
    return;
  }

  if (selectedPaymentOption === "card") {
    // -------- Kollar kortnummer--------
    if (creditCardNumberRegEx.exec(creditCardNumber.value) === null) {
      console.warn("kreditkortet är inte validerat");
      return;
    }
    //--------- Kollar kort årtal-----
    let year = Number(creditCardYear.value);
    const today = new Date();
    const shortYear = Number(String(today.getFullYear()).substring(2));
    if (year > shortYear + 2 || year < shortYear) {
      console.warn("Månad är inte validerad");
      return;
    }

    // TODO: Lägga till månad, obs "padStart" med 0

    //----- Kollar CVC kod--------

    if (creditCardCvc.value.length !== 3) {
      console.warn("CVC är inta validerad");
      return;
    }
  }

  formSubmitBtn.removeAttribute("disabled");
}



// // cardInvoiceBtns.forEach(paymentOptionbtns => {
// //   paymentOptionbtns.addEventListener('change',switchPaymentMethod);
// // });

// // function switchPaymentMethod(){
// //   console.log('test');
// }

// const formPaymentOptionsInvoice = document.querySelector(
//   "#formPaymentOptionsInvoice"
// );
// const formPaymentOptionsCard = document.querySelector(
//   "#formPaymentOptionsCard"
// );

// console.log(
//   invoiceRadio,
//   cardRadio,
//   formPaymentOptionsCard,
//   formPaymentOptionsInvoice
// );

// invoiceBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   formPaymentOptionsInvoice.classList.remove("invoice_hidden");
//   formPaymentOptionsCard.classList.add("card_hidden");
//   console.log(e);
// });

// cardBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   formPaymentOptionsCard.classList.remove("card_hidden");
//   formPaymentOptionsInvoice.classList.add("invoice_hidden");
// });

// function checkPersonalIdNumber() {
//   const checkPersonalIdNumberResult = personalIdRegex.exec(personalId.value);
//   if (checkPersonalIdNumberResult === null) {
//     console.log("personal Id is not valid");
//     return;
//   }

//   console.log(checkPersonalIdNumberResult);
// }
