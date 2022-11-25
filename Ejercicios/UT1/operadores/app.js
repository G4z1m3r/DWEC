// OPERADORES ARITMETICOS
console.log(2+2)
console.log(4.-2)
console.log(2*4)
console.log(6/3) // el resultado de la division
console.log(8%5) // el resto de la division

//OPERADORES DE COMPARACION

//son exactamente igual a java casi todos pero con algunos matices
console.log(4>2)
console.log(4>=5)
console.log(5<3)
console.log(6<=6)
console.log(7==7) //ambas son verdaderas
console.log(7=='7') //ambas son verdaderas
console.log(7==='7') //en este caso ademas tambien compara el tipo por lo que es falso
console.log(7!=5)
console.log(7!=='7') //daria true al no ser del mismo tipo

let num=8
console.log(typeof num)
let nombre='nombre'
console.log(typeof nombre)
console.log(isNaN('2'))
console.log(isNaN(2))
console.log(isNaN('dos'))

const numero=2+"Carlitos"
console.log(numero)
console.log(typeof(numero))
console.log(num.toString())

console.log(num.toFixed())
console.log(num.toFixed(2))

let decimal=12.3456
console.log(decimal.toFixed(2)) // no los corta, redondea
console.log(decimal.toFixed(3)) // no los corta, redondea


