// using arguments to do sum through a function without parameters
function addNumbers() {
    // console.log(arguments[2]);
    let result = 0;
    for (const number of arguments) {
        result = result + number;
    }
    return result;
}

const sum = addNumbers(15, 10, 25, 50, 75, 15, 10);
console.log(sum);





// another example of it
function getFullName(firstName, lastName) {
    // const fullName = firstName + ' ' + lastName;
    let fullName = '';
    for (const i of arguments) {
        fullName = fullName + i + ' ';
    }
    return fullName;
}

const myName = getFullName('MD', 'Mominul', 'Islam', 'Sanju');
console.log(myName);