const fizzBuzz = (int) => {
  //YOUR CODE HERE
  if(typeof int !== 'number') {
    throw new Error('nan');
  } else if (int < 0) {
    throw new Error('must be positive');
  } else if (!Number.isInteger(int)) {
    throw new Error('must be an integer');
  }

  const retArr = [];

  for(let i = 0; i < int; i++) {
    if ((i + 1) % 3 === 0) {
      retArr.push('Fizz');
    } else if ((i + 1) % 5){
      retArr.push('Buzz');
    } else {
      retArr.push(i + 1);
    }
  }

  return retArr;
};
module.exports = { fizzBuzz };
