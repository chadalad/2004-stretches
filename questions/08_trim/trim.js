// trim takes an object and removes any keys that have undefined or null values

const trim = obj => {
  // YOUR CODE
  let retObj = {};

  for(let key in obj) {
    if (obj[key] !== undefined && obj[key] !== null) {
      retObj[key] = obj[key];
    }
  }

  return retObj;
};

module.exports = { trim };
