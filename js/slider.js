/* ==========================
   BANNER IMAGES
========================== */

const banners = [

    "images/banners/banner1.jpg",
    "images/banners/banner2.jpg",
    "images/banners/banner3.jpg",
    "images/banners/banner4.jpg"

];


/* ==========================
   ELEMENTS
========================== */

const sliderTrack =
document.querySelector(".slider-track");

const dotsContainer =
document.querySelector(".slider-dots");

const prevBtn =
document.querySelector(".slider-prev");

const nextBtn =
document.querySelector(".slider-next");

let currentSlide = 0;
let autoSlide;


/* ==========================
   CREATE SLIDES
========================== */

function createSlides() {

    if (!sliderTrack) return;

    banners.forEach((image, index) => {

        const img =
        document.createElement("img");

        img.src = image;

        img.alt =
        `Banner ${index + 1}`;

        sliderTrack.appendChild(img);

    });

}


/* ==========================
   CREATE DOTS
========================== */

function createDots() {

    if (!dotsContainer) return;

    banners.forEach((_, index) => {

        const dot =
        document.createElement("span");

        dot.addEventListener(
            "click",
            () => {

                currentSlide = index;

                updateSlider();

                restartAutoSlide();

            }
        );

        dotsContainer.appendChild(dot);

    });

}


/* ==========================
   UPDATE SLIDER
========================== */

function updateSlider() {

    sliderTrack.style.transform =
    `translateX(-${currentSlide * 100}%)`;

    const dots =
    document.querySelectorAll(
        ".slider-dots span"
    );

    dots.forEach(dot =>
        dot.classList.remove("active")
    );

    if (dots[currentSlide]) {

        dots[currentSlide]
        .classList.add("active");

    }

}


/* ==========================
   NEXT
========================== */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= banners.length) {

        currentSlide = 0;

    }

    updateSlider();

}


/* ==========================
   PREVIOUS
========================== */

function prevSlide() {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide =
        banners.length - 1;

    }

    updateSlider();

}


/* ==========================
   AUTO SLIDE
========================== */

function startAutoSlide() {

    autoSlide =
    setInterval(() => {

        nextSlide();

    }, 4000);

}


function restartAutoSlide() {

    clearInterval(autoSlide);

    startAutoSlide();

}


/* ==========================
   BUTTON EVENTS
========================== */

if (nextBtn) {

    nextBtn.addEventListener(
        "click",
        () => {

            nextSlide();

            restartAutoSlide();

        }
    );

}

if (prevBtn) {

    prevBtn.addEventListener(
        "click",
        () => {

            prevSlide();

            restartAutoSlide();

        }
    );

}


/* ==========================
   INIT
========================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        createSlides();

        createDots();

        updateSlider();

        startAutoSlide();

    }
);

