//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I can be placed before V (5) and X (10) to make 4 and 9.  
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
*/
/*
examples:
1 // I
2 // II
3 // III
4 // IV
1994 // MCMXCIV
*/

const romanInteger = (num) => {
  //YOUR CODE HERE
  if (typeof num !== 'number') throw new Error('invalid number');
  if (num < 1 || num >= 4000) throw new Error('invalid number');
  let retStr = '';
  let workingNum = num;


  while (workingNum > 0) {
    if (workingNum - 1000 >= 0) {
      retStr += 'M';
      workingNum -= 1000;
    } else if (workingNum - 900 >=0) {
      retStr += 'CM';
      workingNum -= 900;
    } else if (workingNum - 500 >=0) {
      retStr += 'D';
      workingNum -= 500;
    } else if (workingNum - 400 >=0) {
      retStr += 'CD';
      workingNum -= 400;
    } else if (workingNum - 100 >=0) {
      retStr += 'C';
      workingNum -= 100;
    } else if (workingNum - 90 >=0) {
      retStr += 'XC';
      workingNum -= 90;
    } else if (workingNum - 50 >=0) {
      retStr += 'L';
      workingNum -= 50;
    } else if (workingNum - 40 >=0) {
      retStr += 'XL';
      workingNum -= 40;
    } else if (workingNum - 10 >=0) {
      retStr += 'X';
      workingNum -= 10;
    } else if (workingNum - 9 >=0) {
      retStr += 'IX';
      workingNum -= 9;
    } else if (workingNum - 5 >=0) {
      retStr += 'V';
      workingNum -= 5;
    } else if (workingNum - 4 >=0) {
      retStr += 'IV';
      workingNum -= 4;
    } else if (workingNum - 1 >=0) {
      retStr += 'I';
      workingNum -= 1;
    }
  }

  
  

  console.log(retStr);
  return retStr;
};


module.exports = { romanInteger };
