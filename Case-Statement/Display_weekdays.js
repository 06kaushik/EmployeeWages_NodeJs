const readline = require("prompt-sync");
const prompt=readline();

let digit = prompt("Enter the digit between 1 to 7: ");

switch(parseInt(digit)) {
case 1:
      console.log("Sunday");
      break;
case 2:
      console.log("Monday");
      break;
case 3:
      console.log("Tuesday");
      break;
case 4:
      console.log("Wednesday");
      break;
case 5:
      console.log("Thrusday");
      break;
case 6:
      console.log("Friday");
      break;
case 7:
      console.log("Saturday");
      break;
default:
      console.log("Invalid Digit!");
      break;
}