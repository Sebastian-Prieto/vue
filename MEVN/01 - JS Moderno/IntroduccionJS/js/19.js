// Operador OR || y Operador AND &&
const disponible = 100;
const total = 500;
const tarjeta = true;

if (tarjeta) {
    console.log('Sí puedes pagar');
} else if (disponible > total) {
    console.log('Si puedes pagar');
} else {
    console.log('No puedes pagar!');
}

