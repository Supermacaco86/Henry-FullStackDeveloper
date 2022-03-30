//* Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
//* La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
// Tu código:
function tablaDelSeis(){
  let seis = []
  for (let i = 0; i < 11; i++) {seis.push(6 * i)} return seis 
}
console.log(tablaDelSeis())