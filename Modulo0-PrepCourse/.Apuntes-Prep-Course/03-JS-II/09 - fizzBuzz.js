//* Si "numero" es divisible entre 3, devuelve "fizz"
//* Si "numero" es divisible entre 5, devuelve "buzz"
//* Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
//* De lo contrario, devuelve el numero
// Tu código:
function fizzBuzz(numero) {
  if(numero % 15 === 0) return 'fizzbuzz'
  if(numero % 3 === 0) return 'fizz'
  if(numero % 5 === 0) return 'buzz'
  return numero
}
console.log('El numero es '+fizzBuzz(25))
console.log('El numero es '+fizzBuzz(3))
console.log('El numero es '+fizzBuzz(15))