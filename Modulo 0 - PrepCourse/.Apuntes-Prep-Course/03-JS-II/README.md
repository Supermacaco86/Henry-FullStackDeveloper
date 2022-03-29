<h1 align="center">
<img src="https://henry-11ty-resources.s3.sa-east-1.amazonaws.com/Assets/logo-henry-white-lg.png" min-width="350px" max-width="350px" width="350px"  alt="">


<h1 align="center">Tarea de homework III</h1>

En esta sección tratare de explicar los conceptos de:

- Operadores lógicos `&&`, `||`, `!`
- `switch`
- `while`, `do while`
- `for`
<h1></h1>

## 1°. Operadores lógicos

> `Operadores lógicos:` Los operadores lógicos se usan para combinar dos valores Booleanos y devolver un resultado verdadero, falso o nulo. También se denominan operadores Booleanos. 

* `Operador lógico AND (&&):` Cuando solo se incluyen valores booleanos (true o false), se devuelve verdadero si las dos expresiones son verdaderas. Si una o ambas expresiones son falsas, la sentencia completa se devolverá como falsa.

```javascript
true && true //devuelve el segundo valor, verdadero
true && false //devuelve el segundo valor, falso
false && false //devuelve el primer valor, falso
123 && 'abc' // devuelve el segundo valor, 'abc'
'abc' && null //devuelve el segundo valor, nulo
undefined && 'abc' //devuelve el primer valor, indefinido
0 && false //devuelve el primer valor, 0
```
* `Operador lógico OR ( || ):`Cuando solo se incluyen valores booleanos (true o false), se devuelve como true si cualquiera de las dos expresiones son verdaderas. Ambas expresiones pueden ser verdaderas, pero solo se necesita una para que el resultado sea verdadero.

```javascript
true || true //devuelve el primer valor, verdadero
true || false //devuelve el primer valor, verdadero
false || false //devuelve el segundo valor, falso
123 || 'abc' //devuelve el primer valor, 123
'abc' || null //devuelve el primer valor, 'abc'
undefined || 'abc' //devuelve el segundo valor, 'abc'
0 || false //devuelve el segundo valor, falso
```

* `Operador lógico NOT ( ! ):`El operador lógico NOT no realiza ninguna comparación como lo hacen los operadores AND y OR. Además, se opera en solo un operando. Se utiliza un símbolo "!" (signo de exclamación) para representar un operador NOT. 

### >> Usos del operador NOT
 1. Convertir la expresión en un booleano.
 2. Devolver el valor contrario del booleano obtenido en el último paso.

Para ello lo vamos a mostrar con un ejemplo:
```javascript
//spam puede ser igual a cualquiera de las cadenas de texto no vacías
var spam = 'rinki' 
// Porque la string vacía al convertirse en un booleano se devuelve como verdadera y lo contrario se devuelve como falso 
var booSpam = !spam 

 //spam2 es igual a una cadena de texto vacía
var spam2 = ''
// Porque la cadena de texto vacia al convertirse en un booleano se devuelve como falsa y lo contrario se devuelve como verdadero.
var booSpam2 = !spam2 
```
> Aqui una forma mas practica para entenderle a NOT `!`

#### `IGUALDAD`

* Igualdad (==) Verifica la igualdad de dos expresiones sin tener en cuenta el tipo de dato.

```javascript
2 == "2"  // devuelve True
```


* Igualdad estricta (===) Hace lo mismo que el anterior, pero verificando también que coincidan los tipos de datos.
```javascript
2 == "2"  // devuelve False
```
#### `DESIGUALDAD`

* Desigualdad (!=) Funciona de la misma forma que la igualdad, pero negándola.
```javascript
2 === "2"  // devuelve False
```

* Desigualdad estricta (!==) Lo mismo que la igualdad estricta, pero negándola.
```javascript
2 === "2"  // devuelve True
```


## 2°. STATMENT "`switch`"


> `switch:` Es utilizada para tomar decisiones en función de distintos estados o valores de una variable. 

Las estructuras de control son la manera con la que se puede dominar el flujo de los programas, para hacer cosas distintas en función de los estados de las variables. Es una alternativa para remplazar los if/else if.

Su sintaxis o forma de escribirse seria de la siguiente manera:
```javascript
switch (expresión) { 
   	case valor1: 
      	Sentencias a ejecutar si la expresión tiene como valor a valor1 
      	break 
   	case valor2: 
      	Sentencias a ejecutar si la expresión tiene como valor a valor2 
      	break 
   	case valor3: 
      	Sentencias a ejecutar si la expresión tiene como valor a valor3 
      	break 
   	default: 
      	Sentencias a ejecutar si el valor no es ninguno de los anteriores 
}
```
Funciona de la siguiente manera. Switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.

Debemos tener en cuenta que la variable que analizamos debe ir después de la instrucción switch entre paréntesis. Cada valor que se analiza debe ir luego de la palabra clave 'case' y seguido a los dos puntos, las instrucciones a ejecutar, en caso de verificar dicho valor la variable que analiza el switch.

Es importante disponer la palabra clave 'break' al finalizar cada caso. La instrucciones que hay después de la palabra clave 'default' se ejecutan en caso que la variable no se verifique en algún case. De todos modos el default es opcional en esta instrucción.
A continuación veremos un ejemplo de como funcionaria:

```javascript
switch (dia_de_la_semana) { 
   	case 1: 
      	console.log("Es Lunes") 
      	break 
   	case 2: 
      	console.log("Es Martes") 
      	break 
   	case 3: 
      	console.log("Es Miércoles") 
      	break 
   	case 4: 
      	console.log("Es Jueves") 
      	break 
   	case 5: 
      	console.log("Es viernes") 
      	break 
   	case 6: 
   	case 7: 
      	console.log("Es fin de semana") 
      	break 
   	default: 
      	console.log("Ese día no existe") 
}
```
## 3°. STATMENT "`while`" y "`do while`"

