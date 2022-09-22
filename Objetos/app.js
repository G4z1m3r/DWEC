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