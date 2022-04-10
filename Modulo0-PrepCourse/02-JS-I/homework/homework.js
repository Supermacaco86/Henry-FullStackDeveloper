// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Daniel';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1024;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// En los próximos 22 problemas, deberás completar la función. 
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

// "Return" la string provista: str
// Tu código:
function devolverString(str) {
  return str  
}

// "x" e "y" son números
// Suma "x" e "y" juntos y devuelve el valor
// Tu código:
function suma(x, y) {
  return x + y
}

// Resta "y" de "x" y devuelve el valor
// Tu código:
function resta(x, y) {
  return x - y
}

// Multiplica "x" por "y" y devuelve el valor
// Tu código:
function multiplica(x, y) {
  return x * y
}

// Divide "x" entre "y" y devuelve el valor
// Tu código:
function divide(x, y) {
  return x / y
}

// Devuelve "true" si "x" e "y" son iguales
// De lo contrario, devuelve "false"
// Tu código:
function sonIguales(x, y) {
  let iguales = (x === y) ? true : false
  return iguales
  //if (x === y){return true} return false
}

// Devuelve "true" si las dos strings tienen la misma longitud
// De lo contrario, devuelve "false"
// Tu código:
function tienenMismaLongitud(str1, str2) {
  return str1.length === str2.length
}

// Devuelve "true" si el argumento de la función "num" es menor que noventa
// De lo contrario, devuelve "false"
// Tu código:
function menosQueNoventa(num) {
  let menos = (num < 90) ? true : false
  return menos    
  //if (num < 90){return true}return false
}

// Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
// De lo contrario, devuelve "false"
// Tu código:
function mayorQueCincuenta(num) {
  if (num > 50){return true}return false
}

// Obten el resto de la división de "x" entre "y"
// Tu código:
function obtenerResto(x, y) {
  return x %  y
}

// Devuelve "true" si "num" es par
// De lo contrario, devuelve "false"
// Tu código:
function esPar(num) {
  if (num % 2 === 0){return true}return false
}

// Devuelve "true" si "num" es impar
// De lo contrario, devuelve "false"
// Tu código:
function esImpar(num) {
  if (num % 2 === 1){return true}return false
}

// Devuelve el valor de "num" elevado al cuadrado
// ojo: No es raiz cuadrada!
// Tu código:
function elevarAlCuadrado(num) {
  return num * num
}

// Devuelve el valor de "num" elevado al cubo
// Tu código:
function elevarAlCubo(num) {
  return num * num * num
}

// Devuelve el valor de "num" elevado al exponente dado en "exponent"
// Tu código:
function elevar(num, exponent) {
  return Math.pow(num, exponent)
}

// Redondea "num" al entero más próximo y devuélvelo
// Tu código:
function redondearNumero(num) {
  return Math.round(num)
}

// Redondea "num" hacia arriba (al próximo entero) y devuélvelo
// Tu código:
function redondearHaciaArriba(num) {
  return Math.ceil(num)
}

//Generar un número al azar entre 0 y 1 y devolverlo
//Pista: investigá qué hace el método Math.random()
// Tu código:
function numeroRandom() {
  return Math.random()  
}

//La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
//Si el número es positivo, devolver ---> "Es positivo"
//Si el número es negativo, devolver ---> "Es negativo"
//Si el número es 0, devuelve false
// Tu código:
function esPositivo(numero) {
  if (numero === 0){return false}
  if (numero > 0){return 'Es positivo'}else{return 'Es negativo'}
}

// Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
// Ejemplo: "hello world" pasaría a ser "hello world!"
// Tu código:
function agregarSimboloExclamacion(str) {
  return str + '!'
}

// Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
// Ejemplo: "Soy", "Henry" -> "Soy Henry"
// Tu código:
function combinarNombres(nombre, apellido) {
  return nombre + " " + apellido
}

// Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
// "Martin" -> "Hola Martin!"
// Tu código:
function obtenerSaludo(nombre) {
  return 'Hola ' + nombre + '!'
}

// Retornar el area de un rectángulo teniendo su altura y ancho
// Tu código:
function obtenerAreaRectangulo(alto, ancho) {
  return alto * ancho
}

//Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
// Tu código:
function retornarPerimetro(lado){
  return lado * 4
}

//Desarrolle una función que calcule el área de un triángulo.
// Tu código:
function areaDelTriangulo(base, altura){
  return (base * altura) / 2
}

//Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
//como parámetro un número de euros y calcule el cambio en dólares.
// Tu código:
function deEuroAdolar(euro){
return euro * 1.20
}

/*
Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
Si no es vocal, tambien debe devolver "Dato incorrecto".
*/
//Tu código:
/*
si es vocal=Es vocal
+ de caracteres = dato incorrecto
si no es vocal = dato incorrecto

*/
function esVocal(letra){
  if (letra.length > 1) { letra.toLowerCase(); return 'Dato incorrecto'}
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    return 'Es vocal'
  } 
  else { 
    return 'Dato incorrecto'
  }  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
