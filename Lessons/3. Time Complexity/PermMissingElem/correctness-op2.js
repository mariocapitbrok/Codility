const A = [2, 3, 1, 5];

function missingElement(arr) {
  // Sort array
  arr = arr.sort();
  let i = 1;
  let bin = 0;
  // Iterate to find missing element
  for (i = 1; i <= arr.length + 1 && bin === 0; i++) {
    bin = i;
    bin ^= arr[i - 1];
    //console.log(i, arr[i - 1], bin);
  }
  return i - 1;
}
console.log(missingElement(A));
