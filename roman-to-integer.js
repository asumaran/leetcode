/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // const rmap = {
  //   I: 1,
  //   IV: 4,
  //   V: 5,
  //   IX: 9,
  //   X: 10,
  //   XL: 40,
  //   L: 50,
  //   XC: 90,
  //   C: 100,
  //   CD: 400,
  //   D: 500,
  //   CM: 900,
  //   M: 1000,
  // };
  // let r = 0;
  // for (let i = s.length; i > 0; i--) {
  //   console.log({ i });
  //   if (rmap[`${s[i - 2]}${s[i - 1]}`]) {
  //     r = r + rmap[`${s[i - 2]}${s[i - 1]}`];
  //     i = i - 1;
  //     continue;
  //   } else {
  //     r = r + rmap[s[i - 1]];
  //   }
  // }
  // return r;

  // Second attempt
  const rmap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let r = 0;
  for (let i = s.length; i > 0; i--) {
    const curr = rmap[s[i - 1]];
    const next = rmap[s[i - 2]];
    if (next < curr) {
      r = r - (next - curr);
      i--;
    } else {
      r = r + rmap[s[i - 1]];
    }
  }
  return r;
};
