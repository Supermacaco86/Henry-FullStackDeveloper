<h1 align="center">
<img src="https://henry-11ty-resources.s3.sa-east-1.amazonaws.com/Assets/logo-henry-white-lg.png" min-width="350px" max-width="350px" width="350px"  alt="">

<h1 align="center">Tarea de homework V</h1>

En esta sección tratare de explicar los conceptos de:


* `prototype`
* `_Constructors_ (de Clases)`

<h1></h1>

## `Prototype`

> `Prototype:` _Un objeto es una colección de datos relacionados y tiene propiedades asociadas a él. Los objetos usan un concepto llamado pares de `clave: valor` ó `key: value`._ 

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




<h1 align="center"></h1>
<h1 align="center">Gracias!!!! :rose:   XOXOXO
