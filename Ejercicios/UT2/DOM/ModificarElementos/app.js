//La propiedad innerHTML. Modificamos el contenido del elemento
let inner=document.getElementById("inner")
inner.innerHTML="Hola a <b>todos</b>"

//Modificamos el contenido y el propio elemento
let outer=document.getElementById("outer")
outer.outerHTML="<ul><li>A</li><li>B</li></ul>"

//modificamos el contenido de un elemento
//no distingue las entidades HTML
let text=document.getElementById("text")
text.innerText="<b>Adios a todos</b>"

//Establecer un titulo
inner.title="Mensaje al pasar el raton"
inner.id="NO"