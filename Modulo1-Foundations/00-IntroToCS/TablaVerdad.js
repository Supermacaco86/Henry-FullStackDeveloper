
//$     ****   TABLAS DE LA VERDAD   ****
/*
? 0 = False
? 1 = True
$                      AND
?                  A   B  = AND
                   1   0  =  0    
                   0   0  =  0
                   0   1  =  0
                   1   1  =  1

$                      OR
?                  A   B  =  OR
                   1   0  =  1
                   0   1  =  1
                   1   1  =  1
                   0   0  =  0

$                      XOR - exclusive OR ( una salida verdadera resulta si una, y solo una de las entradas a la puerta es verdadera. Si ambas entradas son falsas o ambas son verdaderas, resulta en una salida falsa)
?                  A   B  =  OR
                   1   1  =  0
                   0   1  =  1         Martina ó Belen-----> Martina y Belen (NO = false)--->[Este es exclusivo]
                   1   0  =  1         Martina y/o Belen---> Martina y Belen (SI = true)
                   0   0  =  0

$                    NOT (es la negacion de lo que tengo)
?                  A   NOT
                   1    0
                   0    1
*/

/**
 * Tablas de la Vardad 
 * @param {Number} a = Vale Verdadero
 * @param {Number} b = Vale falso
 * @returns Condicion de a con respecto a b
 */

function tablaAnd(a,b){return a && b}
function tablaOr(a,b){ return a || b}
function tablaNot(a,b){ return a != b}
function tablaXor(a,b){return tablaOr(tablaAnd(a, !b), tablaAnd(!a, b))}
let a = 1, b = 0 

//* Tabla AND
console.log(`${a} y ${a} = ${tablaAnd(a,a)}`)
console.log(`${b} y ${b} = ${tablaAnd(b,b)}`)
console.log(`${a} y ${b} = ${tablaAnd(a,b)}`)
console.log(`${b} y ${a} = ${tablaAnd(b,a)}`)
//* Tabla OR
console.log(`${a} y ${a} = ${tablaOr(a,a)}`)
console.log(`${b} y ${b} = ${tablaOr(b,b)}`)
console.log(`${a} y ${b} = ${tablaOr(a,b)}`)
console.log(`${b} y ${a} = ${tablaOr(b,a)}`)
//* Tabla NOT
console.log(`${a} y ${b} = ${tablaNot(a,b)}`)
console.log(`${b} y ${a} = ${tablaNot(b,a)}`)
console.log(`${a} y ${b} = ${tablaNot(a,a)}`)
console.log(`${b} y ${a} = ${tablaNot(b,b)}`)
//* Tabla XOR
console.log(`${a} y ${a} = ${tablaXor(a,a)}`)
console.log(`${b} y ${b} = ${tablaXor(b,b)}`)
console.log(`${a} y ${b} = ${tablaXor(a,b)}`)
console.log(`${b} y ${a} = ${tablaXor(b,a)}`)
