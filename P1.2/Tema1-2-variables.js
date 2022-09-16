//variable definida de forma global y primigenia
var mensaje="Variable tipo String"
console.log(mensaje)

var telefono='645339811'
console.log(telefono)

// variables segun ecmascript6
let nombre="Mi nombre"
console.log(nombre)

//constantes
const pi="3,1416"
console.log(pi)
//pi="0"

//Puedo definir una variable despues de haberla  usasdo
console.log(noDefinida)
var noDefinida="23"

//con let no se permite usar una variable antes de definirla

//console.log(noDefinidaLet)
//let noDefinidaLet="let"

if(true){
  const varLocal="variable local"
}
//console.log(varLocal)

function sayHello(){
  const varLocal="una variable nueva"
  console.log(varLocal)
}
