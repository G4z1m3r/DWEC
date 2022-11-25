const URL="wmedia.es/datos.json"
const URL1="wmedia.es/datos1.json"
const URL2="wmedia.es/datos2.json"
const URL3="wmedia.es/datos3.json"
const URL4="wmedia.es/datos4.json"

function descargar(url,fn){
  console.log("descargando...")
  setTimeout(function(){
    console.log("descargado")
    fn(url)
  },3000)
}

//no se solaparia ninguno a costa de provocar un callback hell

descargar(URL,(archivo)=>{
  console.log("procesamiento")
  descargar(URL1,(archivo)=>{
    console.log("procesando "+ archivo)
    descargar(URL2,(archivo)=>{
      console.log("procesando "+ archivo)
      descargar(URL3,(archivo)=>{
        console.log("procesando "+ archivo)
        descargar(URL4,(archivo)=>{
          console.log("procesando "+ archivo)
        })
      })
    })
  })
})