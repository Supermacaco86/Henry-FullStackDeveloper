//* Devuelve "true" si "numero" es primo
//* De lo contrario devuelve "falso"
//* Pista: un número primo solo es divisible por sí mismo y por 1
//* Pista 2: Puedes resolverlo usando un bucle `for`
//* Nota: Los números 0 y 1 NO son considerados números primos
// Tu código:
function esPrimo(numero) {
  if( numero < 2) {return 'El numero es '+numero+' por lo tanto es : ' +false}
  if(numero === 2) return true
  for(var i = 2; i < numero; i++) {
    if(numero % i === 0) {return 'El numero no es primo por lo tanto es : ' +false}
  }
  return 'El numero es primo por lo tanto es : ' +true
}
console.log(esPrimo(1))
console.log(esPrimo(5))
console.log(esPrimo(8))