import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { watchDigital, alarm } from "./dom/reloj_alarma.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import countingDown from "./dom/CountingDown.js";
import scrollUp from "./dom/scrollUp.js";
import darkTheme from "./dom/dark_theme.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDiviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    watchDigital("#reloj", "#iniciar-reloj", "#detener-reloj");
    alarm("assets/alarma.mp3", "#iniciar-alarma", "#detener-alarma");
    countingDown("01/30/2022", ".countdown", "Feliz Año Nuevo");
    scrollUp(".scroll-btn");
    responsiveMedia("youtube",
        "(min-width: 1024px)",
        `<a href="https://youtu.be/6IwUl-4pAzc?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA" target="_black" rel="noopener">Ver Video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia("gmaps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/m4zuAqtSxV9K2TTMA" target="_black" rel="noopener">Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.334828472282!2d-99.16812506368672!3d19.42667405487119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2smx!4v1616864726833!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);
    responsiveTester("responsive-tester");
    userDiviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter", ".card");
    draw("#winner-btn", ".player");
    slider();
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".space");
})

// LocalStorage
darkTheme(".dark-btn", "dark-mode");
networkStatus();

// Responsive JS

/* 
    Responsive desing
    eventos del BOM
    WIndows Match Media
*/