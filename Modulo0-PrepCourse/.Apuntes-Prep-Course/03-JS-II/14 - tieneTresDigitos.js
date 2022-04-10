//*Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
// Tu código:
function tieneTresDigitos(numero) {
  if (numero > 99 && numero < 1000) {
    return true;
  }
  return false;
}
console.log(tieneTresDigitos(88));
