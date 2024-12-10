'use strict';

const cartBtn = document.querySelector('#cartBtn');

const cartSection = document.querySelector('#cartSection');

const canvasListSection = document.querySelector('#canvasList');

const canvas = [
  {
    id: 0,
    name: 'Caravan Dolphin',
    price: 1000,
    amount: 0,
    rating: 5,
    category: 'Fuzzy',
    img: {
      url: 'assets/caravan_dolphin.png',
      width: 750,
      height: 918,
      alt: 'Porträtt av en delfin i solnedgången som drar en van under vattnet vars tak består av en mini ö.',
    },
  },

  {
    id: 1,
    name: 'Captain',
    price: 1500,
    amount: 0,
    rating: 5,
    category: 'Fuzzy',
    img: {
      url: 'assets/no_one_is_captain_but_you.png',
      width: 1000,
      height: 707,
      alt: 'Landskapsbild av två sträckgubbar vars huvud består av ett hjärta och en hjärna. De vandrar på en väg hand i hand som sedan går skilda riktningar. ',
    },
  },

  {
    id: 2,
    name: 'In the Jungle',
    price: 800,
    amount: 0,
    rating: 3.5,
    category: 'Normal',
    img: {
      url: 'assets/djungle_2.png',
      width: 1000,
      height: 707,
      alt: 'Landskapsbild av olika djungeldjur i en djungel',
    },
  },

  {
    id: 3,
    name: 'FlyIsland',
    price: 1700,
    amount: 0,
    rating: 4.5,
    category: 'Normal',
    img: {
      url: 'assets/flysland.png',
      width: 950,
      height: 1284,
      alt: 'Porträtt av en svävande ö med en blå molnig himmel. På ön finns ett träd, en parkbänk och ett vattenfall',
    },
  },

  {
    id: 4,
    name: 'My greek mytology',
    price: 1200,
    amount: 0,
    rating: 5,
    category: 'Poetiskt',
    img: {
      url: 'assets/greek_mytology.png',
      width: 891,
      height: 1260,
      alt: 'Porträtt av en staty i form av en ung kvinnas kropp. Från halsen växer det ut 5 olika slags blommor.',
    },
  },

  {
    id: 5,
    name: 'Hundred Acre Woods',
    price: 1000,
    amount: 0,
    rating: 4,
    category: 'Disney',
    img: {
      url: 'assets/hundred_acre_woods.png',
      width: 1000,
      height: 707,
      alt: 'Landskapsbild av Nalle Puh och hans vänner på ett rave i Sjumilaskogen. ',
    },
  },

  {
    id: 6,
    name: 'Colored toughts',
    price: 2000,
    amount: 0,
    rating: 4.5,
    category: 'Fuzzy',
    img: {
      url: 'assets/lighthead.png',
      width: 1060,
      height: 1500,
      alt: 'Porträtt av en halvkroppskvinna med rosa t-shirt vars huvud är ersatt med en stor glödlampa. Inuti glödlampan finns en färgexplosion i form av en hjärna',
    },
  },

  {
    id: 7,
    name: 'Invisible mermaid',
    price: 900,
    amount: 0,
    rating: 2.5,
    category: 'Disney',
    img: {
      url: 'assets/little_mermaid.png',
      width: 1000,
      height: 707,
      alt: 'Landskapsbild av ett badrum vars utsikt från fönstrerna är under vattenytan och på botten finns lilla sjöjunfrun. ',
    },
  },

  {
    id: 8,
    name: 'Milo and Titch',
    price: 1500,
    amount: 0,
    rating: 3,
    category: 'Disney',
    img: {
      url: 'assets/milo_and_titch.png',
      width: 1000,
      height: 707,
      alt: 'Landskapsbild av Lilo och Stitch som firar Stich födelsedag på semester med deras van vid havet',
    },
  },

  {
    id: 0,
    name: 'Ted in Africa',
    price: 1200,
    amount: 0,
    rating: 4,
    category: 'Fuzzy',
    img: {
      url: 'assets/ted.png',
      width: 800,
      height: 1000,
      alt: 'Porträtt av en Nallebjörn som sitter på en sten efter att han har hittat magiska svampar i skogen.',
    },
  },
];

