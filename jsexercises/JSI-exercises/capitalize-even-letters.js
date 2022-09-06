//Write code that takes in a string and then prints
// back with even letters upcased and the rest downcased. 
//For example, "hello" becomes "hElLo"


//its close but I can't quite get it to do every second letter
//it seems to do two in a row, I think its the i++ placement

//should print: hElLo

let theString = prompt("enter a word or sentence");
theString = theString.toLowerCase();
let i = 0;


while (i < theString.length){
    if (i % 2 === 1){
        let currentLetter = theString[i];
        let newLetter = theString[i].toUpperCase();
        theString = theString.replace(currentLetter, newLetter);
    } 
i++
}

console.log(theString);

// attempt 2:

let theString = prompt("enter a word or sentence");
//theString = theString.toLowerCase();
let i = 0;
let returnString = "";

while (i < theString.length){

    if (i % 2 == 1) {
        returnString +=theString[i].toUpperCase()
    } else if (i % 2 == 0) {
        returnString += theString[i].toLowerCase()
    }
    i++
} 

console.log(returnString)

////attempt 3

let theString="helloooooooo";
theString = theString.toLowerCase().split("");

function capString(){
    for (i=1; i<theString.length; i+=2){
        theString[i] = theString[i].toUpperCase();
        console.log("test " + theString[i])
    }

    return theString.join("");

}

capString()