// showing values of array by applying two points of index numbers
// using slice(). slice() dosen't change the values of the main array
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const numberSliced = numbers.slice(3, 7);
console.log(numberSliced);
console.log(numbers);





// showing values of an array by appling a index number and the delete count number
// using .splice(), it totally removes form the main array by index number and next delete count number
const spliceNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const spliced = spliceNumbers.splice(3, 3);
console.log(spliced);
console.log(spliceNumbers);

// .splice() this time for removing and adding at the same time
// remove from this array
const spliceNumbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// remove 4 elements and add 11, 22, 33, 44 in place of those elements
// const spliced2 = spliceNumbers2.splice(2, 4, 11, 22, 33, 44);
// or we also can do it just don't delete but add
const spliced2 = spliceNumbers2.splice(2, 0, 11, 22, 33, 44);
console.log(spliced2);
console.log(spliceNumbers2);