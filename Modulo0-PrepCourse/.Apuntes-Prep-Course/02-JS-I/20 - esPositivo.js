//* La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
//* Si el número es positivo, devolver ---> "Es positivo"
//* Si el número es negativo, devolver ---> "Es negativo"
//* Si el número es 0, devuelve false
// Tu código:
function esPositivo(numero) {
  if (numero === 0) {return false} else if (numero > 0){return 'Es positivo'} else {return 'Es negativo'}
}
console.log('El valor de esPsitivo es igual  a ' +esPositivo(0))
console.log('El valor de esPsitivo es igual  a ' +esPositivo(22))
console.log('El valor de esPsitivo es igual  a ' +esPositivo(-22))