// Create a class called Iterator whose instances takes an array
// and method next() interates through it til complete

class Iterator {
  //write code here

  constructor(arra) {
    if(typeof arra !== 'object') throw new Error('arg must be arr');
    const arr = arra;
    const length = arra.length;
    const currentIdx = 0;
    const nextVal = {
      done: false,
      value: '',
    };
  }

  next() {
    console.log('made it');
    console.log(this.length)
    if (this.currentIdx < this.length) {
      console.log('here')
      this.nextVal = {
        done: false,
        value: this.arr[this.currentIdx],
      }
      this.currentIdx++;
    }
    return this.nextVal;
    
  }
}

module.exports = { Iterator };
