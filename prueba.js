function ordenarPremiados(){
  let loteria = new Map([1,10],[2,1],[3,9],[4,2],[5,8],[6,3],[7,7],[8,4],[9,6][10,5])
  let sortedMap = new Map( [...loteria].sort((x, y) => x[1] - y[1]));
  console.log(...sortedMap);
}