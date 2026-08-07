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

/*==================================
LIGHT & DARK THEME
==================================*/

const themeToggle = document.getElementById("themeToggle");

const body = document.body;

const icon = themeToggle.querySelector("i");

// Load saved theme
if(localStorage.getItem("theme") === "light"){

    body.classList.add("light-theme");

    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");

}

themeToggle.addEventListener("click", ()=>{

    body.classList.toggle("light-theme");

    if(body.classList.contains("light-theme")){

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

        localStorage.setItem("theme","light");

    }else{

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

        localStorage.setItem("theme","dark");

    }

});


/*==========================================================
AI OUTFIT RECOMMENDER
==========================================================*/

function initFashionConsultant() {

    const recommendBtn = document.getElementById("recommendBtn");
    const result = document.getElementById("recommendationResult");

    if (!recommendBtn || !result) return;

    // Outfit database
    const outfits = [

        {
            occasion: "Wedding",
            style: "Agbada",
            name: "Royal Heritage Agbada",
            image: "images/gallery2.jpg",
            reason: "A luxurious Agbada designed for weddings and grand celebrations.",
            fabric: "Premium Brocade",
            colour: "White & Gold",
            price: "₦120,000 – ₦180,000",
            delivery: "7–10 Working Days",
            accessories: "Luxury Cap, Gold Walking Stick",
            footwear: "Black Italian Loafers",
            watch: "Gold Wristwatch",
            perfume: "Dior Sauvage Elixir"
        },

        {
            occasion: "Church",
            style: "Senator",
            name: "Executive Prestige Senator",
            image: "images/gallery5.jpg",
            reason: "Elegant, modest and stylish for church services and formal gatherings.",
            fabric: "Premium Senator Material",
            colour: "Navy Blue",
            price: "₦60,000 – ₦90,000",
            delivery: "5–7 Working Days",
            accessories: "Matching Cap",
            footwear: "Brown Leather Loafers",
            watch: "Silver Wristwatch",
            perfume: "Bleu de Chanel"
        },

        {
            occasion: "Office",
            style: "Kaftan",
            name: "Classic Office Kaftan",
            image: "images/gallery3.jpg",
            reason: "Professional, comfortable and ideal for executive office wear.",
            fabric: "Luxury Linen",
            colour: "Charcoal Grey",
            price: "₦50,000 – ₦75,000",
            delivery: "4–6 Working Days",
            accessories: "Leather Belt",
            footwear: "Black Derby Shoes",
            watch: "Classic Leather Watch",
            perfume: "Terre d’Hermès"
        },

        {
            occasion: "Traditional Marriage",
            style: "Isiagu",
            name: "Royal Heritage Isiagu",
            image: "images/gallery4.jpg",
            reason: "Designed for cultural occasions with premium finishing and royal elegance.",
            fabric: "Premium Isiagu Fabric",
            colour: "Wine & Gold",
            price: "₦80,000 – ₦120,000",
            delivery: "6–8 Working Days",
            accessories: "Traditional Staff, Red Cap",
            footwear: "Black Luxury Loafers",
            watch: "Luxury Gold Watch",
            perfume: "Creed Aventus"
        }

    ];

    recommendBtn.addEventListener("click", () => {

        const occasion = document.getElementById("occasion").value;
        const style = document.getElementById("style").value;
        const budget = document.getElementById("budget").value;
        const age = document.getElementById("age")?.value || "";
        const skinTone = document.getElementById("skinTone")?.value || "";
        const bodyBuild = document.getElementById("bodyBuild")?.value || "";

        // Validation
        if (!occasion || !style || !budget) {

            result.style.display = "block";

            result.innerHTML = `
                <h3>Incomplete Information</h3>

                <p>Please complete the required fields below:</p>

                <ul style="margin:15px 0 0 20px; line-height:1.8;">
                    <li>Occasion</li>
                    <li>Preferred Style</li>
                    <li>Budget</li>
                </ul>
            `;

            return;
        }

        // Find matching outfit
        let selected = outfits.find(item =>
            item.occasion === occasion && item.style === style
        );

        // Default recommendation
        if (!selected) {

            selected = {
                name: `${style} Signature Collection`,
                image: "images/gallery1.jpg",
                reason: "A premium bespoke design carefully selected based on your preferences.",
                fabric: "Premium Fabric",
                colour: "Black",
                price: "Personalized quote available",
                delivery: "5–8 Working Days",
                accessories: "Matching Cap",
                footwear: "Luxury Loafers",
                watch: "Classic Wristwatch",
                perfume: "Premium Designer Fragrance"
            };

        }

        // Skin tone adjustment
        let skinToneAdvice = "";

        if (skinTone === "Dark") {

            skinToneAdvice =
                "Emerald Green, White, Wine and Royal Blue will complement your complexion beautifully.";

        } else if (skinTone === "Fair") {

            skinToneAdvice =
                "Black, Navy Blue, Brown and Forest Green are excellent choices for your complexion.";

        } else if (skinTone === "Chocolate") {

            skinToneAdvice =
                "Cream, Burgundy, Gold and White will enhance your complexion elegantly.";

        } else if (skinTone === "Light Brown") {

            skinToneAdvice =
                "Olive Green, Sky Blue, Grey and Wine will suit your complexion very well.";

        }

        // Render result
        result.style.display = "block";

        result.innerHTML = `

            <img src="${selected.image}" alt="${selected.name}"
            style="width:100%; border-radius:16px; margin-bottom:20px;">

            <h3 style="margin-bottom:10px;">${selected.name}</h3>

            <p style="margin-bottom:20px;">${selected.reason}</p>

            <p><strong>Occasion:</strong> ${occasion}</p>
            <p><strong>Style:</strong> ${style}</p>
            <p><strong>Budget:</strong> ${budget}</p>

            ${age ? `<p><strong>Age Group:</strong> ${age}</p>` : ""}
            ${bodyBuild ? `<p><strong>Body Build:</strong> ${bodyBuild}</p>` : ""}

            <hr style="margin:20px 0; border-color:#333;">

            <p><strong>Fabric:</strong> ${selected.fabric}</p>
            <p><strong>Recommended Colour:</strong> ${selected.colour}</p>
            <p><strong>Estimated Price:</strong> ${selected.price}</p>
            <p><strong>Production Time:</strong> ${selected.delivery}</p>

            <hr style="margin:20px 0; border-color:#333;">

            <p><strong>Accessories:</strong> ${selected.accessories}</p>
            <p><strong>Footwear:</strong> ${selected.footwear}</p>
            <p><strong>Recommended Watch:</strong> ${selected.watch}</p>
            <p><strong>Suggested Fragrance:</strong> ${selected.perfume}</p>

            ${skinToneAdvice ? `
                <hr style="margin:20px 0; border-color:#333;">
                <p><strong>Skin Tone Advice:</strong> ${skinToneAdvice}</p>
            ` : ""}

            <div style="margin-top:25px;">

                <a href="https://wa.me/2348111558257?text=Hello%20Maverick%20Stitches,%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(selected.name)}"
                class="btn"
                target="_blank">

                    Order This Style on WhatsApp

                </a>

            </div>

        `;

    });

}

/*=========================================
START AI FASHION CONSULTANT
=========================================*/

initFashionConsultant();