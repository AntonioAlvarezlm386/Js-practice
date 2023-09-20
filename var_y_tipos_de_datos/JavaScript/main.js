/* Ejercicio para esta sesion
 * 
* *Declarar 10 variables de cada tipo de dato sin tomar en cuenta objetos, arrays y null
* *Pueden variar entre las palabras reservadas var, let y const
*      -number
*      -string
*      -boolean
* 
* *Declarar variables numericas y realizar las operaciones aritmeticas basicas
*      -suma
*      -resta
*      -multiplicacion
*      -division
* 
* *Declarar variables que concatenen cadenas de texto
*      -5 mensajes diferentes en pantalla, sin limite de palabras.
* 
* *Declarar 5 variables y convertirlas a otro tipo de dato
* 
*  CONSIDERACIONES: poner en practica las mejores practicas para declaracion de variables.
* Imprimir los resultados en pantalla con un console.log()
*/


console.log('Se vinculó correctamente!\n\n');

/* Ejercicio 1------------------------------ */

/* Number */
const ACELERACION_GRAVEDAD = 9.81;
const CONSTANTE_DE_EJEMPLO = 67;
let puertoDeRed = 5500;
let numeroDePista = 129;
var faltas = 2;
const TOLERANCIA_PUNTUALIDAD = 15;
let rotacionGrados = 67;
var coordenadaX = 34.82;
let numeroDePaginas = 344;
const ANCHO_DE_BANDA_PLAN1 = 20;
/* string */
let nombreMama = 'Leticia';
var tema2 = 'Hoisting';
let marcaLaptop = 'Lenovo';
var juegoDeMesaFavorito = 'agedrez';
let nombreDocumento = 'acuerdos de equipo';
let tipoDeConexion = 'WiFi';
var notacionDeColor = 'hexadecimal';
let nombreDelAlbum = 'Darkside';
let materia = 'algebra';
let tipoDeAlmacenamiento = 'SSD';
/* boolean */
let isANumber = false;
let isOpen = true;
var isValid = false;
let isChecked = false;
var isPositiveNumber = true;
let isADarkTheme= false;
var isUppercase = false;
var isSaved = true;
let isLinked = false;
var isRegistered =true;

/* Ejercicio 2------------------------ */

let operador1 = 67;
let operador2 = 56;

console.log('Ejercicio 2: \n>suma:', operador1 + operador2);
console.log('\n>resta: ', operador1 - operador2);
console.log('\n>multiplicación', operador1 * operador2);
console.log('\n>división', operador1/operador2)

/* ejercicio 3 ----------------------- */

let teoremaParte1 = 'la suma de los cuadrados de los catetos ';
let teoremaParte2 = 'el igual al cuadrado de la hipotenusa';

let refranParte1 = 'perro que ladra'; 
let refranParte2 = 'no muerde';

let frase1 = 'There are only two hard things in computer science:' ;
let frase2 = 'cache invalidation and naming things';

let oracionPalabra1 = 'Oracion ';
let oracionPalabra2 = 'de ';
let oracionPalabra3 = '4';
let oracionPalabra4 = ' palabras ';

let fechaHoy = 'Hoy es:';
let fechaActual = '18 de septiembre';

 
console.log('\nEjercicio 3:\n', teoremaParte1 + teoremaParte2);
console.log('\n', refranParte1 + refranParte2);
console.log('\n', frase1 + frase2);
console.log('\n', oracionPalabra1 + oracionPalabra2 + oracionPalabra3 + oracionPalabra4);
console.log('\n', fechaHoy + fechaActual);

/* Ejercicio 5---------------------------- */

/* Las variables usadas son de los ejercicios anteriores */
let puertoDeRedString = String(puertoDeRed);
let oracionPalabra3Number = Number(oracionPalabra3);
let operador1String = String(operador1);
let isANumberString = String(isANumber);
let faltasBool = Boolean(faltas);
