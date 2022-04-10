//* Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle que no se puede procesar el dato mediante el mensaje "Dato incorrecto". Si no es vocal, tambien debe devolver "Dato incorrecto".
// Tu código:
function esVocal(letra){
  if (letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U'){
    letra = letra.toLowerCase()
  }
  if (letra.length > 1) {return 'Dato incorrecto'}
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    return 'Es vocal'
  } 
  else { 
    return 'No es vocal'
  } 
}
console.log('El String recibido es "' +esVocal('a')+'" ')
console.log('El String recibido es "' +esVocal('I')+'" ')
console.log('El String recibido es "' +esVocal('E5')+'" ')
console.log('El String recibido es "' +esVocal('n')+'" ')
console.log('El String recibido es "' +esVocal('0')+'" ')
