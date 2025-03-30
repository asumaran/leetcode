/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // first attempt
  //   const s = x.toString();
  //   for (let i = 0; i < s.length / 2; i++) {
  //     if (s[i] !== s[s.length - i - 1]) {
  //       return false;
  //     }
  //   }
  //   return true;

  // second attempt
  let dup = x;
  let rev = 0;
  while (x > 0) {
    console.log("xxxx", x);
    // obtiene la parte entera del resto de dividir entre 10
    // por ejemplo 121 % 10 = 1.
    // lo que se busca es obtener el ultimo digito.
    let res = x % 10;
    // una vez obtenido el ultimo numero lo insertamos en el reverso
    // x ej. 0 * 10 + 1 = 1;
    rev = rev * 10 + res;
    // x pasa a ser el mismo numero excepto el ultimo digito.
    x = parseInt(x / 10);
    // console.log("--------------------");
    // console.log("rev", rev);
  }
  // first pass 121
  // res = 1, rev = 1, x = 12
  // second pass
  // res = 2, rev = 12, x = 1
  // third pass
  // res = 1,rev = 121, x = 0
  if (dup === rev) {
    return true;
  } else {
    return false;
  }
};
