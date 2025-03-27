var minimumIndex = function (nums) {
  // First attempt
  //   console.log("nums", nums);
  //   const c = {};
  //   for (let i = 0; i < nums.length; i++) {
  //     if (c[nums[i]]) {
  //       c[nums[i]] += 1;
  //     } else {
  //       c[nums[i]] = 1;
  //     }
  //   }
  //   // dominant
  //   let dominant = parseInt(Object.keys(c)[0]);
  //   let howMuch = c[dominant];
  //   console.log("c", c);
  //   console.log("start dominant", dominant);
  //   console.log("start howMuch", howMuch);
  //   console.log("****");
  //   for (let j = 0; j < Object.keys(c).length; j++) {
  //     console.log(
  //       "compara: ",
  //       Object.keys(c)[j],
  //       parseInt(c[Object.keys(c)[j]]),
  //       dominant
  //     );
  //     if (parseInt(c[Object.keys(c)[j]]) > c[dominant]) {
  //       dominant = parseInt(Object.keys(c)[j]);
  //       howMuch = c[dominant];
  //     }
  //   }
  //   console.log("dominant", dominant);
  //   console.log("howmuch", howMuch);
  //   let q = 0;
  //   for (let m = 0; m < nums.length; m++) {
  //     console.log(q, m, nums[m]);
  //     if (nums[m] === dominant) {
  //       if (q > howMuch / 2) {
  //         console.log("break!");
  //         break;
  //       }
  //       q++;
  //     }
  //   }
  //   if (q * 2 < nums.length + 1) {
  //     q = -1;
  //   }
  //   return q;

  //   Second Attempt
  console.log("nums", nums);
  let firstMap = new Map();
  let secondMap = new Map();
  let n = nums.length;

  // Agregar todos los elementos de nums a secondMap
  for (let num of nums) {
    secondMap.set(num, (secondMap.get(num) || 0) + 1);
  }
  console.log("secondMap original", secondMap);

  //   console.log("secondMap", secondMap);
  for (let index = 0; index < n; index++) {
    // Crear la división en el índice actual
    let num = nums[index];
    // console.log("num", num, "second map num-1", secondMap.get(num) - 1);
    secondMap.set(num, secondMap.get(num) - 1);
    firstMap.set(num, (firstMap.get(num) || 0) + 1);
    console.log("num", num);
    console.log("index", index);
    console.log("n", n);
    console.log("secondMap", secondMap);
    console.log("firstMap", firstMap);

    // Verificar si es una división válida
    // esta solucion el cual está tomada de la solucion de leetcode
    // toma cualquier numero como posuble dominante
    // por ejemplo la iteración para [1, 2, 2, 2] sería
    // [1] [2, 2, 2] ❌
    // [1, 2] [2, 2] ❌
    // [1, 2, 2] [2] ✅ <- retorna

    if (
      firstMap.get(num) * 2 > index + 1 &&
      (secondMap.get(num) || 0) * 2 > n - index - 1
    ) {
      return index;
    }
  }

  // No existe una división válida
  return -1;
};

console.log("result", minimumIndex([1, 2, 2, 2]));
console.log("--------------------");
