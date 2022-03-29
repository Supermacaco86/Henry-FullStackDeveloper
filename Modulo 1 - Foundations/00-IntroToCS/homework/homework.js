'use strict'

function BinarioADecimal(num) {
  let sum = 0
  for (let i = 0; i < num.length; i++) {
    sum += +num[i] * 2 ** (num.length - 1 - i)
    //sum += Math.pow(2, num.length - (i + 1)) * num[i]   ---> Explicado por el Profesor
  }
  return sum
}

function DecimalABinario(num) {
  let number = parseInt(num),resultado = number.toString(2)
  return resultado
  /*  Explicado por el profesor
    var binario = ''
    while ( num > 0){
        binario = num % 2 + binario
        num = Math.floor(num / 2)
    }
    return binario
    */
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}