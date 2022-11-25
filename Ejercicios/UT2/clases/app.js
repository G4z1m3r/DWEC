class Persona {
  //metodo constructor
  constructor(nombre, apellidos,anyoNac) {
    this._nombre=nombre;
    this._apellidos=apellidos;
    this._anyoNac=anyoNac;
  }
  //podemos declarar metodos getters, setters
  get anyoNac(){
    return this._anyoNac
  }
}

//creacion de un objeto por instanciación
const p1=new Persona('a','b',123);

console.log(p1);
console.log(p1.anyoNac);
