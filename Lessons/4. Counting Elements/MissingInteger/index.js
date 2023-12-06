A = [1, 3, 6, 4, 1, 2];
A1 = [1, 2, 3];
A2 = [-1, -3];
A3 = [-1];
A4 = [-1000000, 1, 2];

// Return the smallest POSITIVE integer
// That does not occur in A

function smallestPositiveInteger(arr) {
  let seed = 1;
  arr.sort((a, b) => a - b);
  //console.log(arr);
  for (i of arr) {
    if (i >= 0) {
      if (seed < i) return seed;
      seed = i;
      //console.log(seed, i);
      seed += 1;
    } else seed = 1;
  }
  return seed;
}
console.log(smallestPositiveInteger(A4));
