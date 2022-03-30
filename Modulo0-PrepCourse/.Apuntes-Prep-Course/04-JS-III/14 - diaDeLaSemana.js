//* Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
//* Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
//* si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
// Tu código aquí   
function diaDeLaSemana(numeroDeDia) {
  if(numeroDeDia === 1 || numeroDeDia === 7 ){return "Es fin de semana"} return "Es dia Laboral"
} 
console.log(diaDeLaSemana(1));