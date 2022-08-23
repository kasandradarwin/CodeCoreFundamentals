//Write a code that takes in a string and then prints
// back with even letters upcased and the rest downcased. 
//For example, "hello" becomes "hElLo"

// create the string variable
// iterate through the string to determine the even letters
//capitalize only that and move to the next one



//its close but I can't quick get it to do every second letter
//it seems to do two in a row, I think its the i++ placement

let theString = prompt("enter a word or sentence");
theString = theString.toLowerCase();
let i = 0;
let x=(i%2)

while (i < theString.length){
    if (i % 2 === 1){
        let currentLetter = theString[i];
        let newLetter = theString[i].toUpperCase();
        theString = theString.replace(currentLetter, newLetter);
    } i++
console.log(i,theString[i], x)
}

console.log(theString);
