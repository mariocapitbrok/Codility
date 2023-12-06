S = 'We test coders. Give us a try?';
S2 = 'We test coders. Give us a try?';

function maxWords(str) {
  let strArr = str.split('.');
  let arr2 = [];
  let wordsTotArr = [];

  for (let s of strArr) {
    if (s.includes('?')) {
      strArr.pop();
      let arr2 = s.split('?');
      for (let i = 0; i < arr2.length; i++) {
        strArr = [...strArr, arr2[i]];
        if (s.includes('!')) {
          strArr.pop();
          let arr3 = s.split('!');
          for (let j = 0; j < arr3.length; j++) {
            strArr = [...strArr, arr2[j]];
          }
        }
      }
    }
    //console.log(s);
  }

  for (let s of strArr) {
    let arr4 = s.split(' ');
    let count = arr4.length;
    wordsTotArr = [...wordsTotArr, count];
  }

  //console.log(wordsTotArr);
  wordsTotArr.sort((a, b) => b - a);
  result = wordsTotArr[0];

  return result - 1;
}
console.log(maxWords(S));
