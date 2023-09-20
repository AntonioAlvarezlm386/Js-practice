/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */
function puedoVotar(edad){
    if(edad >= 18){
        console.log("Puedes votar!");
    } else {
        console.log("No puedes votar");
    }
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */
function promedio(calificación1, calificación2, calificación3, calificación4){
    let promedio = (calificación1 + calificación2 +calificación3 + calificación4) / 4;
    if (promedio >= 7){
        console.log(`Aprobado tu calificación es ${promedio}`);
    } else {
        console.log(`Reprobado tu calificación es ${promedio}`);
    }
}

/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es primo
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Consideraciones: utilizar la estructura if-else
 */
let booleanVar = ( 10 % 2 == 0 || 10 % 3 == 0 || 10 % 7 ==0);
console.log()

/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */
function esDivisiblePor7y8(numero){
    if(numero % 7 === 0 && numero % 8 === 0){
        console.log('verdadero')
    } else {
        console.log('falso');
    }
}

/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */
function esDivisiblePor4o9(numero){
    if( numero % 4 === 0 || numero % 9 === 0){
        console.log('verdadero');
    } else {
        console.log('falso');
    }
}
/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

function calculadora(operacion, operador1, operador2){
    switch(operacion){
        case 1:
            console.log(`La suma es: ${operador1 + operador2}`);
            break;
        case 2:
            console.log(`la resta es: ${operador1 - operador2}`);
            break;
        case 3:
            console.log(`La multiplicación es: ${operador1 * operador2}`);
            break;
        case 4:
            console.log(`la división es: ${operador1 / operador2}`);
            break;
        default:
            console.log('No es una operación válida');
    }
}
/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */
function recomendarPelicula(genero){
    genero = genero.toLowerCase();
    switch(genero){
        case 'accion':
            console.log('Tienes que ver Busqueda Implacable');
            break;
        case 'drama':
            console.log('Tienes que ver Manchester By The Sea');
            break;
        case 'comedia':
            console.log('Tienes que ver Los Tipos Malos');
            break;
        case 'romance':
            console.log('Tienes que ver Carol');
            break;
        case 'suspenso':
            console.log('Tienes que ver Searching');
            break;
        case 'terror':
            console.log('Tienes que ver Sonrie');
            break;
        default:
        console.log('No es una entrada válida');
    }
}

/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 */
function interfazATM(){
    console.log('Bienvenido, que desea realizar:\n1. Retirar\n2. Transferir\n3. Deposito\n4. Pago de servicios');
    let operacion = Number(window.prompt('Teclee la operación que desee realizar:'));
    switch(operacion){
        case 1:
            console.log('Inserte su tarjeta y teclee su nip');
            break;
        case 2:
            console.log('Ingrese el número de cuenta y la cantidad a transferir');
            break;
        case 3:
            console.log('Ingrese el numero de cuenta y la cantidad a depositar');
            break;
        case 4:
            console.log('Ingrese el tipo de servicio a pagar');
            break;
        default:
            console.log('operación no válida');
    }
}

/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 */

function conversorDeDivisas(pesos, monedaExtranjera){
    switch(monedaExtranjera){
        case 1:
            console.log(`${pesos} pesos es igual a ${pesos * 0.059} dolares estadounidenses`);
            break;
        case 2:
            console.log(`${pesos} pesos es igual a ${pesos * 0.055} euros`);
            break;
        case 3:
            console.log(`${pesos} pesos es igual a ${1 * 8.66} yenes japoneses`);
            break;
        case 4:
            console.log(`${pesos} pesos es igual a ${pesos * 0.047} libras esterlinas`);
            break;
        case 5:
            console.log(`${pesos} pesos es igual a ${pesos * 0.053} francos suizos`);
            break;
        default:
            console.log('conversión no disponible');
    }
}

/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */

function calcularDescuento(precio, codigo){
    let codigoDescuento = 'DesC3463';
    if(codigo === codigoDescuento ){
        console.log(`felicidades, has obtenido un descuento del 10%\nPrecio actual del producto: ${precio * 0.9}`);
    } else {
        console.log('código de descuento no válido');
    }
}