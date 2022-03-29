<h1 align="center">
<img src="https://henry-11ty-resources.s3.sa-east-1.amazonaws.com/Assets/logo-henry-white-lg.png" min-width="350px" max-width="350px" width="350px"  alt="">

<h1 align="center">Explicaciones de homework II</h1>

En esta sección tratare de explicar los conceptos de:

- Variables
- Strings
- Funciones ( `argumentos `, `return`)
- Declaraciones `if`
- Valores booleanos (`true` y `false`)
<h1></h1>


## 1°. `Variables`

> `Las variables son contenedores que pueden tener un valor o no`, para poder ser usadas luego en alguna operación. Un detalle de estas es que tambien pueden cambiar su valor según vayamos modificando nuestro código.

Debemos tener en cuenta que las variables `contienen valores`, pero no representa los valores en si.
Para ellos primero debemos crearlas, a lo cual a esto le llamaremos `DECLARAR` una variable. Luego de eso la tenemos que
`INICIAR` para ello lo haremos utilizando el signo `=`, lo cual una variable `declarada` e `iniciada` nos quedaría de la siguiente forma:

```javascript
var nombre = 'Daniel';
var edad = 42;
var estudiante = true;
```

hay tres tipos de declaraciones de variables.

- `var` Declara una variable, opcionalmente la inicia a un valor.
- `let` Declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor.
- `const` Declara un nombre de constante de solo lectura y ámbito de bloque.

Cuando se declara una variable fuera de cualquier función, se denomina variable global, porque está disponible para cualquier otro código en el documento actual. Cuando se declara una variable dentro de una función, se llama variable local, porque solo está disponible dentro de esa función. Esa es la diferencia entre `var` con `let` y `const`.

## Un consejo sobre las reglas de nomenclatura de variables

- Existen limitaciones. En general, debe usarse caracteres latinos (0-9, a-z, A-Z)
- No use guiones bajos al comienzo de los nombres de las variables — esto se usa en ciertas construcciones de JavaScript para significar cosas específicas, por lo que puede resultar confuso.
- No uses números al comienzo de las variables. Esto no está permitido y provoca un error.
- Una convención segura a seguir es la llamada "minúscula mayúsculas intercaladas", o notacion camel case.
- Haz que los nombres de las variables sean intuitivos, para que describan los datos que contienen.
- No uses solo letras/números o frases grandes y largas.
- Las variables distinguen entre mayúsculas y minúsculas — por lo tanto myage es una variable diferente de myAge.
- Evitar el uso de palabras reservadas de JavaScript como nombres de variables.

## 2°. `String`

> Los “String” son objetos de java con una sintaxis especialmente cómoda para representar cadenas de caracteres. Los caracteres se codifican usando Unicode. Java permite escribir directamente cadenas entre comillas.

las variables de tipo texto son objetos de la clase String. Esto quiere decir que cada una de las variables que creamos de tipo texto tienen una serie de propiedades y métodos. Recordamos que las propiedades son las características, como por ejemplo longitud en caracteres del string y los métodos son funcionalidades, como pueden ser extraer un substring o poner el texto en mayúsculas.

Para crear un objeto de la clase String lo único que hay que hacer es asignar un texto a una variable. El texto va entre comillas, como ya hemos visto. También se puede crear un objeto string con el operador new, que veremos más adelante.

Mas adelante estudiaremos mas acerca de este objeto de JavaScript ya que tiene varios metodos que podemos ir incorporando a medida que vamos avanzando.

## 3°. `Funciones`

> Una función es un conjunto de instrucciones que se agrupan para realizar una tarea concreta y que se pueden reutilizar fácilmente.

Al igual que las variables tiene un formato muy simple el cual voy explicar de manera sancilla.

Para crear una función usaremos la palabra clave `function` primero, luego va el nombre de función, luego una lista de parámetros entre paréntesis (separados por comas, o también puede estar vacía o sin argumentos) y finalmente el código de la función, entre llaves también llamado “el cuerpo de la función”, que es la porcion de codigo que se va a reutilizar de a cuerdo a las nesecidades de cada uno. por lo tanto nos quedaria algo asi:

```javascript
// Sin Argumentos
var a = 4;
var b = 5;
function suma() {
  return a + b;
}
console.log(suma()); // 9

//con Argumentos
function suma(x, y) {
  return x + y;
}
console.log(suma(4, 5)); // 9
```

## Que son los Argumentos?

