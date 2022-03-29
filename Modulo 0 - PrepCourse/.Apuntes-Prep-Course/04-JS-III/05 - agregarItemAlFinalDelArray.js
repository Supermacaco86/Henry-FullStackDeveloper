//* Añade el "elemento" al final del array y devuelve el array.
// Tu código:
function agregarItemAlFinalDelArray(array, elemento) {
  array[array.length] = elemento
  return array
}
console.log('El array quedaría así ['+agregarItemAlFinalDelArray([20,30,40,50], 60)+']')