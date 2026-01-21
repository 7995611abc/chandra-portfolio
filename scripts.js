/*=============== toggle navbar ===============*/
document.addEventListener("DOMContentLoaded", function () {
  let menuIcon = document.getElementById("menu-icon");
  let navbar = document.querySelector(".navbar");
  let header = document.querySelector("header");
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
  };

  window.addEventListener("scroll", () => {
    let top = window.scrollY;
    sections.forEach(sec => {
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
        });
        let activeLink = document.querySelector("header nav a[href*=" + id + "]");
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });

    // Sticky navbar
    header.classList.toggle("sticky", window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
  });

  // Remove toggle icon and navbar when click navbar link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuIcon.classList.remove("fa-xmark");
      navbar.classList.remove("active");
    });
  });
});
/*=============== scroll reveal & typed js ===============*/
document.addEventListener("DOMContentLoaded", function () {
    if (typeof ScrollReveal !== "undefined") {
        ScrollReveal({
            distance: '80px',
            duration: 2000,
            delay: 200
        });
        if (document.querySelector('.home-content, .heading')) {
            ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        }
        if (document.querySelector('.home-img, .education-container, .experience-container, .services-container, .contact form')) {
            ScrollReveal().reveal('.home-img, .education-container, .experience-container, .services-container, .contact form', { origin: 'bottom' });
        }
        if (document.querySelector('.home-content h1, .about-img')) {
            ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
        }
        if (document.querySelector('.home-content p, .about-content')) {
            ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
        }
    } else {
        console.error("ScrollReveal library is not loaded.");
    }

    // Make sure Typed.js is loaded before this script.
    // If using a module system or CDN, include the following line before this script:
    // <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    if (typeof Typed !== "undefined" && document.querySelector('.typed')) {
        const typed = new Typed('.typed', {
            strings: ['Data Analyst', 'Data Engineer', 'Data Scientisit','Graduate from University of Hertfordshire'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    } else if (typeof Typed === "undefined") {
        console.error("Typed.js library is not loaded.");
    }
});




