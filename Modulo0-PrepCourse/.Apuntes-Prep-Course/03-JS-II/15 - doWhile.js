//* Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces. Retornar el valor final.
//* Usar el bucle do ... while.
// Tu código:
function doWhile(numero) {
  var a = numero;
  var i = 0;
  do {
    i = i + 1;
    a = a + 5;
  } while (i < 8);
  return a;
}
console.log(doWhile(8));
