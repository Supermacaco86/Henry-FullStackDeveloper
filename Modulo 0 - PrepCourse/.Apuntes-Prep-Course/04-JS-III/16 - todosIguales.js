//* Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales: retornar true, caso contrario retornar false.
// Tu código aquí  
function todosIguales(arreglo) {
  for (var i =0 ; i < arreglo.length - 1; i++) {
    if(arreglo[i] !== arreglo[i+1]){return false}
  }
  return true
} 
console.log(todosIguales([20,30,40,50]))