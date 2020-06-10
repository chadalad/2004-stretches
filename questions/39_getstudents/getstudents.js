const axios = require('./axios');
//using the *fake* API-endpoint ... https://fullstack.com/api/cohort2004
//create a function that takes a student name and uses axios to hit the endpoint with a get request
//returning that specific student as specified in the test
//* you don't need to NPM i axios for this test... Only work within this file and use promises

const getStudent = (name) => {
  //code in here
  if(typeof name === 'string') {
    axios.get('https://fullstack.com/api/cohort2004')
      .then(data => {
        console.log(data);
        //const students = JSON.stringify(data);
        //console.log(students);

      })


  } else {
    throw new Error('arg name must be string type')
  }

};

module.exports = { getStudent };