const totalCartOrderSum = document.querySelector('#cartContainer');

const additionalTotalCartOrderSum = document.querySelector('#additionolCartContainer');

const liveUpdatedPrice = document.querySelector('#liveUpdatedPrice');

const today = new Date();
const itsMonday = today.getDay() === 1;
const itsFriday = today.getDay() === 5;
const itsSaturday = today.getDay() === 6;
const itsSunday = today.getDay() === 0;
const currentHour = today.getHours();

let orderedCanvasAmount = 0;
let canvasTotalPriceSum = 0;
let shippingSum = 0;
let totalShippingAndOrderSum = 0;

//------------------------------------------------------------------------------------------------
//------------------------- Cart in header -------------------------------------------------------
//------------------------------------------------------------------------------------------------

//----------Click event at cartBtn----------------

cartBtn.addEventListener('click', handleClick);

function handleClick(e) {
  cartSection.classList.toggle('cartSectionOpen');
}

//-------------------Animation for updating price in Cart--------------------------

function updateCartPriceinHeaderEffect() {
  liveUpdatedPrice.classList.add('update_effect');

  setTimeout(removeUpdateEffect, 1000);
}

function removeUpdateEffect() {
  liveUpdatedPrice.classList.remove('update_effect');
}

//------------------------------------------------------------------------------------------------
//------------------------Products & Print products to cart and cartSum --------------------------
//------------------------------------------------------------------------------------------------

//---------- Print products to cart -------------------------

