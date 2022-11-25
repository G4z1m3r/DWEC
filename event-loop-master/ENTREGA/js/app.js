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
  
  function logingFunction(){
    const email = formulario.querySelector("#inputEmail")
    const passwd = formulario.querySelector("#inputPassword")
    
    if (!checkLoging){
      
    }
  
  }