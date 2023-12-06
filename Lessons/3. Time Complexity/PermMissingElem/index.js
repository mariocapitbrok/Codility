const A = [2, 3, 1, 5];

function missingElement(arr) {
  // Iterate to find missing element
  let i = 1;
  while (i <= 1 + arr.length) {
    if (!arr.includes(i)) break;
    i++;
  }
  return i;
}

console.log(missingElement(A));
