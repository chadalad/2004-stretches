// see test specs

let cashh = {};

function cache(func) {
  // YOUR CODE
  if (typeof func !== 'function') throw new Error('Input must be a function.');
  //let args = [...arguments];
  //let cache = [];

  return (val) => {
    //console.log(Object.keys(cache))
    //console.log(Object.entries(cashh))
    console.log(Object.keys(cashh), val)
    if (!Object.keys(cashh).includes(val.toString())) {
      cashh[val] = func(val);
      return cashh[val];
    } else {
      return cashh[val];
    }
    //return func(val);
  };
}

module.exports = { cache };
