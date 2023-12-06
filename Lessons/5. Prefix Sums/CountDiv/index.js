const A = 6;
const B = 11;
const K = 2;

function rangeDivisibleByK(start, end, dividend) {
  let result = 0;
  let range = [];

  // Validate
  if (!(start >= 0) && !(start <= 2000000000)) return;
  if (!(dividend >= 1) && !(K <= 2000000000)) return;
  if (!(start <= end)) return;

  // Create range
  for (let i = start; i <= end; i++) {
    range = [...range, i];
  }
  //console.log('range is', range);

  // Find total divisible numbers
  for (let n of range) {
    //console.log(n, dividend, n % dividend);
    if (n % dividend === 0) result += 1;
  }
  return result;
}

console.log(rangeDivisibleByK(A, B, K));
