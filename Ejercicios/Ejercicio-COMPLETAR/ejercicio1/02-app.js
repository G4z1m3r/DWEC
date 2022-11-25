window.addEventListener("load", e => { });


    //vamos a cambiar el estilo del elemento con clase navbar-brand 
    let ejercicio1 = Array.from(document.getElementsByClassName("navbar-brand"))

    ejercicio1.forEach(element => {
        element.style.color="red";
    });
  //..........................COMPLETAR


    //seleccionamos el elemento a dentro de div.jumbotron
    let ejercicio2 = Array.from(document.querySelector(".jumbotron").getElementsByTagName("a"))

    ejercicio2.forEach(element => {
        element.style.color="red";
    });
   //.......................COMPLETAR
   
   
   //Le quitamos y le ponemos una clase
   ejercicio2.classList.remove("btn-lg")
   ejercicio2.classList.add("btn-sm")
   //..........................COMPLETAR

    //Seleccionamos todos los elementos a con clase btn-secondary dentro de elementos de la
    //clase .col-md-6
    let ejercicio3 = document.querySelectorAll(".col-md-6 .btn-secondary")
    //.......................................COMPLETAR

    //si queremos hacer algo con todos los elementos de la colección habría que recorrerlos.
    //Quitar la clalse btn-secondary
    //Añadir la clase btn-danger
    ejercicio3.forEach(element=> {
        element.classList.remove(".btn-secondary")
        element.classList.add(".btn-danger")
    });
   //............COMPLETAR

   //Seleccionar todos los elementos con la clase col-md-6 
   let ejercicio4 = document.querySelectorAll(".col-md-6")
   //...............................COMPLETAR

    //accedo al tercer elemento y le cambio el estilo a mano
    let prueba=ejercicio4[2]
    prueba.style.backgroundColor="red"
    //................................COMPLETAR

    //recorremos todos los elementos
    cols.forEach(element => {
        //le asignamos un evento click a cada uno de ellos
        element.addEventListener("click", function (e) {
            element.classList.toggle("marcar");
        });

    });

//});

const brand=document.getElementsByClassName("navbar-brand");

brand[0].style.color="red";

const btnJumbo=document.querySelector(".jumbotron a.btn-primary");

btnJumbo.classList.remove("btn-primary");
btnJumbo.classList.add("btn-danger");

const btnCols=document.querySelectorAll(".col-md-6 a.btn-secondary");

btnCols.forEach(element=>{
    element.classList.remove("btn-secondary");
    element.classList.add("btn-danger");
});

const cols=document.querySelectorAll(".col-md-6");

cols[2].style.backgroundColor="red";