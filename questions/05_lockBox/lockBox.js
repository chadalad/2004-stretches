const lockBox = (code, description) => {
  // write code here
  if (typeof(code) !== Number) {
    throw 'invalid arg types';
  }
  else if (typeof(description) !== String) {
    throw 'invalid arg types';
  }

  const modCode = (code, newCode) => {
    code = newCode;
    return code;
  }

  const modMessage = () => {

  }

  const revealMessage = () => {

  }


};

module.exports = { lockBox };
