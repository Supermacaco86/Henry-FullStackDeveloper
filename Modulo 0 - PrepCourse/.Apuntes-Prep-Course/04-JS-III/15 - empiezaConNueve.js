//* Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero inicia con 9 y false en otro caso.
// Tu código aquí
function empiezaConNueve(n) {
  let num = n.toString()
  if(num.charAt(0) === "9"){return true} return false
}
console.log(empiezaConNueve(2))