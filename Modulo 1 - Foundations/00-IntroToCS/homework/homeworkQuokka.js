function BinarioADecimal(num) {
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        //sum += +num[i] * Math.pow([i],2)
        sum += Math.pow(2, num.length - (i + 1)) * num[i]
    }
    return sum
}

console.log(BinarioADecimal("101100"))

function DecimalABinario(num){
    //let number = parseInt(num); resultado = number.toString(2)
    //return resultado
    var binario = ''
    while ( num > 0){
        binario = num % 2 + binario
        num = Math.floor(num / 2)
    }
    return binario
}

console.log(DecimalABinario(44))