Estos bucles se utilizan cuando queremos repetir la ejecución de unas sentencias un número indefinido de veces, siempre que se cumpla una condición.

> `while:` Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia

Sintaxis: 

```javascript
while (condición){ 
   	//sentencias a ejecutar 
}
```
* condicion: Una expresión que se evalúa antes de cada paso del bucle. Si esta condición se evalúa como verdadera, se ejecuta sentencia. Cuando la condición se evalúa como false, la ejecución continúa con la sentencia posterior al bucle while.

* sentencia: Una sentecia que se ejecuta mientras la condición se evalúa como verdadera. Para ejecutar múltiples sentencias dentro de un bucle, utiliza una sentencia block ({ ... }) para agrupar esas sentencias. 

Por ejemplo: El siguiente bucle while itera mientras n es menor que tres.

```javascript
n = 0;
x = 0;
while (n < 3) {
  n ++;
  x += n;
}
```
Cada interación, el bucle incrementa `n` y la añade a `x`. Por lo tanto, `x` y `n` toman los siguientes valores:
 * Después del primer pase: `n` = 1 y `x` = 1
 * Después del segundo pase: `n` = 2 y `x` = 3
 * Después del tercer pase: `n` = 3 y `x` = 6

Después de completar el tercer pase, la condición n < 3 no será verdadera más tiempo, por lo que el bucle terminará.

> `do while:` Se utiliza generalmente cuando no sabemos cuantas veces se habrá de ejecutar el bucle, igual que el bucle WHILE, con la diferencia de que sabemos seguro que el bucle por lo menos se ejecutará una vez.

Sintaxis: 

```javascript
do { 
   	//sentencias del bucle 
} while (condición)
```
* sentencia: Una sentencia que se ejecuta al menos una vez y es reejecutada cada vez que la condición se evalúa a verdadera. Para ejecutar múltiples sentencias dentro de un bucle, utilice la sentencia block ({ ... }) para agrupar aquellas sentencias.

* condicion: Una expresión se evalúa después de cada pase del bucle. Si condición se evalúa como verdadera, la sentencia se re-ejecuta. Cuando condición se evalúa como falsa, el control pasa a la siguiente sentencia hacer mientras.


Por ejemplo: En el siguiente ejemplo, el bucle hacer mientras itera al menos una vez y se reitera hasta que i ya no sea menor que 5.

```javascript
do {
   i += 1;
   document.write(i);
} while (i < 5);

console.log(result)  // expected result: "12345"
```
## 2°. STATMENT "`for`"

> `for:`Este bucle se utiliza para repetir una o más instrucciones un determinado número de veces. De entre todos los bucles, el `for` se suele utilizar cuando sabemos seguro el número de veces que queremos que se ejecute.

La sintaxis es la siguiente:

```javascript
for (inicialización; condición; actualización) { 
   	//sentencias a ejecutar en cada iteración 
}
```
`for` tiene tres partes incluidas entre los paréntesis, que nos sirven para definir cómo deseamos que se realicen las repeticiones. 
 * `La primera parte es la inicialización`, que se ejecuta solamente al comenzar la primera iteración del bucle. En esta parte se suele colocar la variable que utilizaremos para llevar la cuenta de las veces que se ejecuta el bucle.
 * `La segunda parte es la condición`, que se evaluará cada vez que comience una iteración del bucle. Contiene una expresión para decidir cuándo se ha de detener el bucle, o mejor dicho, la condición que se debe cumplir para que continúe la ejecución del bucle.

 * Por último tenemos la actualización`, que sirve para indicar los cambios que queramos ejecutar en las variables cada vez que termina la iteración del bucle, antes de comprobar si se debe seguir ejecutando.

Veamos un ejemplo de como funciona.

```javascript
var i 
for (i=0;i<=10;i++) { 
   	console.log(i)  // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}
```
En este caso se inicializa la variable i a 0. Como condición para realizar una iteración, se tiene que cumplir que la variable i sea menor o igual que 10. Como actualización se incrementará en 1 la variable i.

Como se puede comprobar, este bucle es muy potente, ya que en una sola línea podemos indicar muchas cosas distintas y muy variadas, lo que permite una rápida configuración del bucle y una versatilidad enorme.

> Veamos otro ejemplo mas complicado pero a su vez mas práctico y que demuestra la versatilidad del statment.

```javascript
for (i = 1; i <= 6; i++) { 
   	document.write("<H" + i + ">Encabezado de nivel " + i + "</H" + i + ">") 
}
```
Lo que hace este bucle es escribir en una página web los encabezamientos desde `<H1>` hasta `<H6>` con un texto que ponga "Encabezado de nivel x".
>*****************************************************
> ## Podes ver su correcto funcionamiento en ['index.html'](scr='../03-JS-II/index.html)
>*****************************************************
> 

Veamos un ejemplo mas

```javascript
for (var i = 1; i < 10; i+=2) {
    if (i === 7) {
        break
    }
    console.log('i es igual a ' + i)
}
```
Nos dara como resultado en consola lo siguiente

```javascript
i es igual a 1
i es igual a 3
i es igual a 5
```
### Aca tendras acceso a las [Soluciones](https://github.com/atralice/Curso.Prep.Henry/blob/solution/03-JS-II/homework/homework.js)

<h1 align="center"></h1>
<h1 align="center">Gracias!!!! :rose:   XOXOXO