// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  //YOUR CODE
  constructor(numSides, totalDice) {
  
    /*
    if (numSides < 4 || typeof numSides !== 'number') {
      //throw new Error('invalid number of sides per dice');
      console.error('invalid num sides')
    }
    if (totalDice < 1 || typeof totalDice !== 'number') {
      //throw new Error('invalid number of total dice');
      console.error('invalid num total dice')
    }
    // this.numSides = numSides;
    // this.totalDice = totalDice;
    */

    // if (numSides > 3 && typeof numSides === 'number') {
    //   if (totalDice > 0 && typeof totalDice === 'number') {
    //     this.numSides = numSides;
    //     this.totalDice = totalDice;
    //   } else {
    //     throw new Error('invalid num total dice');
    //   }
    // } else {
    //   throw new Error('invalid num sides');
    // }

    if (numSides < 3) {
      throw new Error('invalid num sides');
    } else if (typeof numSides !== 'number'){
      throw new Error('invalid num sides');
    } else if (totalDice < 1){
      throw new Error('invalid num total dice');
    } else if (typeof totalDice !== 'number'){
      throw new Error('invalid num total dice');
    } else  {
      console.log('yayce!')
      this.numSides = numSides;
      this.totalDice = totalDice;
      this.history = [];
    }
  }

  roll() {
    let arr = []
    for (let i = 0; i < this.totalDice; i ++) {
      let rolled = Math.floor(Math.random() * (this.numSides - 1) + 1);
      // console.log(rolled)
      arr.push(rolled);
      //this.history.push(rolled);
    }
    //console.log('before', this.history)
    this.history.push(arr);
    //console.log('after', this.history);
    return arr;
  }

  
  // && typeof numSides === 'number') {
  //   if (totalDice > 0 && typeof totalDice === 'number') {
  //     this.numSides = numSides;
  //     this.totalDice = totalDice;
  //   } else {
  //     throw new Error('invalid num total dice');
  //   }
  // } else {
  //   throw new Error('invalid num sides');
  // }

  
}

module.exports = { DiceRoller };
