//* Comprueba si el elemento existe dentro de "array". Devuelve "true" si está, o "false" si no está.
// Tu código:
function arrayContiene(array, elemento) {
  for(var i = 0; i < array.length; i++) {
    if(array[i] === elemento) {return true}
  }
  return false
}
console.log(arrayContiene([20,30,40,50], 15))