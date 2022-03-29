//* Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo. Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
// Tu código:
function mesesDelAño(array) {
  var nuevoArray = []
  for(let i= 0; i<array.length; i++) {
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {nuevoArray.push(array[i])}
    console.log(nuevoArray[i])
    console.log(nuevoArray)
  }
  if(nuevoArray.length < 3) {return '"No se encontraron los meses pedidos"'} else {return nuevoArray}
}
console.log(mesesDelAño(['Enero','Marzo','Noviembre']))