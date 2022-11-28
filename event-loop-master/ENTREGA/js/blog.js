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
    
    mostrarPosts()
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
        header.scope = 'col'
    })

    table.appendChild(headerRow)
    lista.forEach(usuario =>{
        let row = document.createElement('tr')
        let datos = [usuario.id,usuario.username,usuario.email]
        datos.forEach(dato =>{
            let cell = document.createElement('td')
            let textNode = document.createTextNode(dato)
            cell.appendChild(textNode)
            row.appendChild(cell)
        })

        let botonposts = document.createElement('button')
        botonposts.setAttribute('onclick', `MostrarPostsUsuario(${usuario.id})`)
        let cellbtn = document.createElement('td')
        let TextNodebtn = document.createTextNode("Show Posts")
        botonposts.appendChild(TextNodebtn)
        cellbtn.appendChild(botonposts)
        row.appendChild(cellbtn)

        table.appendChild(row)
    })

    tabla.appendChild(table)
    console.log(table)
    console.log(tabla)
    table.classList.add('table')
}

//Hacer la funcion del boton mostrar todos los posts

async function mostrarPosts() {
    const posts = await (await fetch(`https://jsonplaceholder.typicode.com/posts`)).json()
    console.log(posts)

    let divBotones = document.getElementById('botones')
    divBotones.style.display = 'none'

    let divListaPosts = document.getElementById('lista-posts')
    divListaPosts.style.display = 'flex'
    divListaPosts.style.flexWrap = 'wrap'

    posts.forEach(post =>{
        let cardbody = document.createElement('div')
        cardbody.classList.add('card-body')

        let cardtitle = document.createElement('h5')
        cardtitle.classList.add('card-title')
        let titletext = document.createTextNode(post.title)
        cardtitle.appendChild(titletext)
        cardbody.appendChild(cardtitle)

        let cardtext = document.createElement('p')
        cardtext.classList.add('card-text')
        let texttext = document.createTextNode(post.body)
        cardtext.appendChild(texttext)
        cardbody.appendChild(cardtext)

        divListaPosts.appendChild(cardbody)
    })

}

async function MostrarPostsUsuario(id) {
    const posts = await (await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)).json()
    console.log(posts)

    let divListaUsuarios = document.getElementById('lista-usuarios')
    divListaUsuarios.style.display = 'none'

    let divBotones = document.getElementById('botones')
    divBotones.style.display = 'none'

    let divListaPosts = document.getElementById('lista-posts')
    divListaPosts.style.display = 'flex'
    divListaPosts.style.flexWrap = 'wrap'

    posts.forEach(post =>{
        let cardbody = document.createElement('div')
        cardbody.classList.add('card-body')

        let cardtitle = document.createElement('h5')
        cardtitle.classList.add('card-title')
        let titletext = document.createTextNode(post.title)
        cardtitle.appendChild(titletext)
        cardbody.appendChild(cardtitle)

        let cardtext = document.createElement('p')
        cardtext.classList.add('card-text')
        let texttext = document.createTextNode(post.body)
        cardtext.appendChild(texttext)
        cardbody.appendChild(cardtext)

        divListaPosts.appendChild(cardbody)
    })
}
