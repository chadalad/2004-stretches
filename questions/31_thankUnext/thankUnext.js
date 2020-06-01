// create an array method called "next" that console.logs
// the next index in the array when called.

/*
 Example:
 someArr = ['shake', 'and', 'bake']
 someArr.next() // "shake"
 someArr.next() // "and" 
 someArr.next() // "bake"
*/

// hint: you are adding functionality directly to the
// javascripts global Array object

// ****no test writing required on this stretch

// YOUR CODE (intentionally blank):

Object.defineProperty(Array.prototype, 'next', {
    value: function() {
        if(i === undefined) {
            console.log(this[0])
        } else {
            console.log(this[i])
        }
        
    }
})

// no export statement required
