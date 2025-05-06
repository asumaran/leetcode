/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  console.log('-'.repeat(50));
  let i = 0;
  let j = s.length - 1;
  // let l = s[i];
  // let r = s[j];
  // while (j >= 0 && i <= s.length - 1) {
  // no hay necesidad de comparar todo el string.
  while (i < j) {
    l = s[i];
    r = s[j];
    console.log('i', i, 'j', j, 'l', l, 'r', r);

    // && j !== i
    if (!isValidCharacter(l)) {
      i++;
      // l = s[i];
      // if (!l) {
      //   return false;
      // }
      // console.log('xxx', l);
      continue;
    } else {
      l = l.toLowerCase();
    }

    if (!isValidCharacter(r)) {
      j--;
      // r = s[j];
      // if (!r) {
      //   return false;
      // }
      continue;
    } else {
      r = r.toLowerCase();
    }

    if (l !== r) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

function isValidCharacter(s) {
  return (
    (s >= '0' && s <= '9') ||
    (s >= 'a' && s <= 'z') ||
    (s >= 'A' && s && s <= 'Z')
  );
}

// console.log(isPalindrome('0P')); // false
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
