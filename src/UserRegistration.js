
const read = require('readline-sync');
const FirstNameRegex = new RegExp("^[A-Z][a-zA-Z]{2,}$");
var FirstName = read.question('Enter your Name')

var result = FirstNameRegex.test(FirstName)

console.log(` ${result},`);


if (result == true) {
    console.log("your input is valid");

} else {
    console.log(" your input is invalid");
}


const LastNameRegex = new RegExp("^[A-Z][a-zA-Z]{2,}$");
var LastName = read.question('Enter Last Name')
var result1 = LastNameRegex.test(LastName)

console.log(` ${result1},`);


if (result1 == true) {
    console.log("your input is valid");

} else {
    console.log(" your input is invalid");

}
const EmailRegex = new RegExp('^[a-zA-Z0-9]+([_+-.]{0,1})([@]{1})[a-z0-1]+.[a-z]+(.?)([a-z]{2}?)$');
var Email = read.question('Enter your email')
var result2 = EmailRegex.test(Email)

console.log(` ${result2},`);

if (result2 == true) {
    console.log("your input is valid");

} else {
    console.log(" your input is invalid");

}
const PhoneRegex = new RegExp('^([9]{1}[1]{1})\\s{0,1}[0-9]{10}$');
var Phone = read.question('Enter your phone no')
var result3 = PhoneRegex.test(Phone)

console.log(` ${result3},`);

if (result3 == true) {
    console.log("your input is valid");

} else {
    console.log(" your input is invalid");

}




