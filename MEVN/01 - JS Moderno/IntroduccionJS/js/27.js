// Submit
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputNombre = document.querySelector("#nombre").value;
    const inputPassword = document.querySelector("#password").value;

    if (inputNombre === "" || inputPassword === "") {
        alert("Todos los campos son obligatorios");
        return;
    } else {
        alert('Datos enviados correctamente!')
    }
});
