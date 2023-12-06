// Create CyclicRotation Object
cyclicRotation = {};
cyclicRotation.solution = function (A, K) {
  // Iterate the array A to make the shift K times
  if (A.length > 0) {
    for (let i = 0; i < K; i++) {
      let popped = A.pop();
      A.unshift(popped);
    }
    // Present result
    return A;
  } else {
    return [];
  }
};
// Declare A and K values.
const A = [3, 8, 9, 7, 6];
const K = 3;
const result = cyclicRotation.solution(A, K);
console.log(result);
