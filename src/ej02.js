/* Importo la constante PI, y las funciones sumar y multiplicar del módulo matematica y las utilizo.*/
import {Pi, suma, multiplicar, strings} from "./modules/matematica.js";

/*defino los valores de la suma*/
let numero1 = 20;
let numero2 = 7;
let Tot;

console.clear();
/*Cuanto vale PI*/
console.log(`Pi vale: '${Pi}'`);

/*Cuanto da la suma*/
Tot = suma(numero1, numero2);
console.log(`la suma entre:(${numero1} y ${numero2}) es:  ${Tot}`);

/*Cuanto da la multplicacion*/
Tot = multiplicar(numero1, numero2);
console.log(`la multplicacion entre:(${numero1} y ${numero2}) es:  ${Tot}`);

console.log(`Array de strings: ${strings}`)







