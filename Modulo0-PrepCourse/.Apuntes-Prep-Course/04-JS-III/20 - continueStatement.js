//* Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
//* - Guardar cada nuevo valor en un array.
//* - Devolver el array
//* - Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
//* Pista: usá el statement 'continue'
// Tu código:
function continueStatement(numero) {
  var array = []
  var suma = numero
  for (var i = 0; i < 10; i++) {
    if (i === 5) continue
    else {
      suma = suma + 2
      array.push(suma)
    }
  }
  return array
}
console.log(continueStatement(1))
