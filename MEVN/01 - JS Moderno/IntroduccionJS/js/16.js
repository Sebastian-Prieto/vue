const tecnologias = ['VueJS', 'JavaScript', 'NodeJS', 'HTML', 'CSS'];
const numeros = [10, 20, 30];

// Includes
const resultados = tecnologias.includes('GraphQL');
console.log(resultados);

const resultados2 = numeros.some(numero => numero === 10);
console.log(resultados2);

const resultado3 = numeros.every(numero => numero >= 10);
console.log(resultado3);

const resultado4 = numeros.reduce((total, numero) => total + numero, 0);
console.log(resultado4);

const resultado5 = numeros.filter(numero => numero >= 11);
console.log(resultado5); 