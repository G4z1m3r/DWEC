const btnListarUsers = document.getElementById("boton-listar-users")
console.log(btnListarUsers)

btnListarUsers.addEventListener("click", evento =>{
    evento.preventDefault()

    listarUsuarios()
})

//Hacer la funcion del boton de listar usuarios
async function listarUsuarios(){
    const lista = await (await fetch(`https://jsonplaceholder.typicode.com/users`)).json()
    console.log(lista)
}

//Hacer la funcion del boton mostrar todos los posts