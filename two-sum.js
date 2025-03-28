// https://leetcode.com/problems/two-sum/description/
var twoSum = function (nums, target) {
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    m.set(nums[i], i);
  }
  console.log("m", m);
  for (let i = 0; i < nums.length; i++) {
    // get how much is needed for the current number to get to the target
    const complement = target - nums[i];
    console.log("i", i, "complement", complement);
    // para el caso [3,2,4] en el primer numero complemento seria 3, sin embargo
    // si retornamos [i, m.get(complement)] retornaria [0, 0]
    // ya que el complemento seria un numero igual, pero este numero se encuentra ubicado en
    // la misma posicion del numero base que estamos utilizando
    // por lo tanto debemos cerciorarnos de que el complemento no este en la misma posicon usando
    // ya que eso indicaria que estamos usando el mismo numero.
    // `i !== m.get(complement)`
    if (m.has(complement) && i !== m.get(complement)) {
      return [i, m.get(complement)];
    }
  }
  return [];
};

console.log(twoSum([3, 2, 4], 6));
