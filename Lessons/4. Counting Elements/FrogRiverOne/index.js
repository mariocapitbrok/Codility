// Frog wants to get to the other side of the river
// Is initially located on position 0. X = 0
// Wants to get to position X+1
// N integers of array A represent falling leaves
// A[K] position where one leaf falls at time K
// K in seconds.
// Find earliest time when all leaves appear from 1 to X
// Return -1 if frog is not able to jump th other side.

// Iterate items.
// Check if all positions are covered by leaves.
// Stop when all leaves are in position

const X = 5;
const A = [1, 3, 1, 4, 2, 3, 5, 4];

function lastSecondToJump(x, arr) {
  let sec = 0;
  let pos = 0;
  let leaves = [...arr];
  let fallenLeaves = [];
  let fallenLeavesPos = [];

  for (let leaf of leaves) {
    pos = leaf;
    if (!fallenLeavesPos.includes(pos) && pos <= x) {
      fallenLeaves = [{ sec, pos }, ...fallenLeaves];
      fallenLeavesPos = [pos, ...fallenLeavesPos];
    }
    if (fallenLeaves.length === x) {
      fallenLeaves.sort((a, b) => b.sec - a.sec);
      //console.log(fallenLeaves);
      return fallenLeaves[0].sec;
    }
    sec += 1;
  }
  return -1;
}
console.log(lastSecondToJump(X, A));
