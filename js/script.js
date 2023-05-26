// ///////////////////////////////////////////////////////////
// // Sticky Navigation

const sectionHeroEl = document.querySelector(".section-hero");
const sectionHeaderEl = document.querySelector(".section-header");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        sectionHeaderEl.classList.add("header-intersection");
        sectionHeroEl.classList.add("pad-top-md");
      }

      if (entry.isIntersecting) {
        sectionHeaderEl.classList.remove("header-intersection");
        sectionHeroEl.classList.remove("pad-top-md");
      }
    });
  },
  { root: null, threshold: 0, rootMargin: "-50px" }
);

observer.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Mobile-Menu

// Selecting Elements
const howLink = document.querySelector('[href="#how"]');
const mealsLink = document.querySelector('[href="#meals"]');
const testimonialsLink = document.querySelector('[href="#testimonials"]');
const pricingLink = document.querySelector('[href="#pricing"]');
const signUpLink = document.querySelector('[href="#sign-up"]');

const bodyEl = document.querySelector("body");
const htmlEl = document.querySelector("html");

const btnMenuEl = document.querySelector(".burger-menu");
const btnCloseEl = document.querySelector(".close");

const navLayoutEl = document.querySelector("#nav-layout");
const navEl = document.querySelector(".nav");

// Show Mobile Navigation Menu
function showMobNav() {
  navEl.classList.add("nav-mobile-view");

  bodyEl.classList.add("disable-scroll");

  btnMenuEl.style.display = "none";
  btnCloseEl.style.display = "block";
  navLayoutEl.style.transform = "translateX(0%)";
  navLayoutEl.style.opacity = "1";
}

// Hide Mobile Navigation Menu
function hideMobNav() {
  navEl.classList.remove("nav-mobile-view");

  bodyEl.classList.remove("disable-scroll");

  btnMenuEl.style.display = "block";
  btnCloseEl.style.display = "none";
  navLayoutEl.style.transform = "translateX(100%)";
}

// Buttons and Links Events
btnMenuEl.addEventListener("click", showMobNav);
btnCloseEl.addEventListener("click", hideMobNav);

howLink.addEventListener("click", hideMobNav);
mealsLink.addEventListener("click", hideMobNav);
testimonialsLink.addEventListener("click", hideMobNav);
pricingLink.addEventListener("click", hideMobNav);
signUpLink.addEventListener("click", hideMobNav);

///////////////////////////////////////////////////////////
// Date

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;
