function saludar(nombre){
  alert("Hola " + nombre)
}

function obtenerNombre(){
  const nombre = prompt("introduce un nombre")
  return nombre
}

const nombre=obtenerNombre()
saludar(nombre)

function obtenerNombre(fn){
  const nombre = prompt("introduce un nombre")
  fn(nombre)
}

obtenerNombre(saludar)

obtenerNombre(function(nombre){
  alert("Hola " + nombre)
})

obtenerNombre(nombre=>{
  alert("Hola " + nombre)
})