const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const FirstNameRegex = new RegExp("^[A-Z][a-zA-Z]{2,}$");

rl.question('Enter first name ', (answer) => { 
    var result= FirstNameRegex.test(answer)
    
  console.log(` ${result},`);
if (result ==true) {
    console.log ("your input is valid");
    
} else
 { console.log (" your input is invalid");
    
}
  rl.close();
});
