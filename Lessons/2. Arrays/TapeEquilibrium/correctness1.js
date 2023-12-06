A = [5, 6, 2, 4, 1];

// take each element
//// sum element + all behind
//// sum element + all forward
//// store difference result in an array
// sort the array min to max
// return the min result

function sum(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum;
}

function minDiff(arr) {
  difArray = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let start = i + 1;
    let end = arr.length;
    let dif = 0;

    let arrayL = arr.slice(0, start);
    let sumArrayL = sum(arrayL);
    let arrayR = arr.slice(start, end);
    let sumArrayR = sum(arrayR);

    dif = Math.abs(sumArrayL - sumArrayR);
    difArray = [dif, ...difArray];
    //console.log(difArray);
  }

  difArray.sort((a, b) => a - b);
  return difArray[0];
}

console.log(minDiff(A));
