import { division, cels, fare, baseBiADecimal, decimalABaseBi } from "./preguntar.js";

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

    if ((Number(conver).toString()) === "NaN") return console.error('Ingreso un caracter, debe ser un número');

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

    if (Number(numero).toString() === "NaN") return console.error('Ingreso un caracter, debe ser un número');

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
    if (Number(num).toString() === "NaN") return console.error('Ingreso un caracter, debe ser un número');

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
    if (Number(num).toString() === "NaN") return console.error('Ingreso un caracter, debe ser un número');

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
        if (num.toString() === "NaN") {
            console.error('Ingreso un caracter, debe ser un número');
        } else {
            if (num.toString() === null) { console.error(`Cancelo su conversión de °C a °F!!!`) } else {
                console.info(` | Los ${num} Grados Celsius es igual a "${((num * 9/5) + 32).toFixed(1)}" Grados Fahrenheit`);
            }
        }
    } else {
        division();
    }
    let f = fare();
    // (32 °F − 32) × 5/9 = 0 °C
    if (f) {
        let num = Number(prompt('Ingrese sus grados Fahrenheit:'));
        if (num.toString() === "NaN") { console.error('Ingreso un caracter, debe ser un número'); } else {
            if (num.toString() === null) { console.error(`Cancelo su conversión de °F a °C!!!`) } else {
                console.info(` | Los ${num} Grados Fahrenheit es igual a "${((num - 32) * 5/9).toFixed(1)}" Grados Celsius`);
            }
        }
    } else {
        division();
    }
}


/* ************************************************************************************************************* */
// Function exercise video 38


export const getConvertirBinariaDecimal = () => {
    if (baseBiADecimal()) {
        let numString = prompt('Ingrese los digitos en Base Binaria a convertir:'),
            numero = Number(numString),
            nu = String(numString).length,
            patron = /[0 || 1]+/,
            arreglo = [],
            binomio = true;

        if (numero.toString() === "NaN") {
            console.error('Ingreso caracteres, y deben ser números 0 o 1')
            binomio = false
        } else

        if (nu === 0) {
            console.error('No ingreso ningun digito')
            binomio = false
        } else

        if (nu > 17) {
            console.error('Sus digitos revasan las reglas de los Binomios')
            binomio = false
        } else

        if (numero.toString() === '0') {
            console.warn('Cancelo')
            binomio = false
        } else

            for (let i = 0; i < nu; i++) {
            if (!patron.test(Number(numString[i]))) {
                console.error(`Sus digitos ${numString} son diferentes a las normas 0 y 1 de los números binarios`);
                binomio = false;
                break;
            }
            arreglo[i] = [Number(numString[i])];
        }


        if (binomio === true) {
            let vuelta = arreglo.reverse(),
                suma = 0;

            for (let i = 0; i < nu; i++) {
                // console.log(`${i} Vuelta, ${vuelta[i]} = ${Math.pow(2,i)}`);
                suma = suma + (Number(vuelta[i]) * Math.pow(2, i))
            }
            console.log(` | Su número en Binario (${numString}) es igual a "${suma}" en número Decimal`);
        }
    } else {
        division();
    }

    /* ------------------------------------------------------------------------------------------------------- */

    if (decimalABaseBi()) {
        let numString = prompt('Ingrese los digitos en Decimal a convertir:'),
            numero = Number(numString),
            decimal = true;

        if (numero.toString() === "NaN") {
            console.error('Ingreso caracteres, y deben ser solo números')
            decimal = false
        } else

        if (numString === null) {
            console.warn('Cancelo')
            decimal = false
        } else

        if (numString.length === 0) {
            console.error('No ingreso ningun digito')
            decimal = false
        } else

        if (decimal === true) {
            console.log(` | Su número en Decimal (${numero}) es igual a "${numero.toString(2)}" en número Binario`);
        }
    } else {
        division();
    }

}


export const getDescuentoACantidad = (can, des) => {
    let cantidad = Number(can),
        descuento = Number(des);

    if (cantidad.toString() === "NaN") {
        return console.error('Ingreso caracteres, y deben ser solo números')
    } else

    if (can === null) {
        return console.warn('Cancelo en Cantidad Total')
    } else

    if (can.length === 0) {
        return console.error('No ingreso ningun digito en Cantidad Total')
    } else

    /* ---------------------------------------------------------------------- */

    if (descuento.toString() === "NaN") {
        return console.error('Ingreso caracteres, y deben ser solo números')
    } else

    if (des === null) {
        return console.warn('Cancelo en el Descuento')
    } else

    if (des.length === 0) {
        return console.error('No ingreso ningun digito en el Descuento')
    } else
        return console.log(` | Su total a pagar es ${cantidad-(descuento*cantidad/100)} $`)
}



