import { division, cels, fare } from "./preguntar.js";

export function getCadena() {
    let cadena = prompt("Ingrese una cadena de texto:");
    if (cadena !== null) {
        console.log(cadena);
        return cadena;
    }
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
    // let cantidad = cadena.length;
    // let cadenaInvertida = "";

    // for (let i = cantidad; i >= 0; i--) {
    //     cadenaInvertida += cadena.charAt(i);
    // }
    // while (cantidad >= 0) {
    //     cadenaInvertida = cadenaInvertida + cadena.charAt(cantidad);
    //     cantidad--;
    // }

    // Solucion de JonMircha
    return console.info(` | ${cadena.split('').reverse().join('')}`)

    // console.log(` | ${cadenaInvertida}`);
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
    // let cadenaMin = cadena.toLowerCase(),
    //     cadenaArray = cadenaMin.split(""),
    //     sinEspaciado = '',
    //     igual = true;

    // for (const i in cadenaArray) {
    //     if (cadenaArray[i] != ' ') sinEspaciado += cadenaArray[i]
    // }

    // let letras = sinEspaciado.split(''),
    //     letrasAlreves = sinEspaciado.split('').reverse();

    // for (const i in letras) {
    //     if ((letras[i] != letrasAlreves[i])) igual = false;
    // }

    // (igual) ?
    // console.log(' | Su frase/palabra es un Palíndromo!!!'): console.error(' | Su frase/palabra no es un Palíndromo!!!');

    let cadenaMin = cadena.toLowerCase(),
        alreves = cadenaMin.split('').reverse().join(''); //El metodo .join('') convierte a string el array antes convertido

    (cadenaMin === alreves) ? console.log(' | Su frase es un Palíndromo'): console.warn('Su frase no es un Palíndromo');
}


export const getNuevoPatron = (cadena, caracter) => {
    let match = new RegExp(caracter, 'ig');

    console.log(` | ${cadena.replace(match, '')}`);
}


/* ************************************************************************************************************* */
// Function exercise video 36


export const getNumeroIgualDerIzq = (numero) => {
    let conver = String(numero),
        vuelta = conver.split('').reverse().join('');

    if (numero === null) return console.error(`Cancelo su evaluación!!!`)

    if (conver.length > 1) {
        (conver === vuelta) ? console.info(` | Su conjunto de digitos "${numero}" son Capicúos`): console.warn(`Su conjunto de digitos "${numero}" no son Capicúos`)
    } else {
        return console.warn(`Solo ingreso un digito "${numero}", y por lo tanto es Capicúo`);
    }
}


export const getFatorialNumero = (numero) => {
    let numeroNumber = Number(numero),
        i = 1,
        e = -1,
        multiplicador = 1,
        multiplicador2 = 1;

    if (numero === null) return console.error(`Cancelo su evaluación!!!`);

    if ((Math.sign(numeroNumber) === 0) || (Math.sign(numeroNumber) === -0)) {
        return console.warn('Su Digito es incongruente o igual a 0')
    }

    if (Math.sign(numeroNumber) === -1) {
        while (e >= numeroNumber) {
            multiplicador2 = e * multiplicador2;
            e--
        }
        return console.log(` | El resultado de su numero Factorial es ${multiplicador2}`);
    }

    if (Math.sign(numeroNumber) === 1) {
        while (i <= numeroNumber) {
            multiplicador = i * multiplicador;
            i++
        }
        return console.log(` | El resultado de su numero Factorial es ${multiplicador}`);
    }
}


/* ************************************************************************************************************* */
// Function exercise video 37


export const getNumeroPrimo = (num) => {
    let numero = Number(num);

    if (num === null) return console.error(`Cancelo su evaluación!!!`);

    if (Math.sign(numero) <= 0) return console.error('Su número ingresado no es congruente, tiene que ser positivo o diferente de 0!!!')

    if (numero === 1) return console.warn(`Recuerde que el número 1 esta excluido`);

    for (let i = 2; i < numero; i++) {
        if ((numero % i) === 0) {
            return console.warn(`Su número ${numero} no es Primo`)
        }

    }

    return console.info(` | El número ${numero} es Primo`);
}


export const getNumeroParImpar = (num) => {
    let numero = Number(num);

    if (num === null) return console.error(`Cancelo su evaluación!!!`);

    if (Math.sign(numero) === 0) return console.error('Su número ingresado no es congruente, tiene que ser diferente de 0!!!')

    if (numero % 2 === 0) return console.log(` | Su número ${numero} es par`)

    return console.warn(`Su número ${numero} es impar`);
}


export const getConvertirTemperatura = () => {
    let c = cels();
    // (0 °C × 9/5) + 32 = 32 °F
    if (c) {
        let num = Number(prompt('Ingrese sus grados Celsius:'));
        if (num === 0) { console.error(`Cancelo su conversión de °C a °F!!!`) } else {
            console.info(` | Los ${num} Grados Celsius es igual a "${((num * 9/5) + 32).toFixed(1)}" Grados Fahrenheit`);
        }
    } else {
        division();
    }
    let f = fare();
    // (32 °F − 32) × 5/9 = 0 °C
    if (f) {
        let num = Number(prompt('Ingrese sus grados Fahrenheit:'));
        if (num === 0) { console.error(`Cancelo su conversión de °F a °C!!!`) } else {
            console.info(` | Los ${num} Grados Fahrenheit es igual a "${((num - 32) * 5/9).toFixed(1)}" Grados Celsius`);
        }
    } else {
        division();
    }
}