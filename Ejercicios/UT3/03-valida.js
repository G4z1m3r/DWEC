window.addEventListener("load",function(){
  //Capturamos los elementos del formulario
  const formulario = this.document.querySelector("#formulario");
  const usuario = this.document.querySelector("#user");
  const passwd = this.document.querySelector("#passwd");
  const newpasswd = this.document.querySelector("#newpasswd");
  const fechanac = this.document.querySelector("#fechanac");
  const condiciones = this.document.querySelector("#condiciones");

  //Funcion de validacion del formulario asociada al boton submit
  formulario.addEventListener("submit",evento=>{
    //Prevenir el comportamiento por defecto
    evento.preventDefault();
    evento.stopPropagation();

    //La variable valido con el valor true
    //en el caso de campo erroneo cambia a false
    let valido = true;
    if (!validaUser(usuario)){
      valido = false;
    }
    if (!validaPass(passwd)){
      valido = false;
    }
    if (!validaPass2(passwd,newpasswd)){
      valido = false;
    }
    if (!validaFecha(fechanac)){
      valido = false;
    }
    if (!validaCheck(condiciones)){
      valido = false;
    }
    //si no hemos encontrado ningun error forzamos el envio del formulario
    if (valido){
      formulario.submit();
    }
  })
  //---------------FUNCIONES DE VALIDACION-----------------------
  //Validamos el usuario recibimos el input, no el valor del input
  function validaUser(el){
    if (!el.value){
      el.parentNode.querySelector("p").textContent="";
      el.parentNode.classList.add("error");
      return false;
    }else{
      el.parentNode.querySelector("p").textContent="";
      el.parentNode.classList.remove("error");
      return true;
    }
  }
  //Validamos el passwd
  function validaPass(el){
    if(el.value.length<7){
      marcaError(el, "El password debe tener al menos 7 caracteres");
      return false;
    }else{
      marcaValido(el);
      return true;
    }
  }
  //Validamos el 2do passwd
  function validaPass2(newpasswd, oldpasswd){
    if (newpasswd===oldpasswd){
      newpasswd.parentNode.querySelector(".error-feedback").textContent="";
      return true;
    }else {
      newpasswd.parentNode.querySelector(".error-feedback").textContent="los 2 passwords deben de coincidir";
      return false;
    }
  }
  //Validamos Fecha
  function validaFecha(el){
    if (el.value){
      el.parentNode.querySelector(".error-feedback").textContent="";
      return true;
    }else{
      el.parentNode.querySelector(".error-feedback").textContent="Introduzca una fecha valida";
      return false;
    }
  }
  //Validamos Check
  function validaCheck(el){
    if(el.checked){
      el.parentNode.querySelector(".error-feedback").textContent="";
      return true;
    }else{
      el.parentNode.querySelector(".error-feedback").textContent="Tiene que marcar casilla";
      return false;
    }
  }
  //--------------------FUNCIONES DE UTILIDAD------------------------
  function marcaError(elemento, mensaje){
    elemento.parentNode.querySelector(".error-feedback").textContent=mensaje;
    elemento.parentNode.classList.add("error");
  }
  function marcaValido(elemento){
    elemento.parentNode.querySelector(".error-feedback").textContent="";
    elemento.parentNode.classList.remove("error");
  }

  formulario.addEventListener("reset",evento=>{
    //mostrar en otra pagina los valores del formulario
    
  })
                  
})