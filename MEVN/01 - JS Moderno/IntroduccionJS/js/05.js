const producto = {
    nombreProducto: 'Tablet',
    precioProducto: 300,
    disponible: true
}

producto.nombreProducto = 'Monitor curvo'
producto.imagen = 'imagen.jpg';
delete producto.disponible;

const { imagen, ...nuevoProducto } = producto;

console.table(nuevoProducto);