let a = 1 //' 1 = true, encendido'
let b = 0 //' 0 = false, apagado'

function tablaAnd(a,b){ 
    return a && b  
}

console.log(`${a} y ${b} = ${tablaAnd(a,b)}`)
console.log(`${b} y ${b} = ${tablaAnd(b,b)}`)
console.log(`${b} y ${a} = ${tablaAnd(b,a)}`)
console.log(`${a} y ${a} = ${tablaAnd(a,a)}`)

/*
A   B  = AND
1   0  =  0    
0   0  =  0
0   1  =  0
1   1  =  1*/


/*

// OR

A   B  =  OR
1   0  =  1
0   1  =  1
1   1  =  1
0   0  =  0


// XOR - exclusive OR ( Es uno o el otro, no pueden ser ambos)

A   B  =  OR
1   1  =  0
0   1  =  1
1   0  =  1
0   0  =  0

*/