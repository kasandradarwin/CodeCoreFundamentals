//Guess a random number between 1 and 10

//Just for fun (or fun thievery) I added a cheater that prepopulates
// the prompt field with the correct number

const randomNum = Math.floor(Math.random() * 10) + 1;

let guess = parseInt(prompt("Guess a number between 1 and 10", randomNum))

console.log(randomNum);

if (randomNum === guess) {
    console.log("You guessed it!");
} else {
    console.log("try again")
}
