/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    console.log("l", l, "m", m, "r", r);
    if (nums[m] === target) {
      return m;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  // Se retorna `l` porque al finalizar el bucle, `l` será:
  // - la posición donde está `target`, si se encuentra en el array,
  // - o el índice donde se debe insertar `target` para mantener el orden.
  // Dado que los elementos son únicos, no hay ambigüedad en la posición de inserción.
  return l;
};

console.log(searchInsert([1, 2, 3, 6], 1));
