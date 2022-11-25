let special=document.getElementById("especial")
console.log(special)
special.style.color="red"

let lista_elementos =document.querySelectorAll("li") // devuelve un array
console.log(lista_elementos)
let nodoclase1=document.querySelector(".selector_class")//segun se defina en el css
let nodoclase2=document.querySelector("#selector_class")//segun se defina en el css

//innerHTML del elemento #id nos devolveria el html interior de la etiqueta:
//outerHTML del mismo nos devolvera el HTML completo del elemento


/*for (let i=0; i<lista_elementos.length;i++){
  lista_elementos[i].style.fontSize="2rem"
}*/

/*for (const item of lista_elementos){
  item.style.fontSize="3rem"
}*/

lista_elementos.forEach(item=>{
  item.style.fontSize="0.5rem"
})