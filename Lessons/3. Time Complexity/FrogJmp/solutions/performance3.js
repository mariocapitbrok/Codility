function minJumps(x, y, d) {
  distance = y - x;
  return x <= y ? Math.ceil(distance / d) : 0;
}

let X = 10;
let Y = 85;
let D = 30;
console.log(minJumps(X, Y, D));
