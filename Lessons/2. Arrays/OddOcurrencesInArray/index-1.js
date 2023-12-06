/*
A non-empty array A consisting of N integers is given.
The array contains an odd number of elements.
Each element of the array can be paired with another 
element that has the same value, except for 
one element that is left unpaired
*/
const A = [9, 3, 9, 3, 9, 7, 9];
// Return the value of the unpaired element.
console.log(solution(A));

// Extract each pair of numbers until the unpaired number remain
function getUnpairedElement(arr) {
  let i = 0;
  let seed = 0;
  let pair = 0;
  let sortedArray = [];

  sortedArray = arr.sort();

  while (i < sortedArray.length && seed === pair) {
    seed = sortedArray.shift();
    pair = sortedArray.shift();
  }
  // Present the unpaired number
  return seed;
}

function solution(A) {
  return getUnpairedElement(A);
}
