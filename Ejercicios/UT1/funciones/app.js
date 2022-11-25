const mensaje='hello hello'
function nueva(){
  console.log('Hola mundo')
  console.log(mensaje)
}
nueva()

//se puede llamar a la funcion antes de declararla
suma(2,4)
function suma(a,b){
  var total=a+b
  console.log(total)
}
suma(3,9)

//al estar fuera del scope de var dara error
//console.log(total)

function otraNueva(name='coge el valor por defecto'){
  console.log(name)
}
otraNueva('Toma este valor')
//al no pasar parametro cogera el de por defecto
otraNueva()

function devuelveHola(texto='Hola'){
  return texto+' Mundo'
}
console.log(devuelveHola())
console.log(devuelveHola('Hello'))

function devuelve(name='Pedro'){
  return `Hola ${name}`
}

//FUNCIONES ANONIMAS
// es una funcion que no tiene un nombre, simplemente se la asigna una variable

var minumero=function(numero=7){
  return numero
}
console.log(minumero())
console.log(minumero(89))

//ARROW FUNCTION
//es un tipo de funcion anonima, pero va un poco mas alla,
//tiene la partiularidad de que pueden acceder a un objeto que se llama this

const mynumber1=()=>'hello'
const mynumber2=(numero=19)=>{
  return numero
}
console.log(mynumber1())
console.log(mynumber2(57))


