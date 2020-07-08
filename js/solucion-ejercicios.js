import { getCadena, getContar, getRecortador, getDividir, getRepetir } from "./funciones.js";
import { ejer1, ejer2, ejer3, ejer4, division } from "./preguntar.js";

let cadenaDeTexto = getCadena();

if (ejer1() === true) {
    getContar(cadenaDeTexto);
    division();
} else {
    division();
}

if (ejer2() === true) {
    getRecortador(cadenaDeTexto);
    division();
} else {
    division();
}

if (ejer3() === true) {
    getDividir(cadenaDeTexto);
    division();
} else {
    division();
}

if (ejer4() === true) {
    getRepetir(cadenaDeTexto);
    division();
} else {
    division();
}

alert("Asta luego!!!");