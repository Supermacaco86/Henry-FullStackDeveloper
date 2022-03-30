//* Devuelve un saludo en tres diferentes lenguajes:
//* Si "idioma" es "aleman", devuelve "Guten Tag!"
//* Si "idioma" es "mandarin", devuelve "Ni Hao!"
//* Si "idioma" es "ingles", devuelve "Hello!"
//* Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!"
// Tu código:
function saludo(idioma) {
  if (idioma === 'aleman') return 'Guten Tag!'
  if (idioma === 'mandarin') return 'Ni Hao!'
  if (idioma === 'ingles') {return 'Hello!'} else {return 'Hola!'}
}
console.log('El saludo es : '+saludo('aleman'))
