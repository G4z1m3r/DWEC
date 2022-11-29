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

    var current_page = 1;
    var obj_per_page = 5;
    function totNumPages()
    {
        return Math.ceil(posts.length / obj_per_page);
    }

    function prevPage()
    {
        if (current_page > 1) {
            current_page--;
            change(current_page);
        }
    }
    function nextPage()
    {
        if (current_page < totNumPages()) {
            current_page++;
            change(current_page);
        }
    }

    function change(page)
    {
        var btn_next = document.getElementById("btn_next");
        var btn_prev = document.getElementById("btn_prev");
        var listing_table = document.getElementById("TableList");
        var page_span = document.getElementById("page");
        if (page < 1) page = 1;
        if (page > totNumPages()) page = totNumPages();
        listing_table.innerHTML = "";
        for (var i = (page-1) * obj_per_page; i < (page * obj_per_page); i++) {
            listing_table.innerHTML += obj[i].number + "<br>";
        }
        page_span.innerHTML = page;
        if (page == 1) {
            btn_prev.style.visibility = "hidden";
        } else {
            btn_prev.style.visibility = "visible";
        }
        if (page == totNumPages()) {
            btn_next.style.visibility = "hidden";
        } else {
            btn_next.style.visibility = "visible";
        }
    }
    window.onload = function() {
        change(1);
    };
    


    // posts.forEach(post =>{
    //     let cardbody = document.createElement('div')
    //     cardbody.classList.add('card-body')

    //     let cardtitle = document.createElement('h5')
    //     cardtitle.classList.add('card-title')
    //     let titletext = document.createTextNode(post.title)
    //     cardtitle.appendChild(titletext)
    //     cardbody.appendChild(cardtitle)

    //     let cardtext = document.createElement('p')
    //     cardtext.classList.add('card-text')
    //     let texttext = document.createTextNode(post.body)
    //     cardtext.appendChild(texttext)
    //     cardbody.appendChild(cardtext)

    //     divListaPosts.appendChild(cardbody)
    // })

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
