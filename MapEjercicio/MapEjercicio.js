let loteria=new Map([1,10],[2,1],[3,9],[4,2],[5,8],[6,3],[7,7],[8,4],[9,6][10,5])

function numeroPremiado(numero){
  loteria.set(numero, loteria.get(numero)++)
}

function ordenarPremiados(){
  loteria[Symbol.iterator] = function* () {
    yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
  }

  for (let [key, value] of loteria) {     // get data sorted
    console.log(key + ' ' + value);
  }

console.log([...loteria]);              // sorted order
console.log([...loteria.entries()]);    // original insertation order
}