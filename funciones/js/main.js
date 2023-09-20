/**Ejercicios para esta sesion
 * 
 * Declara una funcion para cada problema planteado
 * 
 * calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el valor del voltaje dadas la resistencia y la corriente
 * calcular el volumen de una esfera
 * 
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */

console.log('se vinculó correctamente!');

/* Ejecicio 1: Perimetro de un circulo --------------- */
const PI = Math.PI;
function circunferencia(diametro){
    return diametro * PI;
}

const circunferenciaArrow = diametro => diametro * PI;

// console.log(`Cirunferencia de un circulo dado su diametro:\nFunción normal: ${circunferencia(diametro)}\nFunción flecha ${circunferenciaArrow(diametro)}`);




/* Ejercicio 2: Area de un rectangulo -----------------*/
function areaRectangulo(base, altura){
    return base*altura;
}
const areaRectanguloArrow = (base, altura) => base *altura;





/* Ejercicio 3: el cuadrado de un número --------------*/
function numeroAlCuadrado(numero){
    return numero * numero;
}
const numeroAlCuadradoArrow = numero => numero * numero;





/* Ejercicio 4: conversión de grados celcius a farenheit */
function celsiusAFarenheit(gradosCelsius){
    return (gradosCelsius * 1.8) + 32; 
}

const celsiusAFarenheitArrow = gradosCelsius => (gradosCelsius * 1.8) + 32;





/* Ejecicio 5: Calcular el voltaje dadas la resistencia y la corriente */
function voltaje(resistencia, corriente){
    return resistencia * corriente;
}

const voltajeArrow = (resistencia, corriente) => resistencia * corriente;






/* Ejercicio 6: volumen de una esfera */
function volEsfera(radio){
    return (4 * PI * Math.pow(radio, 3)) / 3;
}

const volEsferaArrow = radio => (4 * PI * Math.pow(radio, 3)) / 3;


