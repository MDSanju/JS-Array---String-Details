// Array.isArray() is used to check whether that's array or not
function letters(englishCharacters) {
    // apply Array.isArray() which is boolean value will provide
    if (Array.isArray(englishCharacters) == false) {
        return 'Please provide an Array';
    }
    let result = englishCharacters[0];
    for (const letter of englishCharacters) {
        if (letter.length > result.length) {
            result = letter;
        }
    }
    return result;
}

const declaredLetters = ['a', 'ab', 'abc', 'abcd', 'abcde'];
// const checkAll = letters(declaredLetters);
const checkAll = letters(45468);
console.log(checkAll);




// so many rules to get the result whether the particular array value is in the var or not

// using indexOf()
const first = ['html', 'css', 'bootstrap', 'javascript'];
for (each of first) {
    if (each.indexOf('javascript') != -1) {
        console.log('Yes, JavaScript is exist');
    }
}

// using includes()
const second = ['html', 'css', 'bootstrap', 'javascript', 'react'];
if (second.includes('react') == true) {
    console.log('Yeah we got the React!');
}

// using concat()
const firstNumOFArray = [1, 3, 5, 7];
const secondNumOfArray = [2, 4, 6, 8];
const combined = firstNumOFArray.concat(secondNumOfArray);
console.log(combined);