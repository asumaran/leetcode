/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // console.log("----------------------");
  let cp = -1;
  let p = -1;
  let ni = 0;
  let s = false;
  if (needle.length > haystack.length) {
    // console.log("x needle mayor");
    return p;
  }
  for (let i = 0; i < haystack.length; i++) {
    // console.log("i", i, "ni", ni, "p", p);
    if (needle[ni] === undefined) {
      // console.log("x undefined");
      return p;
    }
    if (needle[ni] === haystack[i]) {
      // console.log("igual");
      // console.log("needle.length", needle.length, "ni+1", ni + 1);
      if (s) {
        if (needle.length === ni + 1) {
          console.log("retorna este1");
          p = cp;
          return p;
        } else {
          console.log("entra al else");
        }
      } else {
        s = true;
        // al parecer aqui se esta quedando erronamente con el valor de i
        // para la siguiente ocurrencia
        cp = i;
        // ni++;
      }
      ni++;
    } else {
      s = false;
      ni = 0;
      cp = -1;
      // i = i - 1;
      console.log("resetea", "i", i, "ni", ni, "p", p);
    }
  }
  // console.log("retorna este2");
  return p;

  // mi approach falla porque asumo que cuando el caracter rompe la igualdad no considero que
  // este nuevo caracter podria ser el comienzo de la porcion de que si es igual a needle.
};

// console.log(strStr("saxxsad", "sad"));
console.log(strStr("mississippi", "issip"));
