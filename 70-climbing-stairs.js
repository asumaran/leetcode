/**
 * @param {number} n
 * @return {number}
 */
// n = 2
// 1 + 1
// 2

// n = 3
// 1 + 1 + 1
// 1 + 2
// 2 + 1

// n = 4
// 1 + 1 + 1 + 1
// 1 + 2 + 1
// 2 + 1 + 1
// 1 + 1 + 2
// 2 + 2

// n = 5
// 1 + 1 + 1 + 1 + 1
// 1 + 1 + 1 + 2
// 1 + 2 + 1 + 1
// 1 + 1 + 2 + 1
// 1 + 2 + 2
// 2 + 1 + 1 + 1
// 2 + 1 + 2
// 2 + 2 + 1

// r = (n-1) + (n-2)
const cache = [];
var climbStairs = function (n) {
  if (cache[n]) {
    return cache[n];
  }

  if (n <= 3) {
    cache[n] = n;
    return n;
  }

  cache[n] = climbStairs(n - 2) + climbStairs(n - 1);
  return cache[n];
};

console.log(climbStairs(1));
