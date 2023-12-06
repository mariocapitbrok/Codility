// Frog
const frog = {};

frog.minJumps = function (x, y, d) {
  frog.distance = x;
  frog.minJumps = 0;
  while (frog.distance < y && x < y) {
    frog.minJumps += 1;
    frog.distance += d;
  }

  return frog.minJumps;
};

let X = 1;
let Y = 5;
let D = 5;
console.log(frog.minJumps(X, Y, D));
