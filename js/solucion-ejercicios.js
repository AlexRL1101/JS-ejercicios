import { getCadena, getContar, getRecortador, getDividir, getRepetir, getCadenaDerIzq, getCantidadVecesRepetidas, getPalabrasIguales, getNuevoPatron } from "./funciones.js";
import { ejer1, ejer2, ejer3, ejer4, division, ejer5, ejer6, ejer7, ejer8, } from "./preguntar.js";

/* if (ejer1() === true) {
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

alert("Asta luego!!!"); */

// (!cadenaDeTexto) ? (!confirm('Su cadena de texto esta vacia, desea reintentar?')) ? alert("Asta luego!!!"): getCadena(): console.log('Cadena de texto correcta');

let cadenaDeTexto = getCadena();

if (cadenaDeTexto != null) {
    while (!cadenaDeTexto) {
        if (confirm("Su cadena de texto esta vacia, reintentar?")) {
            cadenaDeTexto = getCadena();
        } else {
            break;
        }
    }
    if (cadenaDeTexto) {
        // Seccion 1
        (ejer1()) ? getContar(cadenaDeTexto): division();
        (ejer2()) ? getRecortador(cadenaDeTexto): division();
        (ejer3()) ? getDividir(cadenaDeTexto): division();
        (ejer4()) ? getRepetir(cadenaDeTexto): division();
        // Seccion 2
        (!ejer5()) ? division(): getCadenaDerIzq(cadenaDeTexto);
        (!ejer6()) ? division(): getCantidadVecesRepetidas(cadenaDeTexto, prompt('Ingresa su palabra a buscar:'));
        (!ejer7()) ? division(): getPalabrasIguales(cadenaDeTexto);
        (!ejer8()) ? division(): getNuevoPatron(cadenaDeTexto, prompt('Ingrese el caracter que desea borrar de su Texto'));
    }
}

alert("Asta luego!!!");