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


//OBJETO ARRAY, MAP, SET
//Array
const a1=new Array("rojo","amarillo","blanco")
const a2=new Array(4)//longitud del array
const a3=Array.from('Gonzalo Aragones')//un espacio por letra

//set
const set=new Set(['foo','bar','bar','foo'])//al ser de tipo set no permite tener elementos duplicados
//solo dejara un foo y un bar 

//para llevar el set a un array
console.log(Array.from(set))

//map
const map=new Map([[1,2],[2,4],[4,8]])//clave valor
//para llevar un map a un array
Array.from(map)

const mapper=new Map([['1','a'],['2','b']])
const a6=Array.from(mapper.values())//para meter solo la parte de los valores a un array
const a7=Array.from(mapper.keys())//para meter solo las claves de un map a un array

//forma de declarar el contenido de un array
let a8=Array.from([1,2,3],x=>x+x)//1+1 2+2 +3+3 ese seria el array
console.log(a8)

let a9=Array.from({length:5},(v,i)=>i)
console.log(a9)

console.log(Array.isArray(a9))

//Crar araray multidimensional

let a11 = new Array(1,2,3,4,5);
let a12 = new Array(1,2,3,4,5);
let a13 = new Array(1,2,3,4,5);
let mezcla = new Array(a11,a12,a13);

//Recorrer array multidimensional
document.write("<table border=1");
for (i=0; i<mezcla.length;1++){
  document.write("<tr>")
  document.write("<td><b> Estado "+i+"</b></td>")
  for (j=0; j<mezcla[i].length; j++){
    document.write("<td>"+mezcla[i][j]+"</td>")
  }
  document.write("</tr>")
}
document.write("</table>")