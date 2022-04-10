//* Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
// Tu código aquí
function cuentoElementos(arreglo){
  let contador = 0
    for (let i = 0; i < arreglo.length ; i++) {
      if(arreglo[i] > 19){contador++}
    }
    return contador
  }
  console.log('La cantidad de elemntos es '+cuentoElementos([20,30,40,50])+' + "1"')