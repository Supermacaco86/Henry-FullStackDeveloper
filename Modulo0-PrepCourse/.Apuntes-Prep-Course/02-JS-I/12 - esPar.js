//* Devuelve "true" si "num" es impar. De lo contrario, devuelve "false"
// Tu código:
function esPar(num) {
  let numero = (num % 2 === 0) ? true : false
  return numero
}
console.log('El argumento de la función num es igual  a ' +esPar(6))
console.log('El argumento de la función num es igual  a ' +esPar(9))