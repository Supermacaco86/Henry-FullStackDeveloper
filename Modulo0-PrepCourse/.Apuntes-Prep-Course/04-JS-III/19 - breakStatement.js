//Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
//Guardar cada nuevo valor en un array. 
//Devolver el array
//Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
//devolver: "Se interrumpió la ejecución"
//Pista: usá el statement 'break'
//* Tu código:
function breakStatement(numero) {
  let array = []
  let suma = numero
  for(let i= 0; i<10; i++) {
    suma = suma + 2
    if(suma === i) {break} array.push(suma)
  }
  if (suma < 10) {return 'Se interrumpió la ejecución'}
  return array
}
console.log(breakStatement(3))