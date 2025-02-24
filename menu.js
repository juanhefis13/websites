// Seleccionar el botón de hamburguesa y el menú
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

// Alternar la visibilidad del menú al hacer clic en el botón
menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Cerrar el menú al hacer clic en un enlace
const menuLinks = document.querySelectorAll(".menu a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});