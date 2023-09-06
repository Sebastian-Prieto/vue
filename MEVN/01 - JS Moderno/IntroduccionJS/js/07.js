const producto = {
    nombre: 'Tablet',
    precioProducto: 300,
    disponible: true
}

const cliente = {
    nombre: 'Juan',
    premium: true
}

// const nuevoObjeto = Object.assign(producto, cliente);
// console.table(nuevoObjeto);

const nuevoObjeto2 = {producto, cliente};
console.table(nuevoObjeto2);