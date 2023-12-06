// Clone the original array
// Sort the cloned array

// Iterate the cloned array
/*
    Check each element from 1 to N
    If the secuence is broken return 0
    Else return 1
*/

A = [2, 1];

function isPermutation(arr) {
  let integers = [...arr];
  integers.sort((a, b) => a - b);
  //console.log(integers);
  let idx = 1;
  let result = [];

  for (let i of integers) {
    if (i === idx) result = [i, ...result];
    //console.log(result);
    idx += 1;
  }
  return result.length === integers.length ? 1 : 0;
}

console.log(isPermutation(A));
