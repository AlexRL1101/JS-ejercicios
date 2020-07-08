export const PI = Math.PI;

export let usuario = 'Alex';
let password = '1234';
// export default password;

const hello = () => console.log('Hola');

export default function saludar() {
    console.log('Hola Modulos +ES6');
}

export class Saludar {
    constructor() {
        console.log('Hola Clases +ES6');
    }
}