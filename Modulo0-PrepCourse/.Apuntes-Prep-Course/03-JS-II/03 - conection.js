//* Recibimos un estado de conexión de un usuario representado por un valor numérico. 
//* Cuando el estado es igual a 1, el usuario está "Online"
//* Cuando el estado es igual a 2, el usuario está "Away"
//* De lo contrario, presumimos que el usuario está "Offline"
//* Devolver el estado de conexión de usuario en cada uno de los casos.
// Tu código:
function conection(status) {
  if (status === 1)return 'Online'
  if (status === 2){return 'Away'}{return 'Offline'}
}
console.log('El estado del usuario es : '+conection(1))