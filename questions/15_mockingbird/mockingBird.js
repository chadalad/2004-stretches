// repeater runs a function n times and returns an array of its outputs
const repeater = (func, n) => {
  // YOUR CODE
  const retArr = [];

  for(let i = 0; i < n; i++) {
    retArr.push(func());
  }

  return retArr;
};

// see test specs to complete this stretch

module.exports = { repeater };
