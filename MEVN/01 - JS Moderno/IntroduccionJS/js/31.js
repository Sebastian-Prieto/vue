const url = "https://jsonplaceholder.typicode.com/comments"

const consultarApi = () => {
    fetch(url)
        .then((respuesta) => {
            return respuesta.json();
        })
        .then(resultado => {
            console.log(resultado);
        })

    try {
        
    } catch (error) {
        
    }
}       

consultarApi();