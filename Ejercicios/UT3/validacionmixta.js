document.addEventListener("DOMContentLoaded",function(evento){
  const usuario = document.getElementById("uname");
  const clave = document.getElementById("pwd");
  const form = document.querySelector("form");

  form.addEventListener("submit",validarFormulario);

  usuario.addEventListener("keyup",function(e){
    if (this.value){
      this.setCustomValidity("");
    }else{
      this.setCustomValidity("Campo vacio");
    }
    })
  clave.addEventListener("keyup",function(e){
    if (this.value.length >=6){
       this.setCustomValidity("");
    }else{
      this.setCustomValidity("Longitud minima requerida");
    }
  })
  function validarFormulario(evento){
    evento.preventDefault();
    evento.stopPropagation();

    let valido=true;
    if (!usuario.value){
      usuario.setCustomValidity("Campo vacio");
    }else{
      usuario.setCustomValidity("");
    }
    if (clave.value.length<=6){
      clave.setCustomValidity("Longitud minima requerida");
    }else{
      clave.setCustomValidity("");
    }
    if (valido){
      this.submit
    }else{
      
    }
  }
})