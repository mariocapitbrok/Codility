const A = [10, 2, 5, 1, 8, 20];

const result = isTriangular(0, 2, 4);
console.log(result);

function isValidTriplet(p, q, r) {
  if (0 <= p < q < r) {
    return 1;
  } else {
    return 0;
  }
}

function isTriangular(p, q, r) {
  if (
    0 <= p < q < r &&
    A[p] + A[q] > A[r] &&
    A[q] + A[r] > A[p] &&
    A[r] + A[p] > A[q]
  ) {
    return 1;
  } else {
    return 0;
  }
}
