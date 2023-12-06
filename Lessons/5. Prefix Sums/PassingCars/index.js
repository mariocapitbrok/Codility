/*
Consecutive cars on a road
0: east: p
1: west: q
*/
A = [0, 1, 0, 1, 1];

/*
Iterate consecutive cars
  Take and remove the 1st P and pair it with Qs 
    Find the 1st P
    Store each pair found.
    Sum al pairs found.
    If sum > 1,000,000,000 return -1
  repeat until no car remains in A.
  
Return sum
*/

function passingCarsPairs(arr) {
  let car = 0;
  let pairs = 0;
  for (let i = 0; i < arr.length; i++) {
    car = arr[i];
    if (car === 0) {
      //console.log('pair with others next');
      for (let ii = i + 1; ii < arr.length; ii++) {
        //console.log('pairing with others');
        car = arr[ii];
        if (car === 1) pairs += 1;
        if (pairs > 1000000000) return -1;
      }
    }
  }
  return pairs;
}

console.log(passingCarsPairs(A));
