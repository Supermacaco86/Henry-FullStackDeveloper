x = 1                          // x contiene a 1 pero no esta declarada como variable, pero esta en el ambito global 
var a = 5                      // a contiene a 5 y es una variable declarada en ambito global
var b = 10                     // b contiene a 10 y es una variable declarada en ambito global
var c = function(a, b, c) {    // c es una funcion con otra funcion adentro.
  var x = 10
  console.log(x)
  console.log(a)
  var f = function(a, b, c) {
    b = a
    console.log(b)
    b = c
    var x = 5
  }
  f(a,b,c)
  console.log(b)
}
c(8,9,10)
console.log(b)
console.log(x)

