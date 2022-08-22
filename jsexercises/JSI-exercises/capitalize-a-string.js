//There is no capitalize method for Javascript strings. 
// Write a function that capitalizes a given string.

//let theString = prompt("Please enter a word or sentence.")

let theString =prompt("Enter a word or sentence");

function capitalizeAString(theString) {
    theString = theString.toLowerCase();
    theString.split();
    let firstLetter = theString[0];
    let newFirstLetter = theString[0].toUpperCase();
    theString = theString.replace(firstLetter, newFirstLetter);
    
    console.log(theString);

  
}

capitalizeAString(theString);