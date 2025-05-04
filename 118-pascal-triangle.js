/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  console.log("-".repeat(100));
  const res = [];
  let c = 1;
  for (let i = 0; i < numRows; i++) {
    res[i] = [];
    c = 1;
    // console.log("i", i);
    for (let j = 0; j <= Math.floor(i / 2); j++) {
      console.log("i", i, "j", j, "i-j", i - j);
      // console.log("i", i, "j", j);
      curr = j === 0 ? 1 : res[i - 1][j - 1] + res[i - 1][j];
      res[i][j] = curr;
      // avoid overwriting the last one
      if (j !== i - j) {
        res[i][i - j] = curr;
      } else {
        console.log("evitamos sobreeescribir i-j", i - j);
      }
    }
  }
  return res;
};

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(5));
