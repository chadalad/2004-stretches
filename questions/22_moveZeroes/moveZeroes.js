const moveZeroes = (arr) => {
  //YOUR CODE HERE
//sort 
const zeroArr = [];
const numArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroArr.push(arr[i]);
    } else {
      numArr.push(arr[i]);
    }
  }
  for (let i = 0; i < numArr.length; i++) {
    arr[i] = numArr[i];
  }
  for (let i = 0; i < zeroArr.length; i++) {
    arr[numArr.length + i] = zeroArr[i];
  }
  console.log(zeroArr, numArr, arr);

  return arr;
};

module.exports = { moveZeroes };
