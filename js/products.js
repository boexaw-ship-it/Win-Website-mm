/* ==========================
   PRODUCT DATA
========================== */

const products = [

  {
    name: "ပုဇွန်ခြောက်",
    images: [
      "images/products/pouzun.jpg",
      "images/products/pouzun-2.jpg",
      "images/products/pouzun-3.jpg"
    ],
    prices: [
      "၁၀ သား - ၁၈၀၀၀ ကျပ်",
      "၅၀ သား - ၉၀၀၀၀ ကျပ်",
      "၁ ပိသာ - ၁၈၀၀၀၀ ကျပ်"
    ]
  },

  {
    name: "ငါးခြောက်",
    images: [
      "images/products/nga.jpg",
      "images/products/nga-2.jpg",
      "images/products/nga-3.jpg"
    ],
    prices: [
      "၁၀ သား - XXXX ကျပ်",
      "၅၀ သား - XXXX ကျပ်",
      "၁ ပိသာ - XXXX ကျပ်"
    ]
  },

  {
    name: "မျှင်ငပိ",
    images: [
      "images/products/ngapi.jpg",
      "images/products/ngapi-2.jpg",
      "images/products/ngapi-3.jpg"
    ],
    prices: [
      "၁၀ သား - XXXX ကျပ်",
      "၅၀ သား - XXXX ကျပ်",
      "၁ ပိသာ - XXXX ကျပ်"
    ]
  },

  {
    name: "ငပိထောင်း",
    images: [
      "images/products/ngapi-htaung.jpg",
      "images/products/ngapi-htaung-2.jpg",
      "images/products/ngapi-htaung-3.jpg"
    ],
    prices: [
      "၁၀ သား - XXXX ကျပ်",
      "၅၀ သား - XXXX ကျပ်",
      "၁ ပိသာ - XXXX ကျပ်"
    ]
  },

  {
    name: "သီဟိုစေ့",
    images: [
      "images/products/cashew.jpg",
      "images/products/cashew-2.jpg",
      "images/products/cashew-3.jpg"
    ],
    prices: [
      "၁၀ သား - XXXX ကျပ်",
      "၅၀ သား - XXXX ကျပ်",
      "၁ ပိသာ - XXXX ကျပ်"
    ]
  },

  {
    name: "ရေခူ",
    images: [
      "images/products/jellyfish.jpg",
      "images/products/jellyfish-2.jpg",
      "images/products/jellyfish-3.jpg"
    ],
    prices: [
      "၁၀ သား - XXXX ကျပ်",
      "၅၀ သား - XXXX ကျပ်",
      "၁ ပိသာ - XXXX ကျပ်"
    ]
  },

  {
    name: "ဒူရင်းယို",
    images: [
      "images/products/durian-jam.jpg",
      "images/products/durian-jam-2.jpg",
      "images/products/durian-jam-3.jpg"
    ],
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

  products.forEach((product, productIndex) => {

    let currentPhoto = 0;

    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `

      <!-- PHOTO SLIDER -->
      <div class="card-photo-wrapper">

        <img
          src="${product.images[0]}"
          alt="${product.name}"
          class="card-photo"
          loading="lazy"
        >

        <!-- Prev / Next -->
        <button
          class="card-prev"
          onclick="changePhoto(${productIndex}, -1)">
          &#10094;
        </button>

        <button
          class="card-next"
          onclick="changePhoto(${productIndex}, 1)">
          &#10095;
        </button>

        <!-- Dots -->
        <div class="card-dots">
          ${product.images.map((_, i) =>
            `<span class="card-dot ${i === 0 ? 'active' : ''}"></span>`
          ).join("")}
        </div>

      </div>

      <!-- NAME FRAME -->
      <div class="product-name-frame">
        <span class="product-name-text">
          ${product.name}
        </span>
      </div>

      <!-- PRICES -->
      <div class="product-info">
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
   CHANGE PHOTO
========================== */

function changePhoto(productIndex, direction) {

  const cards = document.querySelectorAll(".product-card");
  const card  = cards[productIndex];

  const img  = card.querySelector(".card-photo");
  const dots = card.querySelectorAll(".card-dot");

  const total  = products[productIndex].images.length;
  const images = products[productIndex].images;

  // current index
  let current = parseInt(
    card.getAttribute("data-photo") || "0"
  );

  // calculate next
  current = (current + direction + total) % total;

  // update
  card.setAttribute("data-photo", current);

  img.style.opacity = "0";

  setTimeout(() => {
    img.src = images[current];
    img.style.opacity = "1";
  }, 200);

  // update dots
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === current);
  });

}


/* ==========================
   START
========================== */

document.addEventListener(
  "DOMContentLoaded",
  renderProducts
);
