const lockBox = (code, message) => {
  // write code here
  if (typeof code !== 'number') {
    throw new Error('invalid code type');
  }
  else if (typeof description !== 'String') {
    throw new Error('invalid message type');
  }
  /*
  else {
    const modCode = (code, newCode) => {
      code = newCode;
      return code;
    }
  
    const modMessage = () => {
  
    }
  
    const revealMessage = () => {
  
    }
  }
  */
 let accessCode = code;
 let secretMessage = message;
  


};

module.exports = { lockBox };
