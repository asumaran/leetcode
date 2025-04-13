/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // let left = 1;
  // let right = Math.floor(x / 2) + 1;
  // console.log("l", left, "r", right);
  // while (left <= right) {
  //   let m = Math.floor((left + right) / 2);
  //   if (m * m > x) {
  //     console.log("a");
  //     right = m - 1;
  //   } else if (m * m < x) {
  //     console.log("b");
  //     left = m + 1;
  //   } else {
  //     console.log("xx");
  //     return m;
  //   }
  // }
  // return right;

  l = 0;
  // agregamos 1 para arreglar el caso x=1
  // en teoria no importa si le añadimos uno, ya que la potencia del numero que sigue no se acerca al numero que queremos encontrar.
  r = parseInt(x / 2) + 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (m * m > x) {
      r = m - 1;
    } else if (m * m === x) {
      console.log("y");
      return m;
    } else {
      l = m + 1;
    }
  }
  console.log("x");
  return r;
};

console.log("---------------------");
console.log(mySqrt(1));
