const delay = (str, time) => {
  //Your code here
  

    return new Promise((resolve) => {
      setTimeout(
        resolve,
        time)
    }).then(() => {
      console.log(str);
    })
};

module.exports = { delay };
