/*=========================================
MAVERICK STITCHES
PREMIUM WEBSITE
MAIN JAVASCRIPT
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
    MOBILE MENU
    =========================================*/

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("show");

            if (navLinks.classList.contains("show")) {

                menuBtn.innerHTML = '<i class="fas fa-times"></i>';

            } else {

                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

            }

        });

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("show");

                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

            });

        });

    }

    /*=========================================
    STICKY HEADER
    =========================================*/

    const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "rgba(5,5,5,.95)";
        header.style.padding = "0";

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.35)";

    }else{

        header.style.background =
        "rgba(5,5,5,.35)";

        header.style.boxShadow = "none";

    }

});

    /*=========================================
    SMOOTH SCROLL
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /*=========================================
    ACTIVE NAVIGATION
    =========================================*/

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

});
/*=========================================
HERO SLIDESHOW
=========================================*/

const hero = document.querySelector(".hero");

const heroImages = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg",
    "images/hero4.jpg"
];

let currentHero = 0;

if (hero) {

    setInterval(() => {

        currentHero++;

        if (currentHero >= heroImages.length) {
            currentHero = 0;
        }

        hero.style.backgroundImage =
            `url('${heroImages[currentHero]}')`;

    }, 5000);

}


/*=========================================
GALLERY FILTER
=========================================*/

const filterButtons = document.querySelectorAll(".gallery-filter button");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        galleryItems.forEach(item => {

            if (filter === "all") {

                item.style.display = "block";

            } else if (item.classList.contains(filter)) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


/*=========================================
LIGHTBOX
=========================================*/

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const image = item.querySelector("img");

        lightbox.style.display = "flex";

        lightboxImg.src = image.src;

    });

});

if (closeLightbox) {

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}

if (lightbox) {

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}
/*=========================================
FAQ ACCORDION
=========================================*/

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        const isOpen = answer.style.maxHeight;

        document.querySelectorAll(".faq-answer").forEach(item => {
            item.style.maxHeight = null;
        });

        if (!isOpen) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }

    });

});


/*=========================================
WHATSAPP APPOINTMENT FORM
=========================================*/

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();

        const date = document.getElementById("appointmentDate").value;
const time = document.getElementById("appointmentTime").value;

const text =
`*NEW APPOINTMENT REQUEST*

👤 Name: ${name}

📞 Phone: ${phone}

📧 Email: ${email}

🧵 Service: ${service}

📅 Preferred Date: ${date}

⏰ Preferred Time: ${time}

📝 Additional Details:

${message}

-------------------------

Sent from the Maverick Stitches Website`;

        const url =
`https://wa.me/2348111558257?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");

    });

}


/*=========================================
BACK TO TOP
=========================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        backToTop.style.display = "flex";

    }else{

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================================
SCROLL PROGRESS BAR
=========================================*/

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});
/*=========================================
SCROLL REVEAL ANIMATION
=========================================*/

const revealElements = document.querySelectorAll(
".section-title, .service-card, .why-card, .gallery-item, .testimonial-card, .stat-card, .about-image, .about-content, .contact-info div"
);

const revealOnScroll = () => {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if(top < trigger){

            el.classList.add("revealed");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/*=========================================
LAZY LOADING IMAGES
=========================================*/

const images = document.querySelectorAll("img");

images.forEach(img=>{

    img.setAttribute("loading","lazy");

});


/*=========================================
PAGE FADE IN
=========================================*/

document.body.style.opacity="0";

window.addEventListener("load",()=>{

    document.body.style.transition="opacity .8s ease";

    document.body.style.opacity="1";

});


/*=========================================
PRELOAD HERO IMAGES
=========================================*/

heroImages.forEach(src=>{

    const image = new Image();

    image.src = src;

});


/*=========================================
DISABLE RIGHT CLICK ON LOGO ONLY
=========================================*/

const logo = document.querySelector(".logo img");

if(logo){

    logo.addEventListener("contextmenu",(e)=>{

        e.preventDefault();

    });

}


/*=========================================
CONSOLE BRANDING
=========================================*/

console.log("%cMAVERICK STITCHES","color:#D4AF37;font-size:22px;font-weight:bold;");
console.log("%cPremium Bespoke Fashion Website","color:#ffffff;font-size:14px;");
console.log("%cDeveloped with ❤️","color:#6A0DAD;font-size:14px;");


/*=========================================
END
=========================================*/
/*=========================================
PRELOADER
=========================================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if(preloader){

        setTimeout(() => {

            preloader.classList.add("hide");

        },1000);

    }

});