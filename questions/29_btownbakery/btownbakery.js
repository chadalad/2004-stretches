// B-Town bakery over-bought the supplies to make cake and needs to know how many they can make all together.

const btownbake = (recipe, supplies) => {
  //enter code here
  if(typeof recipe !== 'object' || typeof supplies !== 'object') {
    throw new Error('arg not obj');
  }
  // compare recipes and supplies, which is base?
  let creationCount = [];
  //iterate over the object - only really care about what we have

  recipe.forEach(elem => {
    let count = 0;
    if (supplies[elem]) {
      count = Math.floor(supplies[elem] / recipe[elem]);
    }
    creationCount.push({ elem : count });
  })
  console.log(creationCount);

};

module.exports = { btownbake };
