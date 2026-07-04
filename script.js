// ==============================
// GULBELA LUXURY PERFUME
// Professional JavaScript
// ==============================

// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// Back To Top Button
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (!backToTop) return;

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

// Smooth Navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth"
        });

    });

});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".product-card,.gallery-item,.combo-content,.combo-image,.about-content,.about-image,.contact-info,.contact-form,.hero-text,.hero-image"
).forEach(item => {

    observer.observe(item);

});

// Contact Form
const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = form.querySelector('input[type="text"]');
        const email = form.querySelector('input[type="email"]');
        const subject = form.querySelectorAll('input[type="text"]')[1];
        const message = form.querySelector("textarea");

        if (
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            subject.value.trim() === "" ||
            message.value.trim() === ""
        ) {

            alert("Please fill all fields.");

            return;

        }

        alert("Thank you for contacting Gulbela Luxury Perfume!");

        form.reset();

    });

}

// Active Menu
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// Image Hover Effect
document.querySelectorAll(".product-card img").forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

// Gallery Click Preview
document.querySelectorAll(".gallery-item img").forEach(image => {

    image.addEventListener("click", () => {

        window.open(image.src, "_blank");

    });

});

// Hero Button Ripple
document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.style.position = "absolute";
        ripple.style.width = "10px";
        ripple.style.height = "10px";
        ripple.style.borderRadius = "50%";
        ripple.style.background = "rgba(255,255,255,.5)";
        ripple.style.left = e.offsetX + "px";
        ripple.style.top = e.offsetY + "px";
        ripple.style.transform = "scale(0)";
        ripple.style.transition = ".6s";

        this.style.position = "relative";
        this.style.overflow = "hidden";

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.style.transform = "scale(30)";
            ripple.style.opacity = "0";
        }, 10);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});

// Loading Animation
window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// Console Message
console.log("Gulbela Luxury Perfume Website Loaded Successfully.");// ==============================
// CONTINUED - Part 2
// ==============================

// Navbar Shadow Animation
let lastScrollTop = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (header) {

        if (currentScroll > lastScrollTop && currentScroll > 120) {

            header.style.transform = "translateY(-100%)";

        } else {

            header.style.transform = "translateY(0)";

        }

        header.style.transition = "transform .35s ease";

    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

});

// Button Hover Animation
document.querySelectorAll(".btn,.btn-outline").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-3px) scale(1.02)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "";

    });

});

// Card Tilt Effect
document.querySelectorAll(".product-card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 10;
        const rotateX = ((rect.height / 2 - y) / rect.height) * 10;

        card.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

// Lazy Image Fade
document.querySelectorAll("img").forEach(img => {

    img.addEventListener("load", () => {

        img.style.opacity = "1";
        img.style.transition = "opacity .5s ease";

    });

});

// Footer Year
const footerYear = document.getElementById("year");

if (footerYear) {

    footerYear.textContent = new Date().getFullYear();

}

// Keyboard Accessibility
document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        document.activeElement.blur();

    }

});

// Prevent Empty Links
document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

    });

});

// Performance Log
window.addEventListener("load", () => {

    const timing = performance.now();

    console.log(
        "Website initialized in " +
        timing.toFixed(2) +
        " ms"
    );

});

// End
console.log("script.js loaded successfully.");// ==============================
// CONTINUED - Part 3
// ==============================

// Reveal Elements with Stagger Effect
const revealItems = document.querySelectorAll(
    ".product-card,.gallery-item,.feature-box"
);

revealItems.forEach((item, index) => {

    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = `all .6s ease ${index * 0.08}s`;

});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

revealItems.forEach(item => revealObserver.observe(item));

// Simple Counter Animation
document.querySelectorAll("[data-count]").forEach(counter => {

    const target = Number(counter.dataset.count);

    if (Number.isNaN(target)) return;

    let value = 0;

    const step = Math.max(1, Math.ceil(target / 100));

    const timer = setInterval(() => {

        value += step;

        if (value >= target) {

            value = target;
            clearInterval(timer);

        }

        counter.textContent = value;

    }, 20);

});

// Disable Submit Button During Processing
if (form) {

    form.addEventListener("submit", () => {

        const submitButton = form.querySelector('button[type="submit"]');

        if (!submitButton) return;

        submitButton.disabled = true;

        submitButton.textContent = "Sending...";

        setTimeout(() => {

            submitButton.disabled = false;

            submitButton.textContent = "Send Message";

        }, 2000);

    });

}

// Current Year for Elements Having .current-year
document.querySelectorAll(".current-year").forEach(el => {

    el.textContent = new Date().getFullYear();

});

// End of File