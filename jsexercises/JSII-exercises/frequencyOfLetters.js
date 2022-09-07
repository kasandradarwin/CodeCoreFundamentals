//Write a function that prompts the user to enter
// a sentence and then return an object whose keys are 
//the letter and values are the number of occurrences of that
// letter, for example, if the user enters hello world, it will return:

//{h: 1, e: 1, l: 3, o: 2, w: 1, d: 1}



function frequencyOfLetter(){
    let sentence = prompt("Please enter a sentence");
    let obj={};
    for (let i = 0; i < sentence.length; i++) {
        const element = sentence[i];
    if (obj[element]) {
        obj[element]++
    } 
    else {
        obj[element]=1
    }
}    
    return obj

}

frequencyOfLetter()


/// attempt 2, above plus alert with most common letter. It works but could be better with the stting of the variables..


let obj = {};


function mostRecurringLetter(userInput){
   for (letter in userInput){
    let current = userInput[letter];
    let currentHighest = current[0];
    console.log(currentHighest)

    if (obj[current]){
        obj[current]++
    } else {
        obj[current]=1;
       }
   } 
   return(obj)
   
};

const newObject = mostRecurringLetter(prompt("enter a sentence"));
console.log(newObject)

let currentHighest = 0;
let mostPopularLetter = 'a';

for (let key in newObject){
    console.log("key: " + key + " newObject[key]: " + newObject[key])
if (newObject[key] >= currentHighest){
    currentHighest = newObject[key];
    mostPopularLetter = key;
    console.log(`${currentHighest} is now the currenthighest`)
} 

}
alert(`the most commonly recurring letter in your sentence is: ${mostPopularLetter} with ${currentHighest} occurences`)