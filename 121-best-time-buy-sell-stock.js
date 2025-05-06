/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  console.log('-'.repeat(100));
  // iteramos para buscar el menor precio
  let biggest = prices[prices.length - 1];
  let lowest = biggest;
  // let diff = biggest - lowest;
  let candidateBiggest = biggest;
  let candidateLowest = biggest;
  console.log(
    '  biggest',
    biggest,
    'lowest',
    lowest,
    'candidateBiggest',
    candidateBiggest,
  );
  console.log('  ' + '-'.repeat(50));
  for (let i = prices.length - 2; i >= 0; i--) {
    console.log('item[' + i + ']:', prices[i]);
    console.log('  start - biggest', biggest);
    console.log('  start - lowest', lowest);
    // si el item actual es mayor que el actual mayor
    if (prices[i] > candidateBiggest && i > 0) {
      candidateBiggest = prices[i];
      candidateLowest = candidateBiggest;
      // no hay necesidad de pasasr, si se detectó un numero mayor pasar al sigueinte item.
      console.log('  candidateBiggest', candidateBiggest);
      console.log('  candidateLowest', candidateLowest);
      continue;
    }

    console.log('  candidateBiggest', candidateBiggest);
    if (prices[i] < candidateLowest) {
      let candidateLowest = prices[i];
      let candidateDiff = candidateBiggest - candidateLowest;
      let currentDiff = biggest - lowest;
      console.log('  candidateDiff', candidateDiff);
      console.log('  currentDiff', currentDiff);
      // si la diferencia actual del candidato con el item es mayor que la diferencia del mas grande versus el mas pequeño
      if (candidateDiff > currentDiff) {
        // console.log('entra?', prices[i]);
        console.log('  *se define biggest y lowest');
        biggest = candidateBiggest;
        lowest = candidateLowest;
        // console.log('lowest', lowest);
        // continue;
      } else {
        // console.log('cuando entra aca???');
        // lowest = candidateLowest;
      }
    } else {
    }

    // if (candidateBiggest > biggest) {
    //   biggest = candidateBiggest;
    // }
    // biggest = candidateBiggest;
    console.log('  end - biggest', biggest);
    console.log('  end - lowest', lowest);
  }
  console.log('  ' + '-'.repeat(50));

  console.log('  lowest', lowest, 'biggest', biggest);

  return biggest - lowest;
};

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// const prices = [7, 1, 5, 3, 6, 4]; // output = 5
// const prices = [1];
// const prices = [3, 3, 5, 0, 0, 3, 1, 4]; // output = 4
// const prices = [1, 2]; // output = 1
// const prices = [7, 6, 4, 3, 1]; // output = 0
const prices = [2, 4, 1]; // output = 2
console.log(maxProfit(prices));
