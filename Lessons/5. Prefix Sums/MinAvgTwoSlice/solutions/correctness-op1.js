/*
Goal:
The smallest starting position of the slice with the minimal average.

// Define a slice object
// Define an sliceAverage function
// Iterate the array to obtain all posible slices
  // Store slices in slicesArray

*/

A = [4, 2, 2, 5, 1, 5, 8];
A2 = [4, 2];

class Slice {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.values = [];
    this.average = 0;
  }
  getAverage(arr) {
    let average = 0;
    let sum = 0;
    let n = arr.length;

    for (let num of arr) {
      sum += num;
    }

    average = sum / n;
    return average;
  }
}

slice = { start: 0, end: 0, values: [], average: 0 };

function validateElement(int) {
  if (!(int >= -10000 && int <= 10000)) return false;
  return true;
}
//console.log(validateElement(10000));

function getSlices(arr) {
  let slices = [];
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    let P = arr[i];
    let j = i + 1;
    let values = [P];

    while (j < length) {
      //console.log('making slices');
      let Q = arr[j];
      let s = new Slice(i, j);
      values = [...values, Q];
      s.values = values;
      s.average = s.getAverage(values);
      slices = [...slices, s];
      j++;
    }
  }

  return slices; // array
}
//console.log(getSlices(A));

function getMinAvgSlices(arr) {
  //console.log('Getting min avg slices');
  let slices = arr;
  let minAvgSlices = [];
  let currentSlice = new Slice();

  slices.sort((a, b) => a.average - b.average);

  currentSlice = slices[0];
  minAvgSlices = [...minAvgSlices, currentSlice];

  for (let i = 0; i < slices.length - 1; i++) {
    let nextSlice = new Slice();

    nextSlice = slices[i + 1];

    //console.log(nextSlice.average);
    if (nextSlice.average === currentSlice.average) {
      minAvgSlices = [...minAvgSlices, nextSlice];
    }
  }
  return minAvgSlices;
}

function getMinPosMinAvg(arr) {
  let result = 0;
  let slices = getSlices(arr);
  let minAvgSlices = getMinAvgSlices(slices);

  minAvgSlices.sort((a, b) => a.start - b.start);
  //console.log(minAvgSlices);

  result = minAvgSlices[0].start;

  return result; // integer
}
console.log(getMinPosMinAvg(A));
