/**
* Tablas de la Vardad 
* @param {Number} a = Vale Verdadero
* @param {Number} b = Vale falso
* @returns Condición de a con respecto a b
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
console.log(`${a} y ${a} = ${tablaNot(a,a)}`)
console.log(`${b} y ${b} = ${tablaNot(b,b)}`)
//* Tabla XOR
console.log(`${a} y ${a} = ${tablaXor(a,a)}`)
console.log(`${b} y ${b} = ${tablaXor(b,b)}`)
console.log(`${a} y ${b} = ${tablaXor(a,b)}`)
console.log(`${b} y ${a} = ${tablaXor(b,a)}`)



//Modificado en ubunt