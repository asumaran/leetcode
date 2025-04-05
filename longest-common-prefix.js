/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const arr = [];
  const firstWord = strs[0];
  for (let w = 0; w < firstWord.length; w++) {
    const currLetter = firstWord[w];

    if (strs.length === 1) {
      return currLetter;
    }

    let equals = false;
    for (let l = 1; l < strs.length; l++) {
      if (strs[l][w] === undefined) {
        equals = false;
        break;
      }
      console.log(currLetter, strs[l][w]);
      if (currLetter === strs[l][w]) {
        equals = true;
      } else {
        equals = false;
        break;
      }
    }

    if (equals) {
      arr.push(currLetter);
    } else {
      return arr.join("");
    }
  }

  return arr.join("");
};

console.log("-------");
// not very proud of this one.
console.log(longestCommonPrefix(["c", "acc", "ccc"]));
