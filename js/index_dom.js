import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { watchDigital, alarm} from "./dom/reloj_alarma.js";
import { moveBall ,shortcuts }  from "./dom/teclado.js";
import countingDown from "./dom/CountingDown.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    watchDigital("#reloj","#iniciar-reloj", "#detener-reloj");
    alarm("assets/alarma.mp3", "#iniciar-alarma", "#detener-alarma");
    countingDown("01/01/2022",".countdown","Feliz Año Nuevo");
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".space");
})