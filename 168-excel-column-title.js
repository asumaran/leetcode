/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let r = '';
  // para el ultimo caso Math.floor va a retornar cero.
  while (columnNumber > 0) {
    // restamos para ajustar la numeracion humana (1-index) al sistema alfabertico programatico (0-index)
    // o sea para que el cálculo (columnNumber % 26) funcione correctamente y dé 0 para “A”,
    // hay que restar 1 primero.
    columnNumber--;
    r = String.fromCharCode((columnNumber % 26) + 65) + r;
    columnNumber = Math.floor(columnNumber / 26);
    // console.log('columnNumber', columnNumber);
  }
  return r;
};

// console.log(convertToTitle(1)); // A
// console.log(convertToTitle(26)); // Z
// console.log(convertToTitle(27)); // AA
// console.log(convertToTitle(1)); //
// console.log(convertToTitle(28)); //
// console.log(convertToTitle(27)); //
// console.log(convertToTitle(28)); //
// console.log(convertToTitle(2002)); //
console.log(convertToTitle(2147483647)); // FXSHRXW
