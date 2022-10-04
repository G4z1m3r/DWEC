var coche={};

//Objeto literal
var usuario={
  nombre:'Felipe',
  edad:43,
  saludo:function(){
    console.log(`Hola soy ${this.nombre}`)
  },
};
//console.log(usuario.saludo())
usuario.saludo()

//Objeto deconstruidos
function persona(nombre, edad) {
  this.nombre=nombre
  this.edad=edad
  this.saludar=function(){
    console.log(`Hola soy ${this.nombre}`)
  }
}

var profesor= new persona("Maria", 25)

var persona1=new Object({
  nombre:'Pedro',
  edad:28,
  saludar:function(){
    console.log(`Hola soy ${this.nombre}`)
  }
})
persona1.saludar()


const myCar=new Object()
myCar.make='Ford'
myCar.model='Mustang'
myCar.year=1969

class Persona2{
  constructor(nombre,apellidos,year){
    this._nombre=nombre
    this._apellidos=apellidos
    this._year=year
  }

  get year(){
    return this._year
  } 
  set year(y){
    this._year=y
  }

}

//OBJETO DATE
var fecha=new Date() //Toma la fecha del sistema
var YEAR=fecha.getFullYear()//Extrae el año
var MES=fecha.getMonth()//Extrae el mes
var DAY=fecha.getDay()//Extrae el dia

//OBJETO MATH
var pi=Math.PI
console.log(Math.round(4.5673))
console.log(Math.round(3.2))
console.log(Math.ceil(4.3))
console.log(Math.ceil(-4.3))
console.log(Math.floor(4.3))
console.log(Math.floor(-4.3))
console.log(Math.min(4,5,-3,9,1,0))

var aleatorio=Math.random()//devuelve un num aleatiorio entre 0 y 1

function generarNumeroAleatorio(numMax){
  return Math.round((Math.random()*numMax))
}
console.log(generarNumeroAleatorio(57))

//creamos una instancia del objeto persona
const p1=new Persona2('a','b',12)

const personas=new Array(5);
personas.push(new Persona2(('a','b',12)))
personas.push(new Persona2(('a','b',12)))
personas.push(new Persona2(('a','b',12)))
personas.push(new Persona2(('a','b',12)))

for (persona of personas){
  console.log(persona)
}