// function square(num) {
//   return num * num;
// }

function square(num){
  throw new Error();
}

function logSquare(num){
  console.log(square(num));
}

logSquare(2);