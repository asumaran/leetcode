/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // este de aca es bastante facil una vez que se sabe
  // que hay solo una solucion dada las limitaciones para su solucion
  return nums.reduce((prev, curr) => prev ^ curr);
};

const n = [4, 1, 2, 1, 2];
console.log(singleNumber(n));
