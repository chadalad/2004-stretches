/* Given a string, determine if it is a palindrome */
/* A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam, or racecar */

const validPalindrome = () => {
  //YOUR CODE
  
  let str = Array.from(arguments).toString;

  let pointer1 = '';
  let pointer2 = '';

  for (let i = 0; i < str.length; i ++) {
    pointer1 = str[i];
    pointer2 = str[str.length - 1 - i];
    if (pointer1 !== pointer2) {
      return false;
    }
  }
  return true;
};

module.exports = { validPalindrome };
