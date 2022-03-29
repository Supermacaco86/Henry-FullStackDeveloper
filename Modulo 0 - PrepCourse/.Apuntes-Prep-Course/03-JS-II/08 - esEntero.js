//* Devuelve "true" si "numero" es un entero (int/integer)
//* Ejemplo: 0.8 -> false
//* Ejemplo: 1 -> true
//* Ejemplo: -10 -> true
//* De lo contrario, devuelve "false"
//* Pista: Puedes resolver esto usando `Math.floor`
// Tu código:
function esEntero(numero) {
  if (numero % 1 === 0){return true} else {return false}
}
console.log('El numero es '+esEntero(15))
console.log('El numero es '+esEntero(20.5))