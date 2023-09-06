// Ternario
const disponible = 100;
const total = 500;
const tarjeta = true;

disponible > total ? console.log('Sí puede pagar con saldo') :
tarjeta ? console.log('Puede pagar con tarjeta') :
console.log('No puede pagar');