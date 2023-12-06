// Create CyclicRotation Object
cyclicRotation = {};
cyclicRotation.solution = function (A, K) {
  // Iterate the array A to make the shift K times
  let idx1 = 0;
  let idx2 = 0;
  let idx3 = 0;
  let A2 = [];
  for (let i of A) {
    idx1 = A.indexOf(i);
    idx2 = idx1 + 1;
    idx3 = idx2 <= A.length - 1 ? idx2 : 0;
    console.log(idx1, idx2, A.length, idx3);
    A2[idx1] = A[idx3];
  }
  // Present result
  console.log(A2);
};
// Declare A and K values.
const A = [3, 8, 9, 7, 6];
const K = 3;
cyclicRotation.solution(A, K);
