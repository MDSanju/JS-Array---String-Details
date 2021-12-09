// when we want to palce serially array of string, this rule only for string
const words = ['deposit', 'balance', 'government', 'empty', 'coffee', 'annual', 'find'];
const stringSort = words.sort();
console.log(stringSort);

// this code for making sort in reverse way
const words2 = ['deposit', 'balance', 'government', 'empty', 'coffee', 'annual', 'find'];
const isReverse = words2.sort().reverse();
console.log(isReverse);



// but there is a difference rule about sorting a number array, should use a function like below
const numbers = [45, 76, 5, 74, 58, 5456, 25];
const numberSort = numbers.sort(function(a, b) {
    return a - b;
});

console.log(numberSort);