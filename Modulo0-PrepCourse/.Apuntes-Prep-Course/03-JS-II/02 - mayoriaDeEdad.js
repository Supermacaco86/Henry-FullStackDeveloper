//* Determinar si la persona según su edad puede ingresar a un evento. 
//* Si tiene 18 años ó más, devolver --> "Allowed".
//* Si es menor, devolver --> "Not allowed"
// Tu código:
function mayoriaDeEdad(edad) {
  if (edad >= 18){return 'Allowed'} else {return 'Not allowed'}
}
console.log('El estado de tu edad es: '+mayoriaDeEdad(21)+' !!!')