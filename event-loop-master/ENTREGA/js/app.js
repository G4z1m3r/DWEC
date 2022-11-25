//PARTE 1
//capturar los datos de entrada del formulario
// enviar a ver si son validos en la API
  //SI son validos abrir ventana con el blog.html
  //NO son validos mostrar mensaje de error

const formulario = document.getElementsByClassName("form-signin")[0]

formulario.addEventListener("submit", evento =>{
  evento.preventDefault()
  
  logingFunction()
    
})
  
async function logingFunction(){
  const email = formulario.querySelector("#inputEmail").value
  const passwd = formulario.querySelector("#inputPassword").value
  let checker = true
  const objeto = await (await fetch(`https://jsonplaceholder.typicode.com/users?email=${email}`)).json()
    console.log(objeto)
      if (objeto.length==0){
        checker=false
      }
      if (objeto[0].address.zipcode!=passwd){
         checker=false
      }
      if (checker){
        window.location.href="html/blog.html"
      }
}

//Hacer la funcion del boton de listar usuarios

//Hacer la funcion del boton mostrar todos los posts