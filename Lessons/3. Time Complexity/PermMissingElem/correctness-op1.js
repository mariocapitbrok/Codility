const A = [2, 3, 1, 5];

function missingElement(arr) {
  // Sort array
  arr = arr.sort();

  // Iterate to find missing element
  for (let i = 1; i <= 1 + arr.length; i++) {
    if (i !== arr[i - 1]) return i;
  }
}

console.log(missingElement(A));
