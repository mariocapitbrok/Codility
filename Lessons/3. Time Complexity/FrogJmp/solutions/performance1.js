function minJumps(x, y, d) {
  distance = x;
  minJumps = 0;
  while (distance < y && x < y) {
    minJumps += 1;
    distance += d;
  }

  return minJumps;
}

let X = 1;
let Y = 999111321;
let D = 5;
console.log(minJumps(X, Y, D));
