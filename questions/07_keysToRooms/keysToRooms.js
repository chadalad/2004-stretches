/* 
There are N rooms and you start in room 0. 
Each room has a distinct number in 0, 1, 2, ..., N-1 
Each room may have some keys to access the next room.  

Initially, all the rooms start locked (except for room 0).
To open the next room, you must have already encountered 
the appropriate key for that room.

EXAMPLE OF ROOMS 
ex 1. 
[[1],[2],[3],[]] 

ex 2. 
[[1,3],[3,0,1],[2],[0]]

*/

const keysToRooms = (rooms) => {
  //YOUR CODE HERE
  const keysAcquired = [];
  const currentIndex = 0;

  rooms.forEach(element => {
    console.log(element.length);
    if(element.length >= 1) {
      return false;
    } else {
      if (keysAcquired.includes(currentIndex))
      keysAcquired.push(element[0]);
    }
    
    console.log(element.value);
    currentIndex++;
  })


  return true;
};

module.exports = { keysToRooms };
