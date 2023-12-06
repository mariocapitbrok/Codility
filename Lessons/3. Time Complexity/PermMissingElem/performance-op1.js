const A = [1];

function missingElement(arr) {
  // Iterate to find missing element
  for (let i = 1; i <= 1 + arr.length; i++) {
    if (!arr.includes(i)) return i;
  }
}
console.log(missingElement(A));
