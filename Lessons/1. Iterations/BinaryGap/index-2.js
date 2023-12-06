// Set a number constant
//const intNumber = 2140483640;

// Convert a number to binary
let intNumber = {};
intNumber.value = 9;
intNumber.toBinary = (int) => int.toString(2); //string
intNumber.binary = intNumber.toBinary(intNumber.value);

// Split the binary into an array
let binNumber = {};
binNumber.value = intNumber.binary;
binNumber.toArray = (str) => [...str]; //array
binNumber.array = binNumber.toArray(binNumber.value);

// Find every one's position
binNumber.getOnePositions = (binArray) => {
  let position = 0;
  let positionArray = [];
  for (let i of binArray) {
    position += 1;
    if (i === '1') {
      positionArray = [position, ...positionArray];
    }
  }
  return positionArray; // array
};
binNumber.onePositions = binNumber.getOnePositions(binNumber.array);

// Find gaps between ones' positions
binNumber.getGaps = (onePositions) => {
  let gaps = [];
  for (let i of onePositions) {
    const preIdx = onePositions.indexOf(i) - 1;
    const idx1 = preIdx >= 0 ? preIdx : 0;
    const idx2 = onePositions.indexOf(i);
    let dif = onePositions[idx1] - onePositions[idx2];
    let gap = dif > 0 ? dif - 1 : 0;
    if (gap > 0) gaps = [gap, ...gaps];
  }
  return gaps; // array
};
binNumber.gaps = binNumber.getGaps(binNumber.onePositions);

// Sum all gaps
binNumber.sumGaps = (gaps) => {
  let totalGaps = 0;
  for (let gap of gaps) {
    totalGaps += 1;
  }
  return totalGaps;
};
binNumber.totalGaps = binNumber.sumGaps(binNumber.gaps);

// Create binaryGap object.
let binaryGap = {};

// totalGaps function
binaryGap.totalGaps = (intNumber, binNumber, totalGaps) => {
  return (
    `The binary number of ${intNumber} ` +
    `is ${binNumber} and has ${totalGaps === 0 ? 'no' : totalGaps} ` +
    `binary gap${totalGaps === 1 ? '.' : 's.'}`
  );
};

// largest gap function
binaryGap.largestGap = (gaps, totalGaps) => {
  const maxGap = Math.max(...gaps);
  return totalGaps > 0 ? `The longest one is of length ${maxGap}.` : '';
};

// solution function
binaryGap.solution = (input) => {
  let { value: int, toBinary } = intNumber;
  let {
    value: bin,
    gaps,
    array: binArray,
    toArray,
    onePositions,
    getOnePositions,
    getGaps,
    sumGaps,
    totalGaps,
  } = binNumber;

  int = input;
  bin = toBinary(int);
  binArray = toArray(bin);
  onePositions = getOnePositions(binArray);
  gaps = getGaps(onePositions);
  totalGaps = sumGaps(gaps);

  console.log(binaryGap.totalGaps(int, bin, totalGaps));
  console.log(binaryGap.largestGap(gaps, totalGaps));
};

// binaryGap.solution call
binaryGap.solution(529);
