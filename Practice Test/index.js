// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let B = A.sort();
  console.log(B);
  let n = 0;
  let n2 = 0;
  for (let i of B) {
    n = B[i-1];
    if (n2 !== n || n2 !== n +1) console.log(n)
  }

}

const A = [1,3,6,4,1,2]
solution(A);