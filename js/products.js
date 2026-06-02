/* ==========================
   PRODUCT DATA
========================== */

const products = [

  {
    name: "ပုဇွန်ခြောက်",
    image: "images/products/pouzun.jpg",
    prices: [
      "၁ ပိသာ - 45,000 ကျပ်",
      "၃ ပိသာ - 130,000 ကျပ်"
    ]
  },

  {
    name: "ငါးခြောက်",
    image: "images/products/nga.jpg",
    prices: [
      "၁ ပိသာ - 18,000 ကျပ်",
      "၃ ပိသာ - 50,000 ကျပ်"
    ]
  },

  {
    name: "ငပိ",
    image: "images/products/ngapi.jpg",
    prices: [
      "၁ ဘူး - 8,000 ကျပ်",
      "၃ ဘူး - 22,000 ကျပ်"
    ]
  },

  {
    name: "ကဏန်းခြောက်",
    image: "images/products/crab.jpg",
    prices: [
      "၁ ပိသာ - 30,000 ကျပ်"
    ]
  },

  {
    name: "ငါးမုန့်ခြောက်",
    image: "images/products/fish-snack.jpg",
    prices: [
      "၁ ထုပ် - 5,000 ကျပ်"
    ]
  }

];


/* ==========================
   RENDER PRODUCTS
========================== */

const productsGrid = document.querySelector(".products-grid");

function renderProducts() {

  if (!productsGrid) return;

  productsGrid.innerHTML = "";

  products.forEach(product => {

    const card = document.createElement("div");

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

