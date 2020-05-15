// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
    let retStr = '';
    let count = 1;
    for (let i = 0; i < n; i++) {
        let rowStr = '';
        for(let j = 0; j < i + 1; j++) {   
            rowStr = rowStr + count;
            count++;
        }
        //console.log(rowStr, n, count);
        if (i !== n - 1) rowStr += '\n';
        retStr += rowStr;
    }
    console.log(`n = ${n}, count = ${count}, retStr = ${retStr}`);
    return retStr;
};

module.exports = { floydsTriangle };
