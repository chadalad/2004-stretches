//arrayexchange should exchange the elements of two arrays in-place in a way that their new content is also reversed.
//restricted use: reverse()

const arrayexchange = (arr1, arr2) => {
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        const arr1OGLength = arr1.length;
        const arr2OGLength = arr2.length;
        const temp = [];
        for(let i = 0; i < arr2OGLength; i++) {
            temp.push(arr2.pop());
        }
        for(let i = 0; i < arr1OGLength; i++) {
            arr2.push(arr1.pop());
        }
        for(let i = 0; i < arr2OGLength; i++) {
            arr1.push(temp.shift());
        }
        console.log(arr1, arr2)
    } else {
        throw new Error ('arguments must be arrays');
    }
};

module.exports = { arrayexchange };
