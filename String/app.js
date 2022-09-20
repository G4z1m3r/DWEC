//la cadena empieza en la posicion 0

console.log("hola"+" mundo")
const nombre="Roberto"
console.log("Hola "+nombre)
console.log(`HOLA ${nombre}`)
const texto=' ks ks ks s kd kss kd ksk  '
const calle="Bravo Murillo, 38, 2B"

//metodos de la clase string

console.log(nombre.length)
console.log(nombre.includes('Ro'))
console.log(nombre.slice(2,5))
console.log(nombre.replace('Ro','Al'))
console.log(nombre)
//quita los blancos del principio y del final, del medio no
console.log(texto.trim())
//divide en subcadenas segun lo especificado
console.log(calle.split(','))
//prueba a guardar el split en un array y mostrar solo la calle
var trozos=calle.split(',')
console.log(trozos[0])