const inputNombre = document.querySelector("#nombre");
const inputPassword = document.querySelector("#password");
const heading = document.querySelector(".heading");

inputNombre.addEventListener("input", (event) => {
    heading.textContent = event.target.value;
})

inputPassword.addEventListener("input", (event) => {
    event.target.type = 'text';
    setTimeout(() => {
        event.target.type = 'password';
    }, 500);
})