A = [-3, 1, 2, -2, 5, 6];

function maxTripletProduct(a) {
  a.sort((a, b) => a - b);
  console.log(a);
  l = a.length;
  p1 = a[0] * a[1] * a[l - 1];
  console.log(a[0], a[1], a[l - 1]);
  p2 = a[l - 3] * a[l - 2] * a[l - 1];
  console.log(a[l - 3], a[l - 2], a[l - 1]);

  //console.log(n, p1, p2);
  let max = Math.max(p1, p2);
  return max;
}
console.log(maxTripletProduct(A));
