<h1 align="center">
<img src="https://henry-11ty-resources.s3.sa-east-1.amazonaws.com/Assets/logo-henry-white-lg.png" min-width="350px" max-width="350px" width="350px"  alt="">

<h1 align="center">Tarea de homework IV</h1>

En esta sección tratare de explicar los conceptos de:


- `Arrays`

<h1></h1>

## 1°. Arrays

> `Arrays:` Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables.

En resumen podriamos decir que:

 - Son estructuras que nos permiten almacenar varios datos y agruparlos.
 - Se pueden llenar con cualquier tipo de dato válido en JavaScript y deben ir separados por comas
 - Se pueden mezclar tipos de datos, pero no es recomendable.
 - Se declaran con llaves cuadradas o corchetes `[ ]`
 - Pueden declararse vacíos o con un contenido ya establecido
 - Pueden añadirse o eliminarse elementos en el momento que queramos

A continuación vamos a ver algunas de las tantas cosas que se puede hacer con un array. Para ello vamos a definir primero un array y luego vamos iremos viendo que podemos hacer con el.

> el `array` es el siguiente:

```javascript
let numbers = [10,20,30,40,50,10]
```
### ¤ Propiedades de array
> Arrays`.length`: Devuelve el número de posiciones que contiene el array. `.length` es una propiedad de array.

```javascript
console.log(numbers.length) // 6
```
La propiedad `.length` es especial. Siempre devuelve el índice del último elemento más uno. Los índices del Array JavaScript están basados en 0: Comienzan en 0, no en 1. Esto significa que la propiedad length será uno más que el índice más alto almacenado en el arreglo (En el ejemplo anterior podemos ver que nos da como resultado 6, lo que significa que es 6 + 1).

###  ¤ Métodos de array

>  #### » `array.isArray`: Devuelve true si la variable es un array. 
* array.isArray(variable a evaluar)

```javascript
let number = 4
let numbers = [10,20,30,40,50,10]
console.log(Array.isArray(number)) // false
console.log(Array.isArray(numbers)) // true
```
> #### » `Eliminar un elementos`
        
* array.shift() - Elimina el primer elemento del array y devuelve ese element
* array.pop() - Elimina el último elemento de un array y devuelve ese elemento

```javascript
console.log(numbers) // [10, 20, 30, 40, 50, 10]
let deleteElement = numbers.shift()
console.log(numbers) // [20, 30, 40, 50, 10]
console.log(deleteElement); //10

console.log(numbers) // [20, 30, 40, 50, 10]
numbers.pop()
console.log(numbers) // [20, 30, 40, 50]
```
> #### » `Añadir elementos`

* array.unshift(element1, element2,...) - Añade uno o más elementos al comienzo del array y devuelve la nueva longitud.
* array.push(element1, element2,...) - Añade uno o más elementos al final del array y devuelve la nueva longitud.

```javascript
console.log(numbers) // [20, 30, 40, 50]
let newLength = numbers.push(6)
console.log(numbers) // [20, 30, 40, 50, 6]
console.log(newLength) // 5
let newLength2 = numbers.unshift(0) 
console.log(numbers) // [0, 20,30,40,50, 6]
```
> #### » `array.indexOf()` - Devuelve el primer índice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado.

```javascript
console.log(numbers) // [0, 20,30,40,50, 6]
console.log(numbers.indexOf(1)) // -1
```

> #### » `array.lastindexOf()` - Devuelve el último índice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado. 

```javascript
console.log(numbers) // [0, 20,30,40,50, 6]
console.log(numbers.lastIndexOf(1)) //-1
```


> #### » `array.reverse()` - Invierte el orden de los elementos del array.

```javascript
console.log(numbers) // [0, 20, 30, 40, 50, 6]
numbers.reverse()
console.log(numbers) // [6, 50, 40, 30, 20, 0]
```
> #### » `array.join()` - Devuelve un string con el separador que indiquemos, por defecto son comas 

```javascript
console.log(numbers) // [6, 50, 40, 30, 20, 0]
let arrayString = numbers.join(' ')
console.log(arrayString) // 6 50 40 30 20 0
console.log(numbers.join('-')) // 6 - 50 - 40 - 30 - 20 - 0
```


> #### » `array.splice()` - Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

1. a - Indice de inicio
2. b - Número de elementos (opcional)
3. items - Elementos a añadir en el caso de que se añadan. (opcional)

Aqui vamos a ver 4 resultados diferentes:
* Elimina desde la posicion a hasta el final

```javascript
console.log(numbers) // [6, 50, 40, 30, 20, 0]
numbers.splice(3)  
console.log(numbers) // [6, 50, 40]
```
* Elimina desde la posicion a el número valores que le indiquemos

```javascript
console.log(numbers) // [6, 50, 40]
numbers.splice(2,2) 
console.log(numbers) // [6, 50]
```
* Si b es un valor distinto de 0 elimina el número de valores que indiquemos en b y añade los valores de items a partir de la posicion a

```javascript
console.log(numbers) // [6, 50]
numbers.splice(2,2,10,23,54) 
console.log(numbers); // [6, 50, 10, 23, 54]
```
* Si b vale 0 añade los elementos a partir de la posicion a y no elimina ninguno
```javascript
console.log(numbers) // [6, 50, 10, 23, 54]
numbers.splice(2,2,10,23,54) 
console.log(numbers); // [6, 50, 10, 23, 10, 23, 54, 54]
```


> #### » `array.slice(a , b)` - Extrae elementos de un array desde el índice a hasta el índice b. Si no existe b lo hace desde a hasta el final, si no existe ni a ni b hace una copia del original.

Aqui tendremos 


```javascript
let newNumbers = numbers.slice(2,4)
console.log(numbers) // [6, 50, 10, 23, 10, 23, 54, 54]
console.log(newNumbers3) // [10, 23]

let newNumbers2 = numbers.slice(2);
console.log(numbers) // [6, 50, 10, 23, 10, 23, 54, 54]
console.log(newNumbers2) // [10, 23, 10, 23, 54, 54]

let newNumbers3 = numbers.slice() 
console.log(numbers) // [6, 50, 10, 23, 10, 23, 54, 54]
console.log(newNumbers3) // [6, 50, 10, 23, 10, 23, 54, 54]
```


>>*************************************************************************
>> ##### SI NO ENTENDIERON BIEN LOS 2 ÚLTIMOS: TRANQUILOS !!! yo tampoco !!! :laughing::laughing::laughing::laughing:
>>*************************************************************************

<h1 align="center"></h1>
<h1 align="center">Gracias!!!! :rose:   XOXOXO
