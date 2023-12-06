/*
DNA => A, C, G, T => types of succesive nucleotides
impact factor: integer
A:1
C:2
G:3
T:4

Minimal impact factor of nucleotides in a part of DNS secuence

S = DNA secuence
M = queries = integers in P and Q arrays
K = minimal impact between P[K] and Q[K]
*/

const S = 'CAGCCTA';
const P = [2, 5, 0];
const Q = [4, 5, 6];

const S2 = 'A';
const P2 = [0];
const Q2 = [0];

console.log(getMinImpactArray(S, P, Q));
function getMinImpactArray(str, arrP, arrQ) {
  let dataIsValid = false;
  let minValue = 0;
  let minArray = [];

  // Validate data
  dataIsValid = validateData(str, arrP, arrQ);
  if (!dataIsValid) return;

  // Pair nucleotides positions
  pairs = pairArrays(arrP, arrQ);

  // Get minimal Impact Array
  for (let pair of pairs) {
    let pairStart = pair.a;
    let pairEnd = pair.b;
    //console.log(pairStart, pairEnd);
    minValue = getMinNucValue(str, pairStart, pairEnd);
    //console.log(minValue);
    minArray = [...minArray, minValue];
  }

  return minArray;
}

//console.log(stringToArray(S, 2, 4));
function stringToArray(str, start, end) {
  let strArray = [];

  for (let i = start; i <= end; i++) {
    strArray = [...strArray, str.substr(i, 1)];
  }

  return strArray;
}

//console.log(pairArrays(P, Q));
function pairArrays(arrA, arrB) {
  let allPairs = [];
  let length = arrA.length;

  let i = 0;
  while (i < length) {
    pair = { a: arrA[i], b: arrB[i] };
    allPairs = [...allPairs, pair];
    //console.log(pair);
    i++;
  }

  return allPairs; // objects array
}

//console.log(minimalImpactFactor('G', 'C'));
function minimalImpactFactor(strA, strB) {
  let a = nucleotideImpactFactor(strA);
  let b = nucleotideImpactFactor(strB);
  let minimal = a < b ? a : b;
  return minimal;
}

//console.log(nucImpactFactor('G'));
function nucImpactFactor(str) {
  switch (str) {
    case 'A':
      return 1;
    case 'C':
      return 2;
    case 'G':
      return 3;
    case 'T':
      return 4;
  }
}

//console.log(validateData(S2, P2, Q2));
function validateData(str, arrP, arrQ) {
  const sLen = str.length;
  const arrPLen = arrP.length;
  const arrQLen = arrQ.length;

  if (!(sLen >= 1 && sLen <= 100000)) return false;
  if (!(arrPLen === arrQLen)) return false;
  if (!(arrPLen >= 1 && arrPLen < 50000)) return false;

  return true;
}

//console.log(toNucArray(P, S));
function toNucArray(posArray, strArray) {
  let nuc = '';
  let position = 0;
  let nucArray = [];

  for (let i = 0; i < posArray.length; i++) {
    position = posArray[i];
    nuc = strArray[position];
    nucArray = [...nucArray, nuc];
  }
  return nucArray;
}

//console.log(getMinNucValue(S, 2, 4));
function getMinNucValue(str, start, end) {
  let nucArray = stringToArray(str, start, end);
  let nucValue = 0;
  let nucValueArray = [];
  let minNucValue = 0;

  for (nuc of nucArray) {
    //console.log(nuc, nucImpactFactor(nuc));
    nucValue = nucImpactFactor(nuc);
    nucValueArray = [...nucValueArray, nucValue];
  }

  nucValueArray.sort((a, b) => a - b);
  minNucValue = nucValueArray[0];

  return minNucValue;
}
