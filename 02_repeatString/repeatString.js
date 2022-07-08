const repeatString = function(str, num){
// will store final return //
    let result = []; 

if (num < 0) {
    return 'ERROR'
} else {
    // loop will keep returning the str up until the num //
    for (let number = 0; number < num; number++) {
    // result will store each str iteration //
    result.push(str);
    }
}


return result.join('');
};

// Do not edit below this line
module.exports = repeatString;
