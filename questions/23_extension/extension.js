//write a function that takes a function, and makes it callable with two invocations

let count = 0;
let func;
let input1;
let input2;

const extensions = (callback) => {

    if (count === 0) {
        count++;
        func = callback;
        return func;
    } else if (count === 1) {
        count ++;
        input1 = Array.from(arguments)[0];
        return callback;
    } else if (count === 2) {
        count++;
        input2 = Array.from(arguments)[0];
        console.log("inputs",callback, input1, input2)
        return callback(input1, input2);
    }

    //this passes 1 test case...but that's not enough
    // let retVal = callback();
    // console.log(retVal);
    // return retVal;

};

module.exports = { extensions };
