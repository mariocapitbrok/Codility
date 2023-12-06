/*
A non-empty array A consisting of N integers is given.
The array contains an odd number of elements.
Each element of the array can be paired with another 
element that has the same value, except for 
one element that is left unpaired
*/
const A = [9, 3, 9, 3, 9, 7, 9];

function getUnpaired(arr) {
  // Create a sorted seedArray
  arr = arr.sort();

  // Compare seed vs pair elements between arrays
  let i = 0;
  while (i < arr.length && arr[i] === arr[i + 1]) {
    i += 2;
  }

  // Return unpaired element
  return arr[i];
}

console.log(getUnpaired(A));
