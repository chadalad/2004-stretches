//Your excavating a newly found archaeological site and need to track your depth
//Write a function to recursively "dig" through this object installing a depth key along the way
//return the object with it's depth indicated

const recordDepth = (obj) => {
  //write code here
  const depthVal;
  if (typeof obj !== 'object') throw new Error('object required as entry');
  //go through and see how many
  //what is base case? it is to see what the deepest portion is. There are no more objects
  console.log(Object.entries(obj).length);
  // for (let i = 0; i < Object.entries(obj).length; i++) {
  //   console.log(Object.values(obj).includes(typeof 'object'))
  // }
  for(let i = 0; i < Object.values(obj).length; i++) {

  }

};

module.exports = { recordDepth };
