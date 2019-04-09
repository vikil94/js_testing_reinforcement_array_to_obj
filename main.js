function arrayToObj() {
    // your code goes here  
    return array.reduce((accumulator, i) => {
        accumulator[i[0]] = i[1];
        return accumulator;


    }, {});




}

module.exports = arrayToObj;