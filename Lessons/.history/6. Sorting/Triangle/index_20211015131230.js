const A = [10, 2, 5, 1, 8, 20];

const result = isValidTriplet(0, 2, 4);
console.log(result);

function isValidTriplet(p, q, r) {
  if (0 <= p < q < r) return true;
}