function printTotalCartOrderSum() {
  const today = new Date();

  let htmlString = '';
  let sum = 0;
  let message = '';
  let priceIncrease = getPriceMultiplier();

  orderedCanvasAmount = 0;

  totalCartOrderSum.innerHTML = '';
  canvas.forEach((canvas) => {
    orderedCanvasAmount += canvas.amount;

    if (canvas.amount > 0) {
      let canvasPrice = canvas.price;

      if (canvas.amount >= 10) {
        canvasPrice *= 0.9;
      }
      const adjustedCanvasPrice = Math.round(canvasPrice * priceIncrease);
      sum += canvas.amount * adjustedCanvasPrice;
      htmlString += `
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

  canvasTotalPriceSum = Math.round(sum);
  shippingSum = Math.round(25 + 0.1 * sum);
  totalShippingAndOrderSum = canvasTotalPriceSum + shippingSum;

  totalCartOrderSum.innerHTML = htmlString;
  additionalTotalCartOrderSum.innerHTML = htmlString;

  //------------ Monday 10% discount ----------------------
  if (sum <= 0) {
    return;
  }

  if (today.getDay() === 1) {
    sum *= 0.9;
    message += '<p>Måndagsrabatt: 10% på hela beställningen</p>';
    canvas.price * canvas.amount;
  }

  // ---------------------- Free delivery when ordered 15+ products ---------------

  if (orderedCanvasAmount > 15) {
    shippingSum = 0;
  }

  // ------------ Shipping ---------------------

  totalCartOrderSum.innerHTML += `<span class="cartOrderSumTotalPrice">Frakt: ${shippingSum} kr</span>`;
  additionalTotalCartOrderSum.innerHTML += `<span class="cartOrderSumTotalPrice">Frakt: ${shippingSum} kr</span>`;

  // ------------------- Total sum of order ------------------

  totalCartOrderSum.innerHTML += `<span class="cartOrderSumTotalPrice">Totalt: ${Math.round(sum)} kr</span>`;
  totalCartOrderSum.innerHTML += `<div>${message}</div>`;

  additionalTotalCartOrderSum.innerHTML += `<span class="cartOrderSumTotalPrice">Totalt: ${Math.round(sum)} kr</span>`;

  // ------- live update sum in cart in header -----------------------

  liveUpdatedPrice.innerHTML = `<span>${Math.round(sum)} kr</span>`;

  updateCartPriceinHeaderEffect();
}

printTotalCartOrderSum();

//------------------------Special rule------------------------

function getPriceMultiplier() {
  if ((itsFriday && currentHour >= 15) || itsSaturday || itsSunday || (itsMonday && currentHour <= 3)) {
    return 1.15;
  } return 1;
}

//-------------Increase and Decrease -----------------------

function decreaseAmount(e) {
  const index = e.currentTarget.dataset.id;

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

//------- Print Array to HTML stored in const canvas---------------

let filteredCanvas = [...canvas]; // Copy of original array

function printCanvas() {
  let priceIncrease = getPriceMultiplier();

  canvasListSection.innerHTML = '';
  filteredCanvas.forEach((canvas, index) => {
    const adjustedCanvasPrice = Math.round(canvas.price * priceIncrease);
    canvasListSection.innerHTML += `
      <figure class="canvas-class">
          <img src="${canvas.img.url}" alt="${canvas.img.alt}>
          <div class="canvas-wrapper">
          <figcaption class="canvas_name">${canvas.name}</figcaption>
          <div class="canvas_price">${adjustedCanvasPrice} kr</div>
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

  //--------Click event for minus and plus btns ----------------

  const minusBtns = document.querySelectorAll('button.minus');
  const plusBtns = document.querySelectorAll('button.plus');

  minusBtns.forEach((btn) => {
    btn.addEventListener('click', decreaseAmount);
  });

  plusBtns.forEach((btn) => {
    btn.addEventListener('click', increaseAmount);
  });

  printTotalCartOrderSum();
}

printCanvas();

//-------------------- Added rating stars --------------------------

function canvasRating(rating) {
  const halfRating = !Number.isInteger(rating);

  let html = '';

  for (let i = 0; i < Math.floor(rating); i++) {
    html += `<span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m233-120 93-304L80-600h304l96-320 96 320h304L634-424l93 304-247-188-247 188Z"/></svg></span>`;
  }
  if (halfRating) {
    html += `<span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m606-286-33-144 111-96-146-13-58-136v312l126 77ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg></span>`;
  } return html;
}

//------------------------------------------------------------------------------------------------
//-------------------------Sorting products in Array ---------------------------------------------
//------------------------------------------------------------------------------------------------

const sortByNameBtn = document.querySelector('#sortByNameBtn');

const sortByCategorySelectAll = document.querySelector('#sortByCategorySelectAll');
const sortByCategorySelectDisney = document.querySelector('#sortByCategorySelectDisney');
const sortByCategorySelectNormal = document.querySelector('#sortByCategorySelectNormal');
const sortByCategorySelectPoetic = document.querySelector('#sortByCategorySelectPoetic');
const sortByCategorySelectFuzzy = document.querySelector('#sortByCategorySelectFuzzy');

const priceRangeSlider = document.querySelector('#priceRange');
const currentRangeValue = document.querySelector('#currentRangeValue');

const sortByRatingBtn = document.querySelector('#sortByRatingBtn');

//---------- Sort products by name -------------------------

sortByNameBtn.addEventListener('click', handleSortbyNameClick);

function handleSortbyNameClick(e) {
  filteredCanvas.sort((canvas1, canvas2) => {
    return canvas1.name === canvas2.name ? 0 : canvas1.name < canvas2.name ? -1 : 1;
  });

  printCanvas();
}

//---------- Sort products by category -------------------------

sortByCategorySelectAll.addEventListener('click', handleSortByCategorySelectAll);

function handleSortByCategorySelectAll(e) {
  filteredCanvas = [...canvas];

  printCanvas();
}

sortByCategorySelectDisney.addEventListener('click', handleSortByCategorySelectDisney);

function handleSortByCategorySelectDisney() {
  filteredCanvas = canvas.filter((canvas) => canvas.category === 'Disney');

  printCanvas();
}

sortByCategorySelectNormal.addEventListener('click', handleSortByCategorySelectNormal);

function handleSortByCategorySelectNormal(e) {
  filteredCanvas = canvas.filter((canvas) => canvas.category === 'Normal');

  printCanvas();
}

sortByCategorySelectPoetic.addEventListener('click', handleSortByCategorySelectPoetic);

function handleSortByCategorySelectPoetic(e) {
  filteredCanvas = canvas.filter((canvas) => canvas.category === 'Poetiskt');

  printCanvas();
}

sortByCategorySelectFuzzy.addEventListener('click', handleSortByCategorySelectFuzzy);

function handleSortByCategorySelectFuzzy(e) {
  filteredCanvas = canvas.filter((canvas) => canvas.category === 'Fuzzy');

  printCanvas();
}

//---------- Sort products by rating -------------------------

sortByRatingBtn.addEventListener('click', handleSortbyRatingClick);

function handleSortbyRatingClick(e) {
  filteredCanvas.sort((canvas1, canvas2) => {
    return canvas2.rating - canvas1.rating;
  });

  printCanvas();
}

//---------- Sort products by price -------------------------

priceRangeSlider.addEventListener('input', changePriceRange);

function changePriceRange() {
  const currentPrice = priceRangeSlider.value;

  currentRangeValue.innerHTML = currentPrice;
  filteredCanvas = canvas.filter((canvas) => canvas.price <= currentPrice);

  printCanvas();
}

//------------------------------------------------------------------------------------------------
//-------------------------Form and Payments -------------
//------------------------------------------------------------------------------------------------

const cardInvoiceRadios = Array.from(document.querySelectorAll('input[name="payment_option"]'));

const inputs = [
  document.querySelector('#creditCardNumber'),
  document.querySelector('#creditCardYear'),
  document.querySelector('#creditCardMonth'),
  document.querySelector('#creditCardCvc'),
  document.querySelector('#personalId'),
  document.querySelector('#firstName'),
  document.querySelector('#lastName'),
  document.querySelector('#adress'),
  document.querySelector('#zipCode'),
  document.querySelector('#city'),
  document.querySelector('#phoneNumber'),
  document.querySelector('#email'),
];

const invoiceRadio = document.querySelector('#invoice');
const cardRadio = document.querySelector('#card');
const formSubmitBtn = document.querySelector('#formSubmitBtn');

const phoneNumberError = document.querySelector('#phoneNumberError');
const starfieldError = document.querySelector('#starFieldError');
const emailError = document.querySelector('#emailError');

const orderForm = document.querySelector('#orderForm');
const resetFormBtn = document.querySelector('#formResetBtn');

const buyBtn = document.querySelector('#buyBtn');

let selectedPaymentOption = 'card';

let slownessTimeout = setTimeout(cleanFormAndTimeOutMessage, 1000 * 60 * 15);

//---------- Regex -------------------------

const emailRegEx = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

const phoneNumberRegEx = new RegExp(/^((([+]46)\s*((1|7)[0236]))|(0(1|7)[0236]))\s*(([-]|())\s*[0-9]\s*[0-9]\s*[0-9]\s*[0-9]\s*[0-9]\s*[0-9]\s*[0-9]\s*|([0-9]\s*([-]|()))\s*[0-9]\s*[0-9]\s*[0-9]\s*[0-9]\s*[0-9]\s*[0-9]\s*)$/);

const personalIdRegex = new RegExp(/^(\d{10}|\d{12}|\d{6}-\d{4}|\d{8}-\d{4}|\d{8} \d{4}|\d{6} \d{4})/);

const creditCardNumberRegEx = new RegExp(/^(5[1-5][0-9]{2}(?=[\s|-])|\d{4}(?=[\s|-])?\d{4}(?=[\s|-])?\d{4}(?=[\s|-])?\d{1,4}(?!\d))$/);

// ------------------Eventlisteners-----------------------

inputs.forEach((input) => {
  input.addEventListener('focusout', activateFormOrderBtn);
  input.addEventListener('change', activateFormOrderBtn);
});

cardInvoiceRadios.forEach((radioBtn) => {
  radioBtn.addEventListener('change', switchPaymentMethod);
});

//---------- Toggle invoice/card -------------------------

function switchPaymentMethod(e) {
  if (canvasTotalPriceSum > 8000) {
    invoiceRadio.innerHTML = `<b>Det går inte att betala med faktura då totalsumman överstiger 8000kr</b>`; // I chose 8000kr instead of 800 since I have high prices.
  }

  invoiceRadio.classList.toggle('hidden');
  cardRadio.classList.toggle('hidden');
  selectedPaymentOption = e.target.value;
  console.log(selectedPaymentOption);
}

function checkIfPersonalIdNumberIsValid() {
  return personalIdRegex.exec(personalId.value);
}

//---------- Aktiverar/inaktiverar disabled på Submit knapp innan/efter kriterier uppfylls -------------------------

function activateFormOrderBtn() {
  formSubmitBtn.setAttribute('disabled', '');

  const today = new Date();
  const shortYear = Number(String(today.getFullYear()).substring(2));
  let year = Number(creditCardYear.value);

  if (!zipCode.value || !city.value || !firstName.value || !lastName.value || !adress.value) {
    starfieldError.innerHTML = `<span class="error_messages error_message_starfield">Du har inte fyllt i alla obligatoriska fält korrekt. Vänligen fyll i alla fält som innehåller en *</span>`;
    return;
  } else {
    starfieldError.innerHTML = '';
  }

  if (phoneNumberRegEx.exec(phoneNumber.value) === null) {
    phoneNumberError.innerHTML = `<span class="error_messages">Ogiltigt telefonnummer</span>`;
    return;
  } else {
    phoneNumberError.innerHTML = ``;
  }

  if (emailRegEx.exec(email.value) === null) {
    emailError.innerHTML = `<span class="error_messages">Ogiltig emailadress</span>`;
    return;
  } else {
    emailError.innerHTML = ``;
  }

  if (
    selectedPaymentOption === 'invoice' && !checkIfPersonalIdNumberIsValid()) {
    return;
  }

  if (selectedPaymentOption === 'card') {
    if (creditCardNumberRegEx.exec(creditCardNumber.value) === null) {
      return;
    }

    if (year > shortYear + 2 || year < shortYear) {
      return;
    }

    if (creditCardMonth.value < 1 || creditCardMonth.value > 12) {
      return;
    }

    if (creditCardCvc.value.length !== 3) {
      return;
    }
  }

  formSubmitBtn.removeAttribute('disabled');
}

//----------------------- Scroll from buyBtn to Form ------------------------------

buyBtn.addEventListener('click', scrollToView);

function scrollToView() {
  orderForm.scrollIntoView({ behavior: 'smooth' });
}

//----------------------Reset form after 15 minutes alert ----------------------

function cleanFormAndTimeOutMessage() {
  if (slownessTimeout) {
    orderForm.reset();
    alert(
      'Det tog för lång tid för dig att beställa, därmed har vi rensat formuläret!'
    );
  }
}

// ---------------- Reset form when click at reset form Btn --------------

resetFormBtn.addEventListener('click', resetFormAndCanvasAmount);

function resetFormAndCanvasAmount() {
  orderForm.reset();
  canvas.forEach((canvas) => {
    canvas.amount = 0;
  });
  liveUpdatedPrice.innerHTML = 0;

  printTotalCartOrderSum();
  printCanvas();
}

// ---------- Order-confirmation ------------------

formSubmitBtn.addEventListener('click', sendOrderForm);

function sendOrderForm(e) {
  e.preventDefault();

  const today = new Date();
  const deliveryDate = new Date(today);
  const formattedDeliveryDate = deliveryDate.toLocaleDateString('sv-SE');
  const orderConfirmation = document.querySelector('#orderConfirmation');

  deliveryDate.setDate(deliveryDate.getDate() + 5);

  orderConfirmation.innerHTML = `
  <h3>Tack för att du handlar hos oss!</h3>
  <p>Totalbelopp: <b>${totalShippingAndOrderSum} kr</b></p>
  <p>Beräknad leveransdatum är: <b>${formattedDeliveryDate}</b> </p>
  `;
}
