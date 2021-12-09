// showing date using a string
const date1 = new Date('2012-12-12');
console.log(date1);


// getting date using parameters almost like function parameters
const date2 = new Date(2010, 6, 5, 11, 55, 56, 90);
console.log(date2);


// compare between two dates
const date3 = new Date('2007-5-8');
const date4 = new Date(2019, 6, 5, 11, 55, 56, 90);

if (date3.getTime() < date4.getTime()) {
    console.log('valid comparison!');
}