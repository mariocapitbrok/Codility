/*
A non-empty array A consisting of N integers is given.
The array contains an odd number of elements.
Each element of the array can be paired with another 
element that has the same value, except for 
one element that is left unpaired
*/
const A = [9, 3, 9, 3, 9, 7, 9];
// Return the value of the unpaired element.
function getUnpaired(arr) {
  // Create a sorted seedArray
  arr = arr.sort();
  odd = 0;
  // Compare seed vs pair elements between arrays
  for (let i of arr) {
    console.log(odd);
    odd ^= i;
    console.log(odd);
  }

  // Return unpaired element
  return odd;
}

console.log(getUnpaired(A));
