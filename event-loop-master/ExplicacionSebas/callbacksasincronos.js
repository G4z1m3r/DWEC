function saludar(n){
  console.log("hola" + n)
}

console.log("hola")

setTimeout(saludar("Gonzalo"),2000)

console.log("mundo")

//-----------------------------------------------------------

const URL = "wmedia.es/datos.json"
function descargar(url){
  console.log("descargando...")
  setTimeout(function(){
    console.log("descargado")
  },3000)
}

function procesarDatos(fichero){
  console.log("procesando datos...")
}

//no podrias procesar los datos ya que el fin de la descarga se ejecuta cuando acaba el resto de llamadas

descargar(URL)
procesarDatos(fichero)



//-----SOlUCION

function descargar(url,fn){
  console.log("descargando...")
  setTimeout(function(){
    console.log("descargado")
    fn()
  }, 3000)
}

descargar(URL,procesarDatos)

descargar(URL,function(){
  console.log("procesando datos...")
})