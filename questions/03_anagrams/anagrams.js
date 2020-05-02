// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  //YOUR CODE
  if(str1.length === str2.length) {
    //return true;
    const str1Obj = {};
    const str2Obj = {};
    for(let i = 0; i < str1.length; i++) {
      if(str1Obj.hasOwnProperty(str1[i])) {
        str1Obj[str1[i]]++;
      }
      str1Obj[str1[i]] = 1;
    }

    for
    if(str1Obj)
    return true;
  }
  else {
    return false;
  }
};

module.exports = { checkAnagrams };
