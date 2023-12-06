A = [100, 100, 100, -10];
D = ['2020-12-31', '2020-12-22', '2020-12-03', '2020-12-29'];

A2 = [180, -50, -25, -25];
D2 = ['2020-01-01', '2020-01-01', '2020-01-01', '2020-01-31'];

A3 = [1, -1, 0, -105, 1];
D3 = ['2020-12-31', '2020-04-04', '2020-04-04', '2020-04-14', '2020-07-12'];

let transaction = { a: 0, d: '' };

function balance(amounts, days) {
  let balance = 0;
  let mon = 12;
  let fee = 0;
  let arr = [];

  for (let i = 0; i < days.length; i++) {
    //console.log(amounts[i], days[i]);
    let t = {};
    balance += amounts[i];
    t = { a: amounts[i], d: days[i], b: balance, f: 0 };
    arr = [...arr, t];
  }

  //console.log(arr);
  fee = 5 * mon;
  balance = arr[arr.length - 1].b - fee;

  return balance;
}
console.log(balance(A2, D2));
