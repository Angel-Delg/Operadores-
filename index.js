//Tipos de operadores en JavaScript

/* Operadores Aritmeticos +, -, *, /  */
//Declaramos un array de valores
const valores = [ 3,4,5,6,7,7 ]

let suma = valores[2] + valores[valores.length -1]
console.log(suma)
/* Sumamos los valores que tiene el array
En este caso sumanos la posicción 2 del array con su ultimo valor*/

let resta = valores[1] - valores[valores.length -1]
console.log(resta)
// Este caso es una resta

let multiplicacion = valores[4] * valores[2]
console.log(multiplicacion)

let divicion = valores[0] / valores[valores.length -1]
console.log(divicion)

//Imprimir todos los valores
console.log(`La suma es: ${suma}, 
la resta es: ${resta}, 
la multiplicación es: ${multiplicacion} 
y la división es: ${divicion}`)

//Creamos un Objeto de funiones que usen los operadors aritmeticos
const aritmetica = {
    suma: ( valor1,valor2 ) => {
        const datos = [ 4,5,6,3,2,4 ]

        valor1 = datos[2]
        valor2 = datos[datos.length -1]

        const resultado =  valor1 + valor2
        return  console.log( resultado ) 
    },
    resta: ( valor1,valor2 ) => {
        const datos = [ 4,35,22,56,12,23  ]
        valor1 = datos[datos.length -1]
        valor2 = datos[3]

        const resultado = valor1 - valor2
        return console.log( resultado ) 
    },
    multiplicacion: ( valor1,valor2 ) => {
        const datos = [ Math.random(),Math.random(),Math.random(),Math.random(),Math.random() ]
        valor1 = datos[3]
        valor2 = datos[datos.length -1]

        console.log(valor1, valor2)
        const resultado = valor1 * valor2
        return console.log( resultado ) 
    },
    divicion: ( valor1,valor2 ) => {
        const datos = [ Math.random() * 10,Math.random() * 20,Math.random() * 30,Math.random() * 40,Math.random() * 50 ]
        valor1 = datos[0]
        valor2 = datos[datos.length -1]

        console.log(valor1, valor2)
        const resultado = valor1 * valor2
        return console.log( resultado ) 
    }
}

aritmetica.divicion() // Llamamos a las funciones de los objetos
console.log('/////////////////////////////////////////')
//Operadores de incremento y decremento 

let x = 2
x++   // resultado es 3, debido a que esta exprecion x++ es igual ==> x = x + 1
console.log(x)

let y = 1
y += 3 
console.log(y) // ==> Obtiene el valor de 4

y--
console.log(y) // ==> Obtiene el valor de 3

--y
console.log(y) // ==> Obtiene el valor de 2

// Operador de modulo 
let modulo = 10

modulo = modulo % 3 
console.log(modulo)

// <, >, <=, >=

let valor = 22

console.log( valor > 10 )  // verdadero
console.log( valor < 10 )   //Falso
console.log( valor >= 10 ) //Verdadero
console.log( valor <= 10 ) //Falso


/*
 1 igual es asignación de variable  ( = )
 2 iguales es comparación de valores  ( == ) 
 3 igules es comparación de tipo de datos ( === )

 */