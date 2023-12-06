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

function hasAnyTriangularTriplete(sortedA) {
  for (let i = 0; i < sortedA.lenght; i++) {
    console.log(p);
    let p = sortedA[i];
    for (let j = i + 1; j < sortedA.lenght - j; j++) {
      let q = sortedA[j];
      for (let k = j + 1; k < sortedA.length - k; k++) {
        let r = sortedA[k];
        console.log(p, q, r);
      }
    }
  }
}

hasAnyTriangularTriplete(sortedA);
