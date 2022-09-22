var persona=['John',12,'Mexico',true]
var persona1=new Array(3)
var persona2=new Array("John",14,'Argentina',false)
console.log(persona[0])
console.log(persona1[1])
console.log(persona2[2])
persona[0]='Jose'
persona.push("VS2DAW")
console.log(persona)
//pop elimina el ultimo atributo del array
persona.pop()
console.log(persona)
//push añade al final del array
persona.push("VS2DAW")
console.log(persona)

var colores=["rojo","Azaul","Amarillo","Verde"]
for(var i=0; i<colores.length; i++){
  console.log(colores[i])
}

/*for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    
  }
}*/

/*for (const iterator of object) {
  
}*/

/*while(condicion){

}*/

