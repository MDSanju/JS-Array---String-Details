// using split() for breaking words
const myDream = 'I will migrate to Canada with my family to live there permanently very soon';
const words = myDream.split(' ');
console.log(words);

// split() this time for gayebul hawa a particular letter
const rhyme = 'Amader Deshe Hobe Sei Chele Kobe Kothay Na Boro Hoye Kaje Boro Hobe';
const withoutE = rhyme.split('e');
console.log(withoutE);



// slice() to target a particular point to last particular point and show only these letters
const smallSlice = 'HelloWorld';
const slice = smallSlice.slice(1, 6);
console.log(slice);



// substr() is simmiler like slice(), but differece is substr() defined exact indexOf number
const sub = 'HelloWorld';
const substr = sub.substr(1, 6);
console.log(substr);

// substring() works as same as slice()
const helloWorld = 'HelloWorld';
const asLikeSlice = helloWorld.substring(1, 6);
console.log(asLikeSlice);



// concat() is used to attach more strings into one single string
// const first = 'Vancouver';
// const second = ' BC, Canada!';

// we can do it like-
// const fullString = first + second;



// but better way to do it using concat()
// const fullString = first.concat(second);
// console.log(fullString);

// we can do it for many more times, like-
const first = 'Vancouver';
const second = ' BC,';
const third = ' Canada';
const last = ' is';

const fullString = first.concat(second).concat(third).concat(last).concat(' my first choice!');
console.log(fullString);



// .join() is used to join more than one string value into a single string
const englishWords = ['attach', 'aberration', 'coherent', 'extol', 'inhibit'];
// const allJoined = englishWords.join('');
// const allJoined = englishWords.join(' ');
// const allJoined = englishWords.join(', ');
const allJoined = englishWords.join(' www.');
console.log(allJoined);