Aca vamos a aclarar 2 términos importantes y que hacen mucha diferencia en JavaScript. Por un lado vamos a tener `Parametros` y por otro lado `Argumentos`.

* `Parametros:` Son las variables que se ponen cuando se define una función. Por ejemplo, en la siguiente función tenemos dos parámetros `a` y `b`.

```javascript
var a = 4;
var b = 5;
function suma() {
  return a + b;
}
console.log(suma()); // 9
```

* `Argumentos:` Son los valores que se pasan a la función cuando ésta es invocada, de esta manera, en el siguiente ejemplo tendríamos que `4` y `5`. son los argumentos de nuestra invocación a la función:
```javascript
function suma(x, y) {
  return x + y;
}
console.log(suma(4, 5)); // 9
```
## Para que se utiliza `return`?
Las funciones en Javascript también pueden retornar valores. De hecho, ésta es una de las utilidades más esenciales de las funciones, que debemos conocer, no sólo en Javascript sino en general en cualquier lenguaje de programación. De modo que, al invocar una función, se podrá realizar acciones y ofrecer un valor como salida. Este valor de salida se hace a travez de la palabra `return`. Analizaremos el siguiente ejemplo para tratar de entenderlo.
```javascript
function suma(x, y) {
  return x + y;
}
console.log(suma(4, 5)); // 9
```
## La sentencia `return` tiene dos usos importantes. 
* Primero, fuerza una salida inmediata de la función en que se encuentra. O sea, hace que la ejecución del programa vuelva al código que llamó a la función. 
* En segundo lugar, se puede utilizar para devolver un valor.La vuelta de una función ocurre cuando se ha ejecutado la última sentencia de la función y, conceptualmente, se encuentra la llave } del final de la función. Todas las funciones, devuelven un valor. Este valor se especifica explícitamente en la sentencia `return`. Si no se encuentra la sentencia `return`, el valor devuelto por la función queda técnicamente indefinido. 

## 3°. `Sentencia if`

> `if` es una estructura de control utilizada para tomar decisiones. Es un condicional que sirve para realizar unas u otras operaciones en función de una expresión. Funciona de la siguiente manera, primero se evalúa una expresión, si da resultado positivo se realizan las acciones relacionadas con el caso positivo. Opcionalmente se pueden indicar acciones a realizar en caso de que la evaluación de la sentencia devuelva resultados negativos.

```javascript
function esPositivo(numero) {
    if (numero === 0) {
        return false
    } 
    else if (numero > 0){
        return 'Es positivo'
    } 
    else {
        return 'Es negativo'
    }
}
console.log(esPositivo(0))   // false
console.log(esPositivo(5))   // 'Es positivo'
console.log(esPositivo(-6))  // 'Es negativo'

```

Es este caso la sentencia `if` tiene que realizar 3 desiciones:
* Si el número es 0, devuelve false
* Si el número es positivo, o sea mayor a `0` devolver ---> "Es positivo"
* Si el número es negativo, o sea menor a `0` devolver ---> "Es negativo"

## 1°. `Valores booleanos (`true` y `false`)`

> Un booleano de JavaScript representa uno de dos valores: verdadero o falso . 

Muy a menudo, en programación, necesitará un tipo de datos que solo pueda tener uno de dos valores, como:
* SÍ / NO
* ENCENDIDO / APAGADO
* VERDADERO / FALSO

Para ello, JavaScript tiene un tipo de datos booleano . Solo puede tomar los valores verdadero o falso . Dependiendo de lo que reciba el constructor de la clase Bolean el valor del objeto boleano que se crea será verdadero o falso, de la siguiente manera. 
* Se inicializa a false cuando no pasas ningún valor al constructor, o si pasas una cadena vacía, el número 0 o la palabra false sin comillas.
* Se inicializa a true cuando recibe cualquier valor entrecomillado o cualquier número distinto de 0.

Se puede comprender el funcionamiento de este objeto fácilmente si examinamos unos ejemplos.

```javascript
var b1 = new Boolean();
console.log(b1 + '')       // false

var b2 = new Boolean('');
console.log(b2 + '')       // false

var b25 = new Boolean(false);
console.log(b25 + '')      // false

var b3 = new Boolean(0);
console.log(b3 + '')       // false

var b35 = new Boolean('0');
console.log(b35 + '')      // true

var b4 = new Boolean(3);
console.log(b4 + '')       // true

var b5 = new Boolean('Hola');
console.log(b5 + '')       // true
```

<h1 align="center"></h1>
<h1 align="center">Gracias!!!! :rose:   XOXOXO
