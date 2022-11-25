let miPromesa = new Promise((resolve,reject)=>{
  //mejor primero reject luego resolve
  setTimeout(()=>{
    resolve("Exito")
  },2000)
})

miPromesa
.then((value)=>{
  console.log(value)
})
.catch(()=>{
  console.log("ha habido un error")
})