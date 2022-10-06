//pila
//cola
//lista
//Árboles

//pila
/*
se basa en ir apilando elementos
para sacar un elemento hay que sacar el mas alto en la pila
*/

class Pila{
  constructor(in_items){
    this.items=in_items || []
  }
  longitud(){
    return this.items.length
  }
  apilar(elemento){
    this.items.push(elemento)
  }
  desapilar(){
    return this.longitud()>0 ? this.items.pop():undefined
  }
}

//cola
//los elementos se añaden por la cola pero van saliendo por la cabeza
//fifo first in first out

class Cola{
  constructor(in_items){
    this.items=in_items || []
  }
  longitud(){
    return this.items.length
  }
  encolar(elemento){
    this.items.push(elemento)
  }
  desencolar(){
    return this.longitud()>0 ? this.items.shift():undefined
  }
}

//lista
//un elemento apunta al siguiente pero permite insertar un elemento en cualquier posicion
//tambien se puede sacar elementos en cualquier parte de la lista

class ListaNodos{
  constructor(data){
    this.data=data
    this.sigNode=null
  }
}

class EnlaceLista{
  constructor(head=null){
    this.head=head
  }
  getLast(){
    let lastNode=this.head
    if (lastNode){
      while(lastNode.sigNode){
        lastNode=lastNode.sigNode
      }
    }
  }
  size(){
    let count=0
    let node=this.head
    while(node){
      count++
      node=node.sigNode
    }
    return count
  }
}

let nodo1 = new ListaNodos(2)
let nodo2 = new ListaNodos(7)
nodo1.sigNode=nodo2
let lista=new EnlaceLista(nodo1)