// Modificar textos
const heading = document.querySelector('.heading');
const enlaces = document.querySelectorAll('.navegacion a');
heading.textContent = 'Hola mundo';
heading.classList.remove('text-4xl');
const inputNombre = document.querySelector('#nombre');
inputNombre.value = 'Juan';
inputNombre.placeholder = 'Ingresa tu nombre';
inputNombre.type = 'text';
enlaces.forEach(enlace => enlace.textContent = 'Nuevo enlace');