const A = [10, 2, 5, 1, 8, 20];

const sortedA = A.sort((a, b) => a - b);
// [ 1, 2, 5, 8, 10, 20 ]
//console.log(sortedA);

const result = isTriangular(0, 2, 4);
//console.log(result);

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

function createTriplets(sortedA) {
  let triplets = [];
  let triplet = {};
  let p = 0;
  let q = 0;
  let r = 0;

  for (let i = 0; i < sortedA.length; i++) {
    p = sortedA[i];
    console.log(p);
  }
}

createTriplets(sortedA);
