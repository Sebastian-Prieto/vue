// Validaciones
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    // Prevenir alerta
    const alertaPrevia = document.querySelector(".alerta");
    alertaPrevia?.remove(); 
    // Generar alerta
    const alerta = document.createElement('DIV')
    alerta.textContent = "Todos los campos son obligatorios";
    alerta.classList.add('alerta', 'bg-red-500', 'text-white', 'uppercase', 'text-sm', 'text-center', 'p-2', 'font-black')
    console.log(alerta);

    const inputNombre = document.querySelector("#nombre").value;
    const inputPassword = document.querySelector("#password").value;
    if (inputNombre === "" || inputPassword === "") {
        formulario.appendChild(alerta);
        setTimeout(() => {
            alerta.remove();
        }, 3000)
        return;
    }
})
