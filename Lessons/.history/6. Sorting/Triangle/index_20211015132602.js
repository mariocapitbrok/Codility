const A = [10, 2, 5, 1, 8, 20];

const result = isTriangular(10, 50, 1);
console.log(result);

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
