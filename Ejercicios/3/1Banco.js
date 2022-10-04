//forma1 Objeto deconstruido
function CuentaCorriente(numCuenta,titular,DNI,tlfno,saldo,ultMov){
  this._numCuenta=numCuenta
  this.titular=titular
  this._DNI=DNI
  this._tlfno=tlfno
  this._saldo=saldo
  this._ultMov=ultMov

  ingresar(dinero);{
    if (isNaN(dinero)){
      console.log("error dato no valido")
    } else {
      saldo=saldo+dinero
    }
  }
  sacar(dinero);{
    if (isNaN(dinero)){
      console.log("error dato no valido")
    } else {
      saldo=saldo-dinero
    }
  }
  verMovimientos();{
    for (mov of ultMov){
      console.log(mov)
    }
  }
  verSaldo();{
    console.log(saldo)
  }
}

//forma2 Objeto literal
var CuentaCorriente={
  numCuenta,
  titular,
  DNI,
  tlfno,
  saldo,
  ultMov,
  
  ingresar:function(dinero){
    if (isNaN(dinero)){
      console.log("error dato no valido")
    } else {
      saldo=saldo+dinero
    }
  },
  sacar:function(dinero){
    if (isNaN(dinero)){
      console.log("error dato no valido")
    } else {
      saldo=saldo-dinero
    }
  },
  verMovimientos:function(){
    for (mov of ultMov){
      console.log(mov)
    }
  },
  verSaldo:function(){
    console.log(saldo)
  }
};

//forma3 Iniciador de objeto
const CuentaCorriente=new Object()
CuentaCorriente.numCuenta
CuentaCorriente.titular
CuentaCorriente.DNI
CuentaCorriente.tlfno
CuentaCorriente.saldo
CuentaCorriente.ultMov
CuentaCorriente.ingresar(dinero);{
  if (isNaN(dinero)){
    console.log("error dato no valido")
  } else {
    saldo=saldo+dinero
  }
}
CuentaCorriente.sacar(dinero);{
  if (isNaN(dinero)){
    console.log("error dato no valido")
  } else {
    saldo=saldo-dinero
  }
}
CuentaCorriente.verMovimientos();{
  for (mov of ultMov){
    console.log(mov)
  }
}
CuentaCorriente.verSaldo();{
  console.log(saldo)
}

//forma4 con clase y constructor normal

class CuentaCorriente {
  //constructor
  constructor(numCuenta,titular,DNI,tlfno,saldo,ultMov){
    this._numCuenta=numCuenta;
    this._titular=titular;
    this._DNI=DNI;
    this._tlfno=tlfno;
    this._saldo=saldo;
    this._ultMov=ultMov;
  }
  //declarar getter y setters
   
}