/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2}, 
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/

function zip(objs) {
  // YOUR CODE
  
  //classic reduce case
  let retObj = objs.reduce((acc, currentElement) => {
    //iterate through each of the elements
    for (let prop in currentElement) {
      if (!acc.hasOwnProperty(prop)) {
        acc[prop] = currentElement[prop];
        //console.log(prop, acc[prop], acc)
      } else {
        acc[prop] += currentElement[prop];
      }
    }
    
    //console.log(currentElement);
    return acc;
  }, {})

  //console.log(retObj);
  return retObj;

}

module.exports = { zip };
