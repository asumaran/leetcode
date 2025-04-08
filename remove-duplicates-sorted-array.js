/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // let c = 1;
  // let curr = nums[0];
  // l = 0;
  // while (l < nums.length) {
  //   curr = nums[l];
  //   next = nums[l + 1];
  //   // console.log("l", l, "curr", curr, "next", next, nums.join(","));
  //   if (curr === undefined || next === undefined) {
  //     break;
  //   }
  //   if (curr === next) {
  //     nums.splice(l, 1);
  //   } else {
  //     l++;
  //   }
  //   c++;
  // }
  // return c;
  // second attempt
  let k = 0; // lleva la posicion de los items unicos
  for (let i = 1; i < nums.length; i++) {
    console.log("i", i, nums[i - 1], nums[i]);
    // si el item anterior no es igual al actual
    if (nums[i] !== nums[k]) {
      // entonces el item actual pasa a la posicion actual de la lista de array
      // lo cual es muy interesante ya que ese item no va a ser utilizado lo cual no afecta en nada al script
      // ejemplo: segun el array [a, a, b, c]
      // pasaria a: [a, b, b, c] porque b seria asignado a la posicion 1. (porque k es incrementado en uno), para el siguiente seria
      // i = 2, no pasa nada porque b es igual a b
      // para i = 3 seria igual al anterior que el primer caso.
      // c (i=3) !== b (k=1) -- ojo que esta comparando con el recientemente agregado item unico.
      k++;
      nums[k] = nums[i];
    }
  }
  // retorna numero de items y NO la posicion ya que es basada en cero.
  return k + 1;
};

const n = [1, 1, 2, 2, 3];
console.log(removeDuplicates(n));
console.log("n", n);
