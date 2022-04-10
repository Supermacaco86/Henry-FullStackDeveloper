<h1 align="center">
<img src="https://henry-11ty-resources.s3.sa-east-1.amazonaws.com/Assets/logo-henry-white-lg.png" min-width="350px" max-width="350px" width="350px"  alt="">

<h1 align="center">Tarea de homework V</h1>

En esta sección tratare de explicar los conceptos de:


- `Objetos`
- `Propiedades`
- `Métodos`
- `Bucle for…in`
- `Notación de puntos vs notación de corchetes`

<h1></h1>

## `Objetos`

> `Objetos:` _Un objeto es una colección de datos relacionados y tiene propiedades asociadas a él. Los objetos usan un concepto llamado pares de `clave: valor` ó `key: value`._ 

La clave (key) es el identificador y el valor (value) es el valor que queremos guardar en esa clave. La sintaxis es `clave: valor`. Los objetos pueden contener muchos pares de `clave: valor`, deben estar separados por una coma (importante!!!: sin punto y coma dentro de un objeto). Las claves son únicas en un objeto, solo puede haber una clave de ese nombre, aunque, varias claves pueden tener el mismo valor. Los valores pueden ser cualquier tipo de dato de Javascript; cadena, número, booleano, matriz, función o incluso otro objeto. La creación de un objeto a menudo comienza con la definición e iniciación de una variable. 

A Continuación Crearemos un Objeto perosona:
```javascript
var persona = {
  nombre: ['Daniel', 'Calderon'],
  edad: 42,
  genero: 'masculino',
  intereses: ['música', 'leer'],
  bio: function () {
    console.log(this.nombre[0] + ' ' + this.nombre[1] + ', tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.')
  },
  saludo: function() {
    console.log('Hola, Soy '+ this.nombre[0] + ' !!! ')
  }
}
```
El valor de un miembro de un objeto puede ser prácticamente cualquier cosa: en nuestro objeto persona tenemos una cadena de texto, un número, dos arreglos y dos funciones. 

## `Propiedades`

>* `Propiedades` _del objeto serian los primeros cuatro elementos de datos y se denominan . Propiedades, una propiedad de un objeto se puede explicar como una variable adjunta al objeto. Las propiedades de un objeto básicamente son lo mismo que las variables comunes de JavaScript, excepto por el nexo con el objeto. Las propiedades de un objeto definen las características del objeto._

## `Métodos`
>* `Métodos` _serian los dos últimos elementos del `Objeto`, que basicamente seria funciones que le permiten al objeto hacer algo con esos datos._

Un objeto como este se conoce como un objeto literal — literalmente hemos escrito el contenido del objeto tal como lo fuimos creando. Esto está en contraste con los objetos instanciados de las clases, que veremos más adelante.

Es muy común crear un objeto utilizando un objeto literal cuando deseas transferir una serie de elementos de datos relacionados y estructurados de alguna manera, por ejemplo, enviando una solicitud al servidor para ponerla en una base de datos. Enviar un solo objeto es mucho más eficiente que enviar varios elementos individualmente, y es más fácil de procesar que con un arreglo, cuando deseas identificar elementos individuales por nombre.


## `Bucle for…in`

>  _te permite recorrer todas las propiedades de un objeto. No hay mucho más que explicar sobre esta estructura del bucle `for…in`, solo decir que de esta manera tal cual puedes acceder a los nombres de las propiedades del objeto._

Veamos una aplicación de este bucle `for…in` con un ejemplo sencillo:

```javascript
var diasMes = {
    Enero: 31,
    Febrero: 28,
    Marzo: 31,
    Abril: 30,
    Mayo: 31
}
for (var mes in diasMes){
    console.log(mes)  // Enero, Febrero, Marzo, Abril, Mayo
    console.log(diasMes[mes])   // 31, 28, 31, 30, 31
}
```
Te habrás dado cuenta que esta sintaxis para acceder a los valores de las propiedades es justamente igual a la sintaxis que se usa para acceder a valores de casillas de un array asociativo.

Bueno, pues sabiendo esto podrás acceder a los valores del objeto, uno por uno, con un bucle `for…in` muy parecido al que teníamos antes.

## `Notación de puntos vs notación de corchetes`

> _Hay dos formas de acceder a las propiedades del objeto: `Punto` y `Corchete`. Ambas acceden a las propiedades del objeto._

```javascript
const obj = {
  nombre: 'Daniel'
};
// Notación de puntos (Dot)
obj.nombre;  // 'Daniel'

// Notación de llaves (Bracket)
obj['nombre']; // 'Daniel'
```
Pero la pregunta es a menudo ¿Cuál debería usar? 🤯




<h1 align="center"></h1>
<h1 align="center">Gracias!!!! :rose:   XOXOXO
