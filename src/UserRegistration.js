
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






