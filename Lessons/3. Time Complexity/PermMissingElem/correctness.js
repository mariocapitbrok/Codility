const A = [1];

function missingElement(arr) {
  // Sort array
  arr = arr.sort();

  // Find the start and end numbers for iteration
  const start = 1;
  const end = start + arr.length;
  // Iterate to find missing element
  for (let i = start; i <= end; i++) {
    if (!arr.includes(i)) return i;
  }
}
console.log(missingElement(A));