export const getAño = (fec) => {
    let fechaEvaluar = new Date(fec),
        fechaActual = new Date(),
        patron = /[0-9]/;


    if (fec === null) {
        return console.warn('Cancelo :(')
    } else

    if (fec.length === 0) {
        return console.error('No ingreso ninguna Fecha a evaluar')
    } else

        for (let i = 0; i < 4; i++) {
        if (i === (4 || 6)) {
            if (fec[i] !== ",") {
                return console.error(`Sus digitos ${fec} deben ir separados por comas y sin espacios en blancos`);
            }
        } else
        if (!patron.test(Number(fec[i]))) {
            return console.error(`Sus digitos ${fec} son diferentes al ejemplo o ingreso un caracter`);
        }
    }


    let resta = fechaActual.getFullYear() - fechaEvaluar.getFullYear()
    return console.log(resta);

}



/* ************************************************************************************************************* */
// Function exercise video 39


export const getVocalesYConsonantes = (cad) => {
    let patronVocales = /[aeiouAEIOU]/,
        patronConsonantes = /[a-zA-Z]/,
        vocales = 0,
        consonantes = 0,
        caracter = 0;

    if (cad === null) {
        return console.warn('Cancelo contar las vocales y consonantes')
    } else

    if (cad.length === 0) {
        return console.error('No ingreso ningun texto para ser evaluado')
    } else

        for (let i = 0; i < cad.length; i++) {
        (patronVocales.test(cad[i])) ? vocales += 1: (patronConsonantes.test(cad[i])) ? consonantes += 1 : caracter += 1;
    }
    console.log(` | Su texto "${cad}" tiene: Vocales = '${vocales}', Consonantes = '${consonantes}', Caracteres = '${caracter}'`)
}


export const getValidarNombre = (nom) => {
    let patron = /[a-zA-Z]/,
        espacios = 0,
        valido = false;

    if (nom === null) {
        return console.warn(' Cancelo evaluar un nombre')
    } else

    if (nom.length === 0) {
        return console.error(' No ingreso ningun texto para ser evaluado')
    } else

        for (let i = 0; i < nom.length; i++) {

        if (nom[0] === " ") {
            valido = false
            break
        }
        if (nom[i] === " ") {
            espacios++
        }
        if (espacios > 1) {
            valido = false
            break;
        }
        if (patron.test(nom[i])) {
            valido = true
        } else {
            valido = false
        }

    }

    (valido === true) ? console.log(` | Su nombre "${nom}" es valido`): console.warn(` Su nombre "${nom}" es invalido`);
}


export const getValidarMail = (mail) => {
    if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(mail)) {
        console.log(` | La dirección de email "${mail}" es correcta`);
    } else {
        console.warn(` La dirección de email ${mail} es incorrecta`);
    }
}



/* ************************************************************************************************************* */
// Function exercise video 40

export const postPedirArray = () => prompt('Ingrese sus numeros separados por coma. Ej: 1,2,3,4,5')


export const getNumerosAlCuadrado = (arrayNum) => {

    if (arrayNum === null) {
        return console.warn(' Cancelo elevar numeros al cuadrado')
    }

    if (arrayNum.length === 0) {
        return console.error(' No ingreso ningun numero')
    }

    let arr = arrayNum.split(',' || ' '),
        nuevo = [];

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i])

        if (isNaN(arr[i])) return console.warn(` Ingreso algun tipo de caracter en su cadena "${arrayNum}"`)

        nuevo[i] = Math.pow(arr[i], 2);
    }

    return console.log(` | Su array [${arrayNum}] al cuadrado es = [${nuevo}]`)

}


export const getNumeroMayorMenor = (arrayNum) => {

    if (arrayNum === null) {
        return console.warn(' Cancelo evaluar numero Mayor y Menor')
    }

    if (arrayNum.length === 0) {
        return console.error(' No ingreso ningun numero')
    }

    let arr = arrayNum.split(',' || ' '),
        may = 0,
        men = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i])

        if (isNaN(arr[i])) return console.warn(` Ingreso algun tipo de caracter en su cadena "${arrayNum}"`)
    }

    return console.log(` | Su número Mayor es "${Math.max(...arr)}" y su número Menor es "${Math.min(...arr)}" de su arreglo [${arrayNum}]`)

}


export const getNumerosParesImpares = (arrayNum) => {

    if (arrayNum === null) {
        return console.warn(' Cancelo evaluar numero Mayor y Menor')
    }

    if (arrayNum.length === 0) {
        return console.error(' No ingreso ningun numero')
    }


    let arr = arrayNum.split(',' || ' '),
        val = 1,
        par = [],
        impar = [];

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i])
        val = Math.sign(arr[i])

        if (isNaN(arr[i])) return console.warn(` Ingreso algun tipo de caracter en su cadena "${arrayNum}"`)

        if (val === -1) return console.warn(` Ingreso números negativos en su cadena [${arrayNum}]`)

        if (arr[i] % 2 === 0) par.push(arr[i])
        else impar.push(arr[i]);
    }

    return console.log(` | De su arreglo [${arrayNum}] los números pares son [${par}] y los impares son [${impar}]`)

}