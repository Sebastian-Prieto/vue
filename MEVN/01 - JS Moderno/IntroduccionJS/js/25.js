// Evento click
const heading = document.querySelector('.heading');
const enlaces = document.querySelectorAll('.navegacion a');

heading.addEventListener('click', () => {
    heading.textContent = 'Nuevo texto desde el DOM!';
})

enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault();
        enlace.textContent = 'Nuevo texto desde el DOM!';
    })
})