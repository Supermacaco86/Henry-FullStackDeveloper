//* "numeros" debe ser una matriz de enteros (int/integers). Devuelve el número más grande
// Tu código:
function numeroMasGrande(numeros) {
    var maximo = numeros[0]
    for(var i = 1; i < numeros.length; i++) {
      if(numeros[i] > maximo) {maximo = numeros[i]}
    }
    return maximo
  }
  console.log('El número mas grande del array es '+numeroMasGrande([20,30,40,50]))