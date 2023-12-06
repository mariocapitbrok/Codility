function minJumps(x, y, d) {
  distance = y - x;
  if (distance % d == 0) {
    return distance / d;
  } else {
    return Math.ceil(distance / d);
  }
}

let X = 10;
let Y = 85;
let D = 30;
console.log(minJumps(X, Y, D));
