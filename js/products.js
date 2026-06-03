/* ==========================
   PRODUCT DATA
========================== */

const products = [

  {
    name: "ပုဇွန်ခြောက်",
    image: "images/products/pouzun.jpg",
    prices: [
      "၁၀ သား - XXXX ကျပ်",
      "၅၀ သား - XXXX ကျပ်",
      "၁ ပိသာ - XXXX ကျပ်"
    ]
  },

  {
    name: "ငါးခြောက်",
    image: "images/products/nga.jpg",
    prices: [
      "၁၀ သား - XXXX ကျပ်",
      "၅၀ သား - XXXX ကျပ်",
      "၁ ပိသာ - XXXX ကျပ်"
    ]
  },

  {
    name: "မျှင်ငပိ",
    image: "images/products/ngapi.jpg",
    prices: [
      "၁၀ သား - XXXX ကျပ်",
      "၅၀ သား - XXXX ကျပ်",
      "၁ ပိသာ - XXXX ကျပ်"
    ]
  },

  {
    name: "ငပိထောင်း",
    image: "images/products/ngapi-htaung.jpg",
    prices: [
      "၁၀ သား - XXXX ကျပ်",
      "၅၀ သား - XXXX ကျပ်",
      "၁ ပိသာ - XXXX ကျပ်"
    ]
  },

  {
    name: "သီဟိုစေ့",
    image: "images/products/cashew.jpg",
    prices: [
      "၁၀ သား - XXXX ကျပ်",
      "၅၀ သား - XXXX ကျပ်",
      "၁ ပိသာ - XXXX ကျပ်"
    ]
  },

  {
    name: "ရေခူ",
    image: "images/products/jellyfish.jpg",
    prices: [
      "၁၀ သား - XXXX ကျပ်",
      "၅၀ သား - XXXX ကျပ်",
      "၁ ပိသာ - XXXX ကျပ်"
    ]
  },

  {
    name: "ဒူရင်းယို",
    image: "images/products/durian-jam.jpg",
    prices: [
      "၁၀ သား - XXXX ကျပ်",
      "၅၀ သား - XXXX ကျပ်",
      "၁ ပိသာ - XXXX ကျပ်"
    ]
  }

];


/* ==========================
   RENDER PRODUCTS
========================== */

const productsGrid =
  document.querySelector(".products-grid");


function renderProducts() {

  if (!productsGrid) return;

  productsGrid.innerHTML = "";

  products.forEach(product => {

    const card =
      document.createElement("div");

    card.className = "product-card";

    card.innerHTML = `

      <img
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
      >

      <div class="product-info">

        <h3>${product.name}</h3>

        <div class="price-list">

          ${product.prices
            .map(price => `<span>${price}</span>`)
            .join("")}

        </div>

      </div>

    `;

    productsGrid.appendChild(card);

  });

}


/* ==========================
   START
========================== */

document.addEventListener(
  "DOMContentLoaded",
  renderProducts
);
