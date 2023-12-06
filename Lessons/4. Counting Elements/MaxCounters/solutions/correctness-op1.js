/* 
Variables:
N -> Counters = 0,
X -> CounterIdx
increase(X) − counter X is increased by 1,
max counter − all counters are set to the maximum value of any counter.

A -> Given array. Consecutive operations.
M -> A.length
K -> IntegerIdx -> OperationIdx

*/

// Set objects
// Set operations
// Create objects
// Create object properties
// Create object methods
// Return the solution

A = [3, 4, 4, 6, 1, 4, 4]; // Operations
N = 5; // Counters

let counter = {};
let counters = [];

counter.value = 0;

counter.increase = (counter, increment) => {
  counter.value += increment;
  return counter;
};

counter.isMaxCounter = function () {
  return 'true/false';
};

counters.setup = function (countersQty) {
  let i = 1;
  let ctrs = [];
  while (i <= countersQty) {
    ctrs = [...ctrs, { idx: i, value: 0 }];
    i++;
  }

  return ctrs; // Initialized counters array
};

counters.toMaximum = (counters) => {
  let ctrs = [...counters];

  // Find maximum value
  ctrs.sort((a, b) => b.value - a.value);
  let max = ctrs[0].value;

  // Asign maximum value
  for (let ctr of ctrs) {
    ctr.value = max;
  }

  return ctrs; // All counters set to current maximum value
};

counters.getValues = function (countersQty, operations) {
  let ctrs = counters.setup(countersQty);
  let ctr = {};

  // Iterate operations
  for (let i of operations) {
    ctr = ctrs[i - 1];

    if (i <= countersQty) {
      ctr = counter.increase(ctr, 1);
    }

    if (i > countersQty) {
      ctrs = counters.toMaximum(ctrs);
    }
  }

  let result = [];
  for (let c of ctrs) {
    result = [...result, c.value];
  }

  return result; // Array with the value of every counter'
};

console.log(counters.getValues(N, A));
