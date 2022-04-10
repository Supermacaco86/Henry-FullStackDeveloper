//* Devuelve "true" si "numero" es 10 o 5. De lo contrario, devuelve "false"
// Tu código:
function esDiezOCinco(numero) {
  let num = (numero === 10 || numero === 5) ? true : false
  return num
}
console.log('El numero es  "5": '+esDiezOCinco(5))
console.log('El numero es "8": '+esDiezOCinco(8))