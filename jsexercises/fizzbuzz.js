let x = prompt("Enter a number");
let y = prompt("Enter a second number");
var i = 0;

while (i < 100) {
    i++
    if (i % x == 0 && i % y == 0) {
        console.log("fizzbuzz", i);
    } else if (i % x == 0) {
        console.log("fizz", i);
    } else if (i % y == 0) {
        console.log("buzz", i);
    } else {
        console.log(i);
    }}