/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const res = [];
  let c = 1;
  for (let i = 0; i <= rowIndex; i++) {
    res[i] = [];
    c = 1;
    for (let j = 0; j <= Math.floor(i / 2); j++) {
      curr = j === 0 ? 1 : res[i - 1][j - 1] + res[i - 1][j];
      res[i][j] = curr;
      if (j !== i - j) {
        res[i][i - j] = curr;
      }
    }
  }
  return res[rowIndex];
};

// este estaba facil y lo hice directamente en leetcode.
// al parecer tambien se puede hacer via formula pero no la conozco.
