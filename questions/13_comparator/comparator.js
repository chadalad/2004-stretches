//write a func that takes two arg... selectKey and obj

const comparator = (selectKey, obj) => {

    const compareName = (a, b) => {
        const lastNameA = a.name.split(' ')[1];
        const lastNameB = b.name.split(' ')[1];
        let comparison = 0;
        if (lastNameA > lastNameB) {
            comparison = 1;
        } else if (lastNameA < lastNameB) {
            comparison = -1;
        } 
        return comparison;
    }
    
    const compareAge = (a, b) => {
        const ageA = a.age;
        const ageB = b.age;
        let comparison = 0;
        if (ageA > ageB) {
            comparison = 1;
        } else if (ageA < ageB){
            comparison = -1;
        }
        return comparison;
    }

    if (selectKey !== 'name' && selectKey !== 'age') {
        return 'incorrect key';
    } else if (selectKey === 'name') {
        return obj.sort(compareName);
    } else if (selectKey === 'age') {
        return obj.sort(compareAge);
    }
    
    /*
    //obj is an array
    const retObj = [];

    //hell
    obj.forEach(element => {
        if(Object.keys(element).includes(selectKey)) {
            element.lastName = element['name'].split(' ')[1];
            //console.log(element.lastName);
            if(retObj.length === 0) {
                retObj.push(element);
            } else {
                for(let i = 0; i < retObj.length; i++) {
                    //retObj[i][selectKey]
                    if(typeof selectKey === 'string') {
                        if(element.lastName[0] < retObj[i]['lastName'][0]) {
                            const arr1 = retObj.slice(0, i);
                            const arr2 = retObj.slice(i, retObj.length);
                            const position = [element]
                            retObj = arr1.concat(position).concat(arr2);
                            console.log(retObj);
                        }
                    }
                }
            }
        }
    });



    

    if(retObj.length === 0) {
        return 'incorrect key';
    } else {
        console.log(retObj);
    }
    */
};

module.exports = { comparator };
