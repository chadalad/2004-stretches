//Write a function that takes a list of strings and prints them
// one per line, in a rectangular frame.
// ********
// * Any  *
// * Gun  *
// * Can  *
// * Play *
// ********

const movieposter = (arr) => {
  //write code here
  if(arr === undefined || arr.length == 0) throw new Error('invalid arr');
  let retStr = '';

  let maxLength = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length === 0) {
      maxLength = arr[i].length;
    }
  }

  for(let i = 0; i < maxLength + 2; i++) {
    retStr += '*';
  }

  for(let i = 0; i < arr.length; i++) {
    retStr += `* ${arr[i]}`;
    retStr += '/n';
  }

  for(let i = 0; i < maxLength + 2; i++) {
    retStr += '*';
  }

  return retStr;
};

module.exports = { movieposter };
