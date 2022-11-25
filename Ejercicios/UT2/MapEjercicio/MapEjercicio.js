//let loteria=new Map([1,10],[2,1],[3,9],[4,2],[5,8],[6,3],[7,7],[8,4],[9,6][10,5])
class Loteria{
  constructor() {
    this.historico=new Map()
    for (let i=1; i<50;i++){
      this.historico.set(i,Math.round(Math.random() * (25 - 1) + 1))
    }
 }

  numeroPremiado(numero){
    let contador = this.historico.get(numero)+1
    this.historico.set(numero, contador)
  }

  ordenarPremiados(){
  let numOrdenados=new Map([...this.historico].sort((a,b)=> b[1]-a[1]))
  return numOrdenados
  } 

  getHistorico(){
    return this.historico
  }

  /*getDesdeHasta(inicio,final){
    for (i=inicio;i<=final;i++){
      console.log(this.historico.entries(i))
    }
  }*/

  getDistancia(num1, num2){
    let wins1 = this.historico.get(num1);
    let wins2 = this.historico.get(num2);
    return Math.abs(wins1-wins2);
  }

}

let prueba = new Loteria();

console.log(prueba.getHistorico())

prueba.numeroPremiado(5)
prueba.numeroPremiado(6)

console.log(prueba.getHistorico())

console.log(prueba.ordenarPremiados())

console.log(prueba.getDistancia(23,25))

//prueba.getDesdeHasta(5,8)
