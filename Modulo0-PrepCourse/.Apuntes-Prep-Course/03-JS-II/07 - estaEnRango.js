//* Devuelve "true" si "numero" es menor que 50 y mayor que 20. De lo contrario, devuelve "false"
// Tu código:
function estaEnRango(numero) {
  if (numero < 50 && numero > 20) {return true} else {return false}
}
console.log('El numero es '+estaEnRango(35))
console.log('El numero es '+estaEnRango(15))
