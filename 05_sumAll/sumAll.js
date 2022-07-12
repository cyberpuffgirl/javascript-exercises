const sumAll = function(start, end) {
let arr = []; 
let sum = 0; 

if (start < 0 || end < 0 || typeof start !== 'number'|| typeof end !== 'number') {
    return 'ERROR'
} else if (start > end) {
    for (let i = end; i <= start; i++) {
        arr.push(i)
    }
} else {
    for (let i = start; i <= end; i++) {
    arr.push(i)
    }
}

for (let elem of arr) {
    sum += elem; 
}
return sum;

};

// Do not edit below this line
module.exports = sumAll;
