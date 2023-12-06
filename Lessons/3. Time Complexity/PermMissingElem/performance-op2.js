const A = [1];

function missingElement(arr) {
  // Iterate to find missing element
  let i = 1;
  while (i <= 1 + arr.length) {
    if (!arr.includes(i)) return i;
    i++;
  }
}
console.log(missingElement(A));
