//* "array" debe ser una matriz de enteros (int/integers). Aumenta cada entero por 1 y devuelve el array
// Tu código:
function incrementarPorUno(array) {
  var nuevoArray = []
  for(var i = 0; i < array.length; i++) {nuevoArray[i] = array[i] + 1
  }
  return nuevoArray
}
console.log('El array quedaría así ['+incrementarPorUno([20,30,40,50])+']')