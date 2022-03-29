//* Agrega una propiedad al objeto (argumento "objeto") con el valor `null`.  Devuelve el objeto
//* NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
// Tu código:
const objeto = {zapatilla: true, property: null}
function agregarPropiedad(objeto, property) {
  objeto[property] = null
  return objeto
}
console.log(agregarPropiedad(objeto))