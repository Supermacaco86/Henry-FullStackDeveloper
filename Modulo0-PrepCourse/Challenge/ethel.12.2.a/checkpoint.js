
/* 
La función llamada 'menorMayor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un arreglo que contenga el menor número del arreglo 'numeros' en la posición cero y el mayor número del arreglo 'numeros' en la posición 1.
Ej:
menorMayor([4, 6, 1, 7, 15]) debe retornar [1, 15]
ya que 1 es el número más chico (menor) dentro del arreglo [4, 6, 1, 7, 15]
y 15 es el número más grande (mayor) dentro del arreglo [4, 6, 1, 7, 15]
*/
//* Tu código aca:
function menorMayor(numeros) {
  let array=[numeros[0], numeros[0]]
  
  for (var i = 1; i< numeros.length; i++){ 
    if (numeros[i] > array[1]){array[1] = numeros[i]}
    if (numeros[i] < array[0]){array[0] = numeros[i]}
  }
  return array
}

/*
La funcion llamada "cuantosOnline" recibe como argumento un objeto 'usuarios', cada property de ese objeto es un objeto cada usuario tiene una property 'online' que es un booleano. Deberia devolver la cantidad de usuarios con la property online igual a true.
Por ej:
let usuarios = {
    toni: {
        edad: 33,
        online: true
    },
    emi: {
        edad: 25,
        online: true
    },
    fran: {
        edad: 25,
        online: false
     },
     agus: {
        edad: 24,
        online: false
    }
}; 
cuantosOnline(usuarios) devuelve 2
Tip: Podes usar el metodo for...in
*/                     
//* Tu código aca:
function cuantosOnline(usuarios) {
  let onLine =0, offLine = 0

  for (let estado in usuarios){usuarios[estado].online === true ? onLine++ : offLine++}
  return onLine
}

/*
La funcion llamada 'divisores' recibe como argumento un numero (entero) y debe devolver un array con los divisores exactos de 'numero'. Si el numero no tiene divisores ( exeptuando el 1 y el mismo ) deberia devolver el string 'Es primo'
Nota: El array no debe contener el 1 y el mismo numero.
Por ej:
divisores(15) devuelve [3, 5]
divisores(11) devuelve 'Es primo'
*/
//* Tu código aca:
function divisores(numero) {
  let resultado = []
  for (let i = 2; i < numero; i++) {
      let divisor = numero % i
      if(divisor === 0) {resultado.push(i)}
  }
if(resultado.length === 0) {return 'Es primo'} else {return resultado}
}

/*  
La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de actividades (strings) llamados 'persona1' y 'persona2' y debe devolver un array de strings con las actividades en comun ( aquellas que se repiten ) entre cada array.
ej: persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
    persona2 = ['comer', 'dormir', 'futbol']
actividadesEnComun(persona1, persona2) => ['comer', 'dormir']
Tip: podes usar ciclos for anidados.
*/
//* Tu código aca:
function actividadesEnComun(persona1, persona2) {
  var coincidencias=[]

  for(var i=0; i < persona1.length; i++) {
      for(var hobby of persona2) {
          if(persona1[i] === hobby ) {coincidencias.push(hobby)}
      }
  }
  return coincidencias
}

/*  
La funcion llamada 'palabraMasLarga' recibe un array 'array' de frases (strings) como parametro y debe devolver la palabra mas larga entre todas las frases ( Es decir la palabra con mayor cantidad de caracteres)
Por ej:
palabraMasLarga(['hola esto string', 'frase con palabra']) debe devolver 'palabra'
*/
//* Tu código aca:
function palabraMasLarga(array) {
    var palabra = ''
    array.forEach(function (string) {
        var array = string.split(' ')
        for (var i = 0; i < array.length; i++) {
            if (palabra.length < array[i].length) {palabra = array[i]}
        }
    }
    )
    return palabra
}

function crearClaseEmprendedor() {
  class Emprendedor {
    /*
    El constructor de la clase Emprendedor recibe nombre (string), apellido (string), libros (array de objetos), mascotas (array de strings)
    Inicializar las propiedades del emprendedor con los valores recibidos como argumento
    */
    //* Tu código aca:
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;
      this.emprendedor = function(){
        return {
        nombre : this.nombre,
        apellido : this.apellido,
        libros : this.libros,
        mascotas : this.mascotas,
        }
      }
    } 

    // este método debe agregar una mascota (mascota) al arreglo de mascotas del emprendedor. no debe retornar nada.
    //* Tu código aca:
    addMascota(mascota) {
      this.mascotas.push(mascota)
    }

    /*
    El método 'getMascotas' debe retornar la cantidad de mascotas que tiene el emprendedor.
    Ej:
    Suponiendo que el emprendedor tiene estas mascotas: ['perro', 'gato']
    emprendedor.getMascotas() debería devolver 2
    */
    //* Tu código aca:
    getMascotas() {
      let mascotas = ['perro', 'gato']
      return this.mascotas.length
    }

    /*
    El método 'addBook' recibe un string 'book' y un string 'autor' y debe agregar un objeto:
    { nombre: book, autor: autor} al arreglo de libros del emprendedor.
    No debe retornar nada.
    */
    //* Tu código aca:
    addBook(book, autor) {
      this.libros.push({nombre: book, autor: autor})
    }

    /*
    El método 'getBooks' debe retornar un arreglo con sólo los nombres del arreglo de libros del emprendedor.
    Ej:
    Suponiendo que el emprendedor tiene estos libros: [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}]
    emprendedor.getBooks() debería devolver ['El señor de las moscas', 'Fundacion']
    */
    //* Tu código aca:
    getBooks() {
      let arreglo = []
      for(var i = 0; i < this.libros.length; i++){
        arreglo.push(this.libros[i].nombre)
      }
      return arreglo
    }

    /*
    El metodo getFullName debe retornar un string con el nombre y apellido del emprendedor.
    ej:
    Suponiendo que el emprendedor tiene: nombre: 'Elon' y apellido: 'Musk'
    emprendedor.getFullName() deberia devolver 'Elon Musk'
    */
    //* Tu código aca:
    getFullName() {
      return this.nombre + ' ' + this.apellido
    }
  }
  return Emprendedor
}

/* ====================== EXTRA CREDIT ===================== */
// Este ejercicio no cuenta en el puntaje del checkpoint
// pero si llegas hasta aca y lo haces quiere decir que venis super bien!

/*
Escribi una funcion llamada 'repeatCharacters' en el prototypo del objeto global String que reciba como parametro un string y devuelve un string en donde cada letra se repita una vez.
Por ej:
'hola'.repeatCharacters() devuelve "hhoollaa"
*/
//* Tu código aca:
function repetirCaracteres() {
  String.prototype.repeatCharacters = function () {
    let texto = this
    let nuevoTexto = ''
    for (var i = 0; i< texto.length; i++) {
      let letra = texto[i]
      nuevoTexto += letra.charAt().repeat(2)
    }
    return nuevoTexto
  }
}

module.exports = {
  menorMayor,
  divisores,
  cuantosOnline,
  actividadesEnComun,
  palabraMasLarga,
  crearClaseEmprendedor,
  repetirCaracteres
}
