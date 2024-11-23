/*const today = new Date().getDay();// assuming monday is 1, tuesday is 2, wednesday is 3......saturday is 6 and sunday is 0

const isweekday = today >= 1 && today <= 5; //it is true for monday to friday but false saturday and sunday

//print to console
if (isweekday) {
  console.log('Today is a weekday');
} else {
  console.log('Today is not a weekday');
}*/

const today = new Date().getDay();

// Declare the boolean variable
let isWeekday = today >= 1 && today <= 5; // True if today is Monday to Friday, false otherwise

// Output the result
console.log("Is today a weekday?", isWeekday);

// invert value of variable
isWeekday = !isWeekday;

// print modified value
console.log('After inversion, is today a weekday? ', isWeekday);