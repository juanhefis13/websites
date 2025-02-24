const carouselContainer = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;
let currentIndex = 0;

function moveCarousel() {
    let slidesToShow = 3; // Por defecto, mostrar 3 slides
    if (window.innerWidth <= 768) {
        slidesToShow = 2; // Mostrar 2 slides en pantallas pequeñas
    }
    if (window.innerWidth <= 480) {
        slidesToShow = 1; // Mostrar 1 slide en móviles
    }

    currentIndex = (currentIndex + slidesToShow) % totalSlides;
    const offset = -currentIndex * (100 / slidesToShow);
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

setInterval(moveCarousel, 5000);