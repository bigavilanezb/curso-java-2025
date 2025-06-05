let int = 15;

console.log(int);

let text = 'hola';

console.log(text);
/*
let a;

a = 7;

let b = a;

console.log(b);

let tituloDeLaPelicula;
let camelCaseBienPuesto;
let edadDelMonstruo;

let i = 7;
i = 5;
i = 3;
console.log(i); // ¿Qué valor se mostrará por consola?
*/

let c = 5;
let d = 7;
let e = c;
c = d;
d = e; 

// ... aquí y sólo aquí añadiremos las líneas de codigo
console.log('a: ', c); //Debería mostrar 7
console.log('b: ', e); //Debería mostrar 5

const t = 'texto2';
console.log('texto1 ' + t + 'texto3' );

const txt1 = 'Este es el principio';
const txt2 = 'Este es el final';
const txt3 = txt1 + ' ' + txt2;
console.log(txt3);

const euros = 7;
const dolares = 1.2 * 7;// Modificar sólo esta línea
console.log(dolares); // Debería mostrar 14

const precio = 100;
const precioConIva = precio * 1.21 ;// Modificar sólo esta línea
console.log(precioConIva); // Debería mostrar 121

const ancho = 4;
const alto = 7;
const area = ancho * alto;
console.log('El area del rectángulo es: ' + area);

const centigrados = 20;
const fahrenheit = ( centigrados * 1.8 ) +32; // Modificar sólo esta línea
console.log(fahrenheit); // Debería mostrar 68

const nombre = 'Juan';
const material = 'madera';
const dimensiones = 'diminutas';
const comentario = 'Que sea bonita, pero de una belleza estraña, indómita';
const caja = nombre + ' ha pedido una caja de ' + material + ' con unas dimensiones ' + dimensiones + '. ' + comentario;
const caja2 = `${nombre} ha pedido una caja de ${material} con unas dimensiones ${dimensiones}. ${comentario}`;

console.log(caja2)

let myVar = 87;
myVar++;
console.log(myVar);

let myVar2 = 11;
myVar2--;
console.log(myVar2);

let x = 3;
x++;
x = x * 2;
x--;
console.log(x); // ¿Cuánto valdrá x?

const dato1 = 10;
const dato2 = 10;
if(dato1 == dato2){
	console.log('exito');
}

if (10 == 10){
  console.log('You got a true!');
} else {
  console.log('You got a false!')
}

const nota = 4;

if (nota > 5) {
  console.log('Aprobado');
} else if (nota == 5 ) {
  console.log('Aprobado por los pelos');
} else {
  console.log('Suspenso');
}
/*
const i = 135;

if (i >= 0) {
  console.log('Es positivo')
} else {
  console.log('Es negativo')
}

if (i % 2 === 0) {
  console.log('Es par')
} else {
  console.log('Es es impar')
}

if (i % 5 === 0) {
  console.log('Es multiple de 5')
} else {
  console.log('No es multiple de 5')
}

if (i % 10 === 0) {
  console.log('Es multiple de 10')
} else {
  console.log('No es multiple de 10')
}

if (i >100) {
  console.log('Es mayor que 100')
} else {
  console.log('Es menor que 100')
}
*/
const n1 = 3;
const n2 = 7;
const op = '+';

if (op === '+') {
  console.log(n1 + n2);
} else if (op === '-') {
  console.log(n1 - n2);
} else if (op === '/') {
  console.log(n1 / n2);
} else if (op === '*') {
  console.log(n1 * n2);
}

const b = 10;

console.log(b > 0 ? 'b es positivo' : 'b es negativo');

const i = 18;

console.log( i % 2 === 0 ? 'es par' : 'es impar');

const color = 'amarillo';
switch(color) {
	case 'rojo':
		console.log('Has escogido rojo');
	break;
	case 'azul':
		console.log('Has escogido azul');
	break;
  case 'amarillo':
		console.log('Has escogido amarillo');
	break;
	default:
		console.log('No has escogido ningún color de la lista!');
}

const golosina = 'nubes';

switch(golosina) {
	case 'chicle':
		console.log('Has escogido un chicle');
	break;
	case 'gominola':
		console.log('Has escogido una gominola');
	break;
	case 'regaliz':
		console.log('Has escogido un regaliz');
	break;
		//Inserta tu código aquí
  default:
    console.log('No has escogido ninguna opción de la lista!');
}

for (let i = 0; i <= 100; i += 2) {
  console.log(i)
}

for (let i = 0; i <= 100; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

for (let i = 0; i <= 20; i++) {
  if ( i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}

let suma = 0;
for (let i = 5; i >= 0; i-- ){
  suma += i;
}

console.log(suma)

const number1 = 7;
const number2 = 0;
for (let i = 1; i <= 10; i++) {
  console.log('7 * ' + i + ' = ' + number1 * i)
}