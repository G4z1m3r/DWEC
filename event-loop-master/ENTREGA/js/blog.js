const btnListarUsers = document.getElementById("boton-listar-users")
console.log(btnListarUsers)

const btnMostrarPosts = document.getElementById('boton-mostrar-posts')
console.log(btnMostrarPosts)

btnListarUsers.addEventListener("click", evento =>{
    evento.preventDefault()

    listarUsuarios()

})

btnMostrarPosts.addEventListener("click", evento =>{
    evento.preventDefault()
    
    
})

//Hacer la funcion del boton de listar usuarios
async function listarUsuarios(){
    const lista = await (await fetch(`https://jsonplaceholder.typicode.com/users`)).json()

    let divBotones = document.getElementById('botones')
    divBotones.style.display = 'none'

    let headers = ['ID','USUARIO','CORREO','POSTS']
    let tabla = document.querySelector('#lista-usuarios')
    console.log(tabla)
    tabla.style.display = 'flex'
    tabla.style.justifyContent = 'space-between'

    let table = document.createElement('table')
    console.log(table)
    let headerRow = document.createElement('tr')
    console.log(headerRow)

    headers.forEach(headerText =>{
        let header = document.createElement('th')
        let textNode = document.createTextNode(headerText)
        header.appendChild(textNode)
        headerRow.appendChild(header)
    })

    table.appendChild(headerRow)
    lista.forEach(usuario =>{
        let row = document.createElement('tr')
        let datos = [usuario.id,usuario.username,usuario.email,'Show Posts']
        datos.forEach(dato =>{
            let cell = document.createElement('td')
            let textNode = document.createTextNode(dato)
            cell.appendChild(textNode)
            row.appendChild(cell)
        })
        table.appendChild(row)
    })

    tabla.appendChild(table)
    console.log(table)
    console.log(tabla)
}

// function pintarTabla(lista){
    
//     console.log(lista)

   
//  }


//Hacer la funcion del boton mostrar todos los posts