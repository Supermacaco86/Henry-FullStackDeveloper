//* La función recibe un color. Devolver el string correspondiente:
//* En caso que el color recibido sea "blue", devuleve --> "This is blue"
//* En caso que el color recibido sea "red", devuleve --> "This is red"
//* En caso que el color recibido sea "green", devuleve --> "This is green"
//* En caso que el color recibido sea "orange", devuleve --> "This is orange"
//* Caso default: devuelve --> "Color not found"
//Usar el statement Switch.
function colors(color) {
    if (color === 'blue') return 'This is blue'
    if (color === 'red') return 'This is red'
    if (color === 'green') return 'This is green'
    if (color === 'orange') {return 'This is orange'} else {return 'Color not found'}
  }
  console.log('El color es : '+colors('blue'))