const myNumber = 12.4032;

// Transformar número para string
const numberAsString = myNumber.toString();
console.log('Número tranformado em string: ', typeof numberAsString);

// Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('Número com duas casas decimais:', fixedTwoDecimals);

// Transforma uma string em float
console.log('String parseada para float:', parseFloat('13.22'));

// Transforma uma string em int
console.log('String parseada para int:', parseInt('13.22'));
