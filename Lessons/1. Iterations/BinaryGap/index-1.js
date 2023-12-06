// Set a number constant
const intNumber = 2140483640;

// Convert a number to binary
function toBinary(intNumber) {
  const binNumber = intNumber.toString(2);
  return binNumber; //string
}
const binNumber = toBinary(intNumber);

// Split the binary into an array
function toArray(str) {
  const arr = [...str];
  return arr; //array
}
const binArray = toArray(binNumber);

// Find every one's position
function getOnePositions(binArray) {
  let position = 0;
  let positionArray = [];
  for (let i of binArray) {
    position += 1;
    if (i === '1') {
      positionArray = [position, ...positionArray];
    }
  }
  return positionArray; // array
}
const positions = getOnePositions(binArray);

// Find gaps between ones' positions
function getGaps(positions) {
  let gaps = [];
  for (let i of positions) {
    const preIdx = positions.indexOf(i) - 1;
    const idx1 = preIdx >= 0 ? preIdx : 0;
    const idx2 = positions.indexOf(i);
    let dif = positions[idx1] - positions[idx2];
    let gap = dif > 0 ? dif - 1 : 0;
    if (gap > 0) gaps = [gap, ...gaps];
  }
  return gaps; // array
}
const gaps = getGaps(onePositions);

// Sum all gaps
function sumGaps() {
  let totalGaps = 0;
  for (let gap of gaps) {
    totalGaps += 1;
  }
  return totalGaps;
}
const totalGaps = sumGaps(gaps);

// Deliver gaps total
function totalGapsResult(intNumber, binNumber, totalGaps) {
  return (
    `The binary number of ${intNumber} ` +
    `is ${binNumber} and has ${totalGaps === 0 ? 'no' : totalGaps} ` +
    `binary gap${totalGaps === 1 ? '.' : 's.'}`
  );
}
console.log(totalGapsResult(intNumber, binNumber, totalGaps));

// Deliver the largest gap.
function largestGapResult(gaps, totalGaps) {
  const maxGap = Math.max(...gaps);
  if (totalGaps > 0) {
    return `The longest one is of length ${maxGap}.`;
  }
}
console.log(largestGapResult(gaps, totalGaps));
