const btnListarUsers = document.getElementById("boton-listar-users")
console.log(btnListarUsers)

const btnMostrarPosts = document.getElementById('boton-mostrar-posts')
console.log(btnMostrarPosts)

btnListarUsers.addEventListener("click", evento =>{
    evento.preventDefault()
    
    pintarTabla(listarUsuarios())
})

btnMostrarPosts.addEventListener("click", evento =>{
    evento.preventDefault()
    
    
})

//Hacer la funcion del boton de listar usuarios
async function listarUsuarios(){
    const lista = await (await fetch(`https://jsonplaceholder.typicode.com/users`)).json()

    let divBotones = document.getElementById('botones')
    divBotones.style.display = 'none'

    return lista
}

async function pintarTabla(lista){
    
    console.log(lista)
    try{
    let headers = ['ID','USUARIO','POSTS']
    let tabla = document.querySelector('#lista-usuarios')
    console.log(tabla)
    tabla.style.display = 'flex'

    let table = document.createElement('table')
    console.log(table)
    let headerRow = tabla.createElement('tr')
    console.log(headerRow)

    headers.forEach(headerText =>{
        let header = document.createElement('th')
        let textNode = document.createTextNode(headerText)
        header.appendChild(textNode)
        headerRow.appendChild(header)
    })

    table.appendChild(headerRow)
    tabla.appendChild(table)
    console.log(table)
    console.log(tabla)
    } catch {
        console.log('pito')
    }
}

//Hacer la funcion del boton mostrar todos los posts