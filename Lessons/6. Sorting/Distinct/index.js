A = [2, 1, 1, 2, 3, 1];

function distinctValues(arr) {
  len = arr.length;
  if (!(len >= 0 && len <= 100000)) return;

  arr.sort((a, b) => a - b);
  distinct = [];

  for (let num of arr) {
    if (!(num >= -1000000 && num <= 1000000)) return;

    if (!distinct.includes(num)) {
      distinct = [...distinct, num];
    }
  }

  return distinct.length;
}
console.log(distinctValues(A));
