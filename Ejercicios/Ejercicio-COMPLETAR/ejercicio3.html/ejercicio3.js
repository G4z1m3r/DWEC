//hacer la lista en el html
window.addEventListener("load", e=>{
  const encabezados = document.querySelectorAll("#menu>ul>lia>a"); //esto es un estilo css

  //asignamos la funcion
  encabezados.forEach(element =>{
    element.addEventListener("click",despliega);
  })

  function despliega(e){
    e.preventDefault();
    const nodo=e.target;
    console.log(nodo);
    var ulmenu=nodo.parentNode.getElementsByTagName("ul")[0];
    if (lipadre.ClassList.Contains("mostrar")){

    }
    if (ulmenu.style.display == "block"){
      ulmenu.style.display == "none";
    }else{
      ulmenu.style.display="block";
    }
  }
});

//hacer la lista en el html
window.addEventListener("load", e=>{
  const encabezados = document.querySelectorAll("#menu>ul>lia>a");

  //asignamos la funcion
  encabezados.forEach(element =>{
    element.addEventListener("click",despliega);
  })

  function despliega(e){
    e.preventDefaul();
    const nodo=e.target;
    console.log(nodo);
    var ulmenu=nodo.parentNode.getElementsByTagName("ul")[0];
    if (lipadre.classList.Contains("mostrar")){
      lipadre.classList.remove("mostrar");
    } else{
      mostrados= lipadre.parentNode.getElementsByClassName("mostrar");
      for (var i=0;i<mostrados.length;i++){
        mostrados[i].classList.remove("mostrar");
      }
      lipadre.classList.add("mostrar");
    }
  }
});