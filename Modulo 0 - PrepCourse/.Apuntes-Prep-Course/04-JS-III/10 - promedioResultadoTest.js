//* "resultadosTest" debe ser una matriz de enteros (int/integers). Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes.
// Tu código:
function promedioResultadosTest(resultadosTest) {
  let suma = 0
  let promedio = 0
  for (var i = 0; i < resultadosTest.length; i++) {suma = suma + resultadosTest[i]}  
  promedio = suma / resultadosTest.length
  return promedio
} 
console.log('El promedio del array es '+promedioResultadosTest([20,30,40,50]))