// script.js

document.addEventListener('DOMContentLoaded', () => {

    // Burger-Menü für mobile Ansicht
    const burger = document.querySelector('.header__burger-menu');
    const nav = document.querySelector('.header__nav');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('is-active');
            nav.classList.toggle('is-active');
        });
    }

    // Scroll-Reveal Effekt mit Intersection Observer (performanter)
    const revealElements = document.querySelectorAll('.animate-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animation nur einmal ausführen
            }
        });
    }, {
        threshold: 0.1 // Element wird bei 10% Sichtbarkeit animiert
    });

    revealElements.forEach(el => {
        observer.observe(el);
    });

    // Swiper Initialisierung (Projekte)
    const swiper = new Swiper('.mySwiper', {
        loop: true,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});