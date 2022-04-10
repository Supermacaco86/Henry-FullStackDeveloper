//* "array" debe ser una matriz de enteros (int/integers). Suma todos los enteros y devuelve el valor
// Tu código:
function agregarNumeros(numeros) {
  var suma = 0
  for(var i = 0; i < numeros.length; i++) {suma = suma + numeros[i]}
  return suma
}
console.log('La suma del array es '+agregarNumeros([20,30,40,50]))