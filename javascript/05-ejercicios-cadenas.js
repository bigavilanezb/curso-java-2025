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