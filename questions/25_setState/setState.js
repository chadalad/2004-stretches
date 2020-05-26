// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
  }
  setState(stateObj) {
    // YOUR CODE
    // const newState;
    // this.state = newState;
    //console.log(this.state)
    //console.log(Object.keys(stateObj))
    //this.followingState = Object.from(this.state);
    //console.log(this.followingState, "follow")
    this.nextState = {};
    Object.entries(this.state).forEach(element => {
      if (stateObj[element[0]]) { 
        this.nextState[element[0]] = stateObj[element[0]]; 
      }
      else {
        this.nextState[element[0]] = element[1]
      }
      
    })
    console.log(this.nextState)
    Object.keys(stateObj).forEach(element => {
      //console.log(element);
      //console.log(this.state[element])
      this.state[element] = stateObj[element];
      //console.log(this.state[element])
    });
    console.log(this.state);
   // console.log(this.followingState);
    return this.nextState;
  }
}

module.exports = { StatefulThing };
