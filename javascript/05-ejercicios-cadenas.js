const longitud = (nombre) => nombre.length;

const nombreLongitud = longitud('Bryan')
console.log('La longitud de la palabra es: ' + nombreLongitud);

const devuelvePrimeraLetra = (palabra) => palabra.charAt(0);

const primeraLetra = devuelvePrimeraLetra('Alfred');
console.log('La primera letra es: ' + primeraLetra);

const devuelveUltimaLetra = (letra) => letra[letra.length - 1];

const ultimaLetra = devuelveUltimaLetra('Alejandro');
console.log(ultimaLetra);

const devuelveEnesimaLetra = (enesimaLetra, num) => enesimaLetra[num];

const devuelveLetra = devuelveEnesimaLetra('Franklin', 6);
console.log(devuelveLetra);

const separarPalabra = (dividir) => dividir.substring(3, 7);

const devolverString = separarPalabra('wonderful day');
console.log(devolverString);

const toCase = (uppercase) => {
  return uppercase.toLowerCase() + '-' + uppercase.toUpperCase();
}

const devolverCase = toCase('maria');
console.log(devolverCase);

const iniciales = (palabra1, palabra2) => palabra1[0] + palabra2[0];

const devolverIniciales = iniciales('Maria', 'Jose');
console.log(devolverIniciales)

const firstChar = (txt) => {
  return txt.trim()[0];
}

const devolverPalabra = firstChar('       hola hola')
console.log(devolverPalabra);

const devuelveMasLarga = (txt1, txt2) => txt1.length >= txt2.length ? txt1 : txt2;

const devolverLarga = devuelveMasLarga('Alfredo', 'Fernando');
console.log(devolverLarga);

const devuelveMasLarga2 = (txt1, txt2, txt3) => {
  if (txt1.length >= txt2.length && txt1.length >= txt3.length) {
    return txt1;
  } else if (txt2.length >= txt1.length && txt2.length >= txt3.length) {
    return txt2;
  } else {
    return txt3;
  }
}

const devolverLarga2 = devuelveMasLarga2('Alfredo', 'Alonso', 'Alejandro');
console.log(devolverLarga2);

const generarNombre = (n1, n2 , n3) => {
  if (n1.length < 5 || n2.length < 5 || n3.length < 5) {
    return 'error';
  } else {
    return n1.substring(0, 2) + n2.substring(0, 2) + n3.substring(0, 2);
  }
}

const devolverNombres = generarNombre('Inazuma', 'Eleven', 'Pokemon');
console.log(devolverNombres);

const generarNombre2 = (n1, n2 , n3) => {
  if (n1.length < 5 || n2.length < 5 || n3.length < 5) {
    return 'error';
  } else {
    return n1.slice(-1) + n2.slice(-1) + n3.slice(-1);
  }
}

const devolverNombres2 = generarNombre2('Persona', 'Cuatro', 'Revival');
console.log(devolverNombres2);

const generarNombre3 = (n1, n2 , n3) => {
  if (n1.length < 5 || n2.length < 5 || n3.length < 5) {
    return 'error';
  } else {
    return n1.slice(-3) + n2.slice(-3) + n3.slice(-3);
  }
}

const devolverNombres3 = generarNombre3('Persona', 'Cuatro', 'Revival');
console.log(devolverNombres3);

const tieneLetra = (txt, char) => txt.includes(char);

const devolverLetra = tieneLetra('buenos dias', '');
console.log(devolverLetra);

const tieneLetra2 = (txt, char) => txt.toUpperCase().includes(char.toUpperCase());

const devolverLetra2 = tieneLetra2('astronauta', 'A');
console.log(devolverLetra2);

const crearPalabra = (char, number) => char.repeat(number);

const devolverCrearPalabra = crearPalabra('g', 9);
console.log(devolverCrearPalabra);

const crearPalabra2 = (char, number) => char.toUpperCase().repeat(number);

const devolverCrearPalabra2 = crearPalabra2('h', 4);
console.log(devolverCrearPalabra2);

const addGuiones = (txt) => {
  let palabra = '';
  for(let i = 0; i < txt.length; i++){
    const guion = txt[i];
    palabra += guion + '-';
  }
  return palabra;
}

const devolverGuiones = addGuiones('Portugal')
console.log(devolverGuiones);

const contadorDeLetras = (txt, letra) => {
  let contador = 0;
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] === letra) {
      contador++;
    }
  }

  return contador;
}

const numeroLetras = contadorDeLetras('absooooolutamente', 'o');
console.log(numeroLetras);

const contadorDeLetras2 = (txt1, txt2, letra) => {
  let contador1 = 0;
  let contador2 = 0;
  if (txt1.length > txt2.length) {
    for (let i = 0; i < txt1.length; i++) {
      if (txt1.toUpperCase()[i] === letra.toUpperCase()) {
        contador1++;
      }
    }
  } else if (txt2.length > txt1.length) {
    for (let i = 0; i < txt2.length; i++) {
      if (txt2.toUpperCase()[i] === letra.toUpperCase()) {
        contador2++;
      }
    }
  } else {
    return 'Son iguales';
  }

  return contador1 > contador2 ? txt1 : txt2;
}

const numeroLetras2 = contadorDeLetras2('absooooolutamente', 'honor', 'O');
console.log(numeroLetras2);


// Ejercicio 22

const indexOfIgnoreCase = (txt1, txt2) => {
  return txt1.toUpperCase().indexOf(txt2.toUpperCase());
}

const devolverIndex = indexOfIgnoreCase('amor', 'OR');
console.log(devolverIndex);

const firstWord = (txt) => {
  const espacio = txt.indexOf(' ');
  const palabra = txt.substring(0, espacio);
  return palabra;
}

const devolverPrimeraPalabra = firstWord("see and stop");
console.log(devolverPrimeraPalabra);