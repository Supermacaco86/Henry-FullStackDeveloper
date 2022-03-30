//* Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre". Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad". Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
//* Devuelve el objeto
// Tu código:
function crearGato(nombre, edad) {
    var gato = {
    nombre: nombre,
    edad: edad,
    meow: function (){return 'Meow!'}
    }
    return gato
}
console.log(crearGato('Felipe', 5))