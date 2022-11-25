function miFuncion(fn){
  fn()
}

function saluda(){
  console.log("hola")
}

miFuncion(saluda)

miFuncion(function saluda(){
  console.log("Hola")
})

miFuncion(function(){
  console.log("HOla")
})

miFuncion(()=>{
  console.log("HOLA")
})

//------------------------------------

function unaFuncion(fn){
  const nombre = "Gonzalo"
  fn(nombre)
}

function saluda(nombre){
  console.log("hola "+nombre)
}

unaFuncion(saluda)

unaFuncion((nombre)=>{
  console.log("hola "+nombre)
})

unaFuncion(nombre=>{
  console.log("hola "+nombre)
})