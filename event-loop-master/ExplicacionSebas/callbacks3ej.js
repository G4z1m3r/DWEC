const numero=[1,2,3,4]

[1,2,3,4].forEach(element=>{
  console.log(element)
})

numero.forEach(function(numero){
  console.log(numero)          
})

function recorre(numero){
  console.log(numero)
}
numero.forEach(recorre)

const nums=[1,2,3,4]

function hacerDoble(n){
  return n*2
}

const doble = nums.map(hacerDoble)

const pares = nums.filter((n)=>n%2==0)

