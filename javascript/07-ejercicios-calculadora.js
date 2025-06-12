// EJERCICIO 1
/*
const number1 = Number(prompt('Introduce el primer número'));
const number2 = Number(prompt('Introduce el segundo número'));
const op = prompt('Introduce el tipo de operación');

let resultado;
  if (op === '+') {
    resultado = number1 + number2;
  } else if (op === '-') {
    resultado = number1 - number2;
  } else if (op === '*') {
    resultado = number1 * number2;
  } else if (op === '/') {
    resultado = number1 / number2;
  } else {
    return 'Eso no es un operador valido';
  }

alert(resultado);
*/

// EJERCICIO 2

/*
const number = Math.floor(Math.random() * 5) + 1;

alert(number);

const respuesta = Number(prompt('Introduce el número'));
if (number === respuesta) {
  alert('respuesta correcta!')
} else {
  alert('Respuesta incorrecta!')
}
  */

// EJERCICIO 3

/*

const number = Math.floor(Math.random() * 5) + 1;

let intentos = 3;
let jugador = true;
while (jugador) {
  const respuesta = Number(prompt('Introduce el número'));
  if (number === respuesta) {
    alert('Respuesta correcta!')
    jugador = false;
  } else {
    alert('Haz fallado!')
    intentos--;
    if (intentos === 0) {
      jugador = false;
      alert('Hemos perdido')
    }
  }
}

alert('Fin de la partida!') 
*/

// EJERCICIO 4

/*
const dni = prompt('Introduce tu DNI');

const getDNILetter = (number) => {
  if(number.length === 8 && Number(dni)){
    const calc = number % 23;
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const dniConLetra = letras.charAt(calc);
    return dniConLetra;

  } else {
    return null;
  }
}

const dniConLetra = getDNILetter(dni);
console.log(dniConLetra);*/

// EJERCICIO 5

/*

const numNoches = prompt('numero de noches');
const destino = prompt('destino');

const costeHotel = (noches) => noches * 140;

const costeAvion = (ciudad, noches) => {
  let precio;
  if (ciudad === 'Oviedo') {
    precio = 15;
  } else if (ciudad === 'Tokyo') {
    precio = 700;
  } else if (ciudad === 'Madrid') {
    precio = 90;
  } else if (precio === 'Barcelona') {
    precio = 90;
  }

  if (noches > 3) {
    noches *= 0.10;
  }

  return precio;
}

const costeAlquilerCoche = (noches) => {
  let alquiler = noches * 40;
  if (noches >= 3) {
    alquiler - 20;
  } else if (noches >= 7) {
    alquiler - 50;
  }

  return alquiler
}

const resultado1 = costeHotel(numNoches);
const resultado2 = costeAvion(destino, numNoches);
const resultado3 = costeAlquilerCoche(numNoches);
console.log("Coste hotel: " + resultado1);
console.log("Coste viaje: ", resultado2);
console.log("Coste alquiler coche: ", resultado3);
console.log("Total:", resultado1 + resultado2 + resultado3);  

*/

// EJERCICIO 6

/*

let jugador = true;

while (jugador) {
  const respuesta = Math.floor(Math.random() * 2) + 1;
  alert(respuesta)

  const pregunta = Number(prompt('1. Nuestro heroe entra en una mazmorra con dos puertas. La puerta 1 y la puerta 2. Una puerta lleva a una muerte segura y la otra a otra mazmorra. 1/2'))

  if (pregunta === respuesta) {
    alert('Has elegido la puerta correcta')
  } else {
    alert('Mala suerte. El dragón te come.')
    jugador = false;
  }
}

*/

// EJERCICIO 7

let isPlayer = true;

const tieneNumeros = (txt) => /\d/.test(txt);

while (isPlayer) {
  const name = prompt('Introduzca su nombre, por favor.')
  
  if (!tieneNumeros(name)) {
    const nombreReal = prompt('El nombre introducido no tiene ningún número. ¿Es su nombre real? yes/no')
    if (nombreReal === 'yes') {
      isPlayer = false;
      alert('Seguimos con el proceso de registro')
    } else {
      alert('Los datos introducidos son incorrectos. El nombre introducido tiene un número.')
    }
  } else {
    alert('El nombre introducido tiene números. Debe volver a introducir su nombre');
}
}