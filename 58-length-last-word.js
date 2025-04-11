// https://leetcode.com/problems/length-of-last-word/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const w = [];
  if (s.length === 1) {
    return s.length;
  }

  for (let i = s.length - 1; 0 <= i; i--) {
    if (s[i] === " ") {
      if (w.length) {
        return w.length;
      }
    } else {
      // dado que no nos importa el orden, solo agregamos
      // las letras de la palabra al array
      w.push(s[i]);
    }
  }
  return w.length;
};

console.log(lengthOfLastWord("a "));
