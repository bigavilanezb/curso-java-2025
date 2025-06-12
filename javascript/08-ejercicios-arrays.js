// EJERCICIO 1
/*
const nombres = ['Alfredo', 'Alejandro', 'Alonso', 'Daniel', 'Jose']
for (let i = 0; i < nombres.length; i++) {
  console.log('Conozco a alguien llamado ' + nombres[i])
}
*/

// EJERCICIO 2
/*
const toArray = (a, b) => {
  const nuevoArray = []

  nuevoArray[0] = a;
  nuevoArray[1] = b;

  return nuevoArray;
}

const devolverArray = toArray(3, 7)
console.log(devolverArray)

// EJERCICIO 3

const numbers = [1,9,3,8,5,7]

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}

// EJERCICIO 4

const getFirstElement = (array) => array[0];

const devolverElemento = getFirstElement([14, 2]);
console.log(devolverElemento)

// EJERCICIO 5

const setFirstElement = (arr, num) => {
  arr = num;
  return arr;
}

const colocarPrimerElemento = setFirstElement([1, 2], 3);
console.log(colocarPrimerElemento);

// EJERCICIO 6

const getLastElement  = (arr) => {
  return arr[arr.length -1];
}

const colocarUltimoElemento = getLastElement ([1, 2, 3]);
console.log(colocarUltimoElemento); 

// EJERCICIO 7

const numbers = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];

let numPositivo = 0;
let numNegativo = 0;
let cero = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numPositivo++;
  } else if ( numbers[i] < 0 ) {
    numNegativo++;
  } else {
    cero++;
  }
}

console.log('Cantidad de positivos: ' + numPositivo);
console.log('Cantidad de negativos: ' + numNegativo);
console.log('Canidad de ceros: ' + cero);


// EJERCICIOS FOREACH

// EJERCICIO 1

const nombres = ['Alfredo', 'Alejandro', 'Alonso', 'Daniel', 'Jose']

nombres.forEach(nombre => console.log('Conozco a alguien llamado: ' + nombre));


// EJERCICIO 2

const numbers = [1,9,3,8,5,7];

numbers.forEach(number => console.log(number * 2));

// Ejercicio 3

const numbers = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];

let numPositivo = 0;
let numNegativo = 0;
let cero = 0;

numbers.forEach(number => {
  if (number > 0) {
    numPositivo++;
  } else if ( number < 0 ) {
    numNegativo++;
  } else {
    cero++;
  }
})

console.log('Cantidad de positivos: ' + numPositivo);
console.log('Cantidad de negativos: ' + numNegativo);
console.log('Cantidad de ceros: ' + cero);

*/

// EJERCICIO 4

const numbers = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];

let sumaPositivos = 0;
let sumaNegativos = 0;
let contadoresPositivos = 0;
let contadoresNgativos = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    sumaPositivos += numbers[i];
    contadoresPositivos++;
  } else if (numbers[i] < 0) {
    sumaNegativos += numbers[i];
    contadoresNgativos++;
  }
}

console.log('Media positivos: ' + sumaPositivos / contadoresPositivos);
console.log('Media negativos: ' + sumaNegativos / contadoresNgativos);