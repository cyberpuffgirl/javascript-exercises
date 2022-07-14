// works with punctuation
// works with upper-case letters

const palindromes = function (word) {

let editWord = word.toLowerCase().replace(/[^a-z]/g, '');

let revWord = editWord.split('').reverse().join('');

if (revWord === editWord) {
    return true;
} else {
    return false;
}

};

// Do not edit below this line
module.exports = palindromes;
