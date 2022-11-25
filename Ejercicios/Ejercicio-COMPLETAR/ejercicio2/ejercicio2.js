var parrafos = document.getElementsByTagName('p');
console.log(parrafos);
for (let i=0;i<parrafos.length;i++){
  parrafos[i].innerText="prueba"
  parrafos[i].style.display="none"
}
