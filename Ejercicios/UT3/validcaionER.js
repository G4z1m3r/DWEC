document.addEventListener("DOMContentLoaded",function(){
  const email = document.querySelector("#email");
  const formulario = document.querySelector("#formulario");
  const cp = document.querySelector("#cp");

  formulario.addEventListener("submit",function(evento){
    evento.preventDefault();
    evento.stopPropagation();

    let valido=true;
    if (!validaemail(email)){
      valido=false;
    }
    if (!validaCP(cp)){
      valido=false;
    }
    if (valido){
      this.submit();
    }
    function validaCP(el){
      const erCP = /^[0-5][0-9]{4}$/
      const cpvalue=el.value.trim()
      if (cpvalue.match(erCP)){
        el.setCustomValidity("");
        return true;
      }else{
        el.setCustomValidity("codigo postal erroneo");
        return false;
      }
    }
    function validaEmail(el){
      const erMail = /^[-\W.%+]{1,64}@(?:[A-Z0-9]{1,63}\.){1,125}[A-Z]{2,63}$/i
      if (erMail.test(el.value.trim())){
        el.setCustomValidity("");
        return true;
      }else{
        el.setCustomValidity("correo erroneo");
        return false;
      }
    }
  })
})