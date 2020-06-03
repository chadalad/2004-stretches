//Write a function that takes an OBJ of nested elements
// and returns an OBJ of each nested route separeated by a forward ('/') and its end leaf value
//For example...
// const phonebookData = {
//   a: {
//     b: {
//       c: 12,
//     },
//   },
// };
// directory(phonebookData)=>{ 'a/b/c': 12 }

let retObj = {};

const directory = (obj) => {
  //code in here
  

  Object.keys(obj).forEach(key => {
    console.log(key)
    if (typeof obj[key] === 'object') {
      console.log(obj[key])
      directory(obj[key]);
    }
    else retObj[key] = obj[key];
  })

  return retObj;
};

module.exports = { directory };
