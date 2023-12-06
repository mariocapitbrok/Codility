A = [-3, 1, 2, -2, 5, 6];

function maxTripletProduct(arr) {
  // Validate
  let length = arr.length;
  if (!(length >= 3 && length <= 100000)) return;
  for (let element of arr) {
    if (!(element >= -1000 && length <= 1000)) return;
  }

  let tripletArray = [];
  let maxTripletProduct = 0;

  for (let i = 0; i < length; i++) {
    let triplet = { p: 0, q: 0, r: 0, prod: 0 };
    triplet.p = arr[i];
    for (let j = i + 1; j < length; j++) {
      triplet.q = arr[j];
      for (let k = j + 1; k < length; k++) {
        triplet.r = arr[k];
        triplet.prod = triplet.p * triplet.q * triplet.r;
        triplet2 = { ...triplet };
        tripletArray = [...tripletArray, triplet2];
        //console.log(triplet);
      }
    }
  }

  tripletArray.sort((a, b) => b.prod - a.prod);
  maxTripletProduct = tripletArray[0].prod;

  return maxTripletProduct;
}
console.log(maxTripletProduct(A));
