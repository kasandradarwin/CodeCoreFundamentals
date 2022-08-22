// write a piece of code that asks for the age of the users car, then print if it is very old, old or future

const year = parseInt(prompt("What year is your car?"))

if (year < 2000) {
    console.log("your car is very old");
} else if (year < 2010) {
    console.log("your car is old!");
} else if (year < 2023) {
    console.log("your car is new!");
} else {
    console.log("Your car is future!");
}
