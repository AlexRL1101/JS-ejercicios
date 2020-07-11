import { division } from "./preguntar.js";

export function getCadena() {
    let cadena = prompt("Ingrese una cadena de texto:");
    console.log(cadena);
    return cadena;
}


export const getContar = (cadena) => console.log(` | ${cadena.length}`);


export function getRecortador(cadena) {
    let cantidad = prompt("Ingrese en Números la cantidad de caracteres a mostrar:", '');
    let patron = /[0-9]+/;

    if (patron.test(cantidad)) {
        let cad = cadena.slice(0, cantidad);
        console.log(` | ${cad}`);
    } else {
        alert('Su patron ingresado no es valido!!!');
        division();
    }
}


export function getDividir(cadena) {
    let arrayCadenas = cadena.split(" ");

    for (let i = 0; i < arrayCadenas.length; i++) {
        arrayCadenas[i] + ',';
    }
    console.log(arrayCadenas);
}

/* EJEMPLO ARROW FUNTIONS + FUNCIONES TERNARIAS: 
const getDividir = (cadena) => 
    (!cadena)
        ? console.warn('Su cadena esta vacia!!!')
        : console.info('Su parametro no es aceptado') */

export function getRepetir(cadena) {
    let cantidad = prompt("Ingrese en Números la cantidad de veces a mostrar la cadena:", '');
    let patron = /[0-9]+/;

    if (patron.test(cantidad)) {
        let espacios = cadena.length;
        let cad = cadena.padEnd(espacios + 2, '| ');
        console.log(cad.repeat(cantidad));
    } else {
        alert('Su patron ingresado no es valido!!!');
        division();
    }
}


/* ************************************************************************************************************* */
// Function exercise video 35


export const getCadenaDerIzq = (cadena) => {
    let cantidad = cadena.length;
    let cadenaInvertida = "";

    for (let i = cantidad; i >= 0; i--) {
        cadenaInvertida += cadena.charAt(i);
    }
    // while (cantidad >= 0) {
    //     cadenaInvertida = cadenaInvertida + cadena.charAt(cantidad);
    //     cantidad--;
    // }

    console.log(` | ${cadenaInvertida}`);
}


export const getCantidadVecesRepetidas = (cadena, match) => {
    // console.log('Hola mundo que tal mundo'.includes('mundo'));
    // console.log("Blue Whale".indexOf("Blue")); //Return 0
    let posicion = 0,
        save = [];

    while ((cadena.indexOf(match, posicion)) != -1) {
        posicion = cadena.indexOf(match, posicion) + 1;
        save.push(posicion)
    }
    console.log(` | ${save.length}`);
}


export const getPalabrasIguales = (cadena) => {
    let cadenaMin = cadena.toLowerCase(),
        cadenaArray = cadenaMin.split(""),
        sinEspaciado = '',
        igual = true;

    for (const i in cadenaArray) {
        if (cadenaArray[i] != ' ') sinEspaciado += cadenaArray[i]
    }

    let letras = sinEspaciado.split(''),
        letrasAlreves = sinEspaciado.split('').reverse();

    for (const i in letras) {
        if ((letras[i] != letrasAlreves[i])) igual = false;
    }

    (igual) ?
    console.log(' | Su frase/palabra es un Palíndromo!!!'): console.error(' | Su frase/palabra no es un Palíndromo!!!');
}


export const getNuevoPatron = (cadena, caracter) => {
    let match = new RegExp(caracter, 'gi');

    console.log(cadena.replace(match, ''));
}