/* ==========================
   WIN MYEIK SHOP
   Service Worker v1
========================== */

const CACHE_NAME = "win-myeik-shop-v1";

const FILES_TO_CACHE = [

  "./",
  "./index.html",
  "./manifest.json",

  "./css/style.css",
  "./css/navbar.css",
  "./css/slider.css",
  "./css/products.css",
  "./css/contact.css",
  "./css/footer.css",

  "./js/main.js",
  "./js/products.js",
  "./js/slider.js",

  "./images/logo.png",
  "./images/icon-192.png",
  "./images/icon-512.png"

];


/* ==========================
   INSTALL
========================== */

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then(cache => {

        return cache.addAll(FILES_TO_CACHE);

      })

  );

  self.skipWaiting();

});


/* ==========================
   ACTIVATE
========================== */

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys()
      .then(cacheNames => {

        return Promise.all(

          cacheNames.map(cache => {

            if (cache !== CACHE_NAME) {

              return caches.delete(cache);

            }

          })

        );

      })

  );

  self.clients.claim();

});


/* ==========================
   FETCH
========================== */

self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)

      .then(response => {

        if (response) {

          return response;

        }

        return fetch(event.request);

      })

  );

});
