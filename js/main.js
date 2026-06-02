/* ==========================
   NAVBAR SHADOW ON SCROLL
========================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 4px 15px rgba(0,0,0,0.12)";

    } else {

        navbar.style.boxShadow =
            "0 2px 10px rgba(0,0,0,0.08)";

    }

});


/* ==========================
   SMOOTH SCROLL
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if(target){

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* ==========================
   ACTIVE NAV LINK
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop
            &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* ==========================
   FADE IN ANIMATION
========================== */

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold: 0.15
});

document
.querySelectorAll(
    ".product-card, .contact-card, .step"
)
.forEach(item => {

    item.classList.add("hidden");

    observer.observe(item);

});


/* ==========================
   PAGE LOADED
========================== */

window.addEventListener("load", () => {

    console.log(
        "WIN MYEIK SHOP Loaded Successfully"
    );

});

