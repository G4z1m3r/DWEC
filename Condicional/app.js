const FLIGTH=100
const HOTEL=60
const TOUR=20
const TOTAL=FLIGTH+HOTEL+TOUR
const BUDGET=250

if (BUDGET>TOTAL){
  console.log('Te puedes ir de viaje')
}else if (BUDGET===TOATAL){
  console.log('te puedes ir de viaje')
}else{
  console.log('No te puedes ir de viaje')
}

//comparador terciario
const RESULTADO=BUDGET>=TOTAL ?console.log('te puedes ir de viaje'): console.log('no te puedes ir de viaje')