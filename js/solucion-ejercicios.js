import { getCadena, getContar, getRecortador, getDividir, getRepetir, getCadenaDerIzq, getCantidadVecesRepetidas, getPalabrasIguales, getNuevoPatron, getNumeroIgualDerIzq, getFatorialNumero, getNumeroPrimo, getNumeroParImpar, getConvertirTemperatura, getConvertirBinariaDecimal, getDescuentoACantidad, getAño, getVocalesYConsonantes, getValidarNombre, getValidarMail, getNumerosAlCuadrado, getNumeroMayorMenor, getNumerosParesImpares, postPedirArray } from "./funciones.js";
import { ejer1, ejer2, ejer3, ejer4, division, ejer5, ejer6, ejer7, ejer8, ejer9, ejer10, ejer11, ejer12, ejer13, ejer14, ejer15, ejer16, ejer17, ejer18, ejer19, ejer20, ejer21, ejer22, ejer23 } from "./preguntar.js";

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

if (confirm('Desea ver algunas funciones con una sola cadena de texto?')) {
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
}

if (confirm('Desea evaluar algunos textos?')) {
    //Seccion 6
    (!ejer18()) ? division(): getVocalesYConsonantes(prompt('Ingrese su Texto a evaluar:'));
    (!ejer19()) ? division(): getValidarNombre(prompt('Inserte el nombre a evaluar:'));
    (!ejer20()) ? division(): getValidarMail(prompt('Ingrese su mail a evaluar'));
}

if (confirm('Desea ver algunas funciones con numeros?')) {
    // Seccion 3
    (!ejer9()) ? division(): console.log(` | ${Math.floor(Math.random() * (99)) + 501}`);
    (!ejer10()) ? division(): getNumeroIgualDerIzq(prompt('Digite su numero a evaluar:'));
    (!ejer11()) ? division(): getFatorialNumero(prompt('Digite su numero a Factorializar:'));
    // Seccion 4
    (!ejer12()) ? division(): getNumeroPrimo(prompt('Digite su número a evaluar:'));
    (!ejer13()) ? division(): getNumeroParImpar(prompt('Digite su número a evaluar:'));
    (!ejer14()) ? division(): getConvertirTemperatura();
    // Seccion 5
    (!ejer15()) ? division(): getConvertirBinariaDecimal();
    (!ejer16()) ? division(): getDescuentoACantidad(prompt('Ingrese su Cantidad Total:'), prompt('Ingrese el decuento:'));
    (!ejer17()) ? division(): getAño(prompt('Ingrese su fecha para saber cuantos años han pasado, ej: 1984,4,23:'));
}

if (confirm('Desea ver algunas funciones con Arreglos?')) {
    // Seccion 7
    (!ejer21()) ? division(): getNumerosAlCuadrado(postPedirArray());
    (!ejer22()) ? division(): getNumeroMayorMenor(postPedirArray());
    (!ejer23()) ? division(): getNumerosParesImpares(postPedirArray());
}

alert("Asta luego!!!");