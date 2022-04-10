//* La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
// Tu código:
function mayorACien(array) {
  var nuevoArray = []
  array.sort(function(a, b) {return a - b });console.log(array);
  for (let i= 0; i < array.length; i++) {
    if(array[i] > 100) {nuevoArray.push(array[i])}
    console.log(array[i])
    console.log(nuevoArray);
  }
  return nuevoArray
}
console.log(mayorACien([100,150,10,40,25]))