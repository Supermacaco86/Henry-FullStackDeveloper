
//* Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
//* Si no se pasan argumentos devuelve 0
//* Si se pasa un argumento, simplemente devuélvelo
// Tu código:
function multiplicarArgumentos() {
  if(arguments.length < 1) return 0
  var total = 1
  for(var i = 0; i < arguments.length; i++) {total = total * arguments[i]}
  return total
}
console.log(multiplicarArgumentos())