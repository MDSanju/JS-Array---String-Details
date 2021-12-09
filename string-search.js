const products = [
    'Dell hardcore I29 200GB laptop ',
    'iPhone 12 pro max camera phone',
    'Apple Macbook Pro Laptop',
    'Hp EliteBook Laptop',
    'LG supernova laptop',
    'Canon DSLR Camera',
    'Samsung s20 ultra phone',
    'Hp Laptop version Desktop',
];

const searching = 'LAPTOP';
const getResult = [];

// for (const singleProduct of products) {
//     if (singleProduct.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
//         getResult.push(singleProduct);
//     }
// }

// console.log(getResult);



// same work is done using different code, using includes()
for (const singleProduct of products) {
    if (singleProduct.toLowerCase().includes(searching.toLowerCase())) {
        getResult.push(singleProduct);
    }
}

console.log(getResult);



// using startsWith() to get same keyword with products if It is in first word
const productList = [
    'iPhone 6s',
    'iPhone 12 pro max camera phone',
    'Apple Macbook Pro Laptop',
    'Hp EliteBook Laptop',
    'iPhone 8 plus black',
    'Canon DSLR Camera',
    'iPhone 11 pro max',
    'iPhone X',
];

const toSearch = 'iPHONE';
const allSearchResults = [];

// startsWith() using
for (const Product of productList) {
    if (Product.toLowerCase().startsWith(toSearch.toLowerCase())) {
        allSearchResults.push(Product);
    }
}

console.log(allSearchResults);



// using endsWith() to get last word of the string
const allProducts = [
    'iPhone 6s',
    'iPhone 12 pro max camera phone',
    'Apple Macbook Pro Laptop',
    'Hp EliteBook Laptop',
    'iPhone 8 plus black',
    'Asus laptop',
    'iPhone 11 pro max',
    'Dell laptop',
];

const searchTheLastWord = 'laptop';
const getLastWord = [];

// using endsWith()
for (const ProductName of allProducts) {
    if (ProductName.toLowerCase().endsWith(searchTheLastWord.toLowerCase())) {
        getLastWord.push(ProductName);
    }
}

console.log(getLastWord);