/*Prompt the user for an input sentence and then alert 
the user with the most recurring letter in the input. 
You should alert something like the most recurring letter 
in your sentence is 'o'

[hint] before starting to write code, write down the step by step 
solution in words such as:

take input from the user
store the input in a variable
get the letter frequency from the input
... Then think of the type of values (such as string or number) 
or data structures (such as arrays or objects) to accomplish each step.
After that, go ahead and start to implement your solution with code. */
let mostPop;
let sentence = "hello world";
letter = sentence.trim().split("");

for (letter in sentence){
    console.log(letter)
    if (letter && (letter.count <= mostPop)){
        letter++;
        console.log(`${letter} is still the most popular`)
    } else if (letter && letter.count > mostPop) {
        letter++;
        mostPop = letter;
        console.log(`${letter} is now the most popular`)
    } else {
        letter=1
        console.log(`else statement`)
        }
    } console.log(letter);

//alert(`The most commonly recurring letter in your sentence was ${mostPop}`)

//incomplete 
let mostPop;
let sentence = "hello my friends hows are you";
let obj ={};



function mostRecurring (){
    let letter = sentence.trim().split("");
    for (i=0; i<sentence.length; i++){
        console.log(sentence)
        if (sentence[i] && (letter.count <= mostPop)){
            console.log(`${letter[i]} is still the most popular`)
        } else if (letter[i] && letter> mostPop) {
            letter[i]++;
            mostPop = letter;
            obj.push(letter);
            console.log(`${letter} is now the most popular`)
        } else {
            letter=1
            console.log(`else statement`)
            }
       } return letter;
  }

mostRecurring();


//else if (letter[i] >= mostPop) {
    console.log(mostPop)
    mostPop = letter[i];
} 
// console.log(`The most recurring letter in your sentence is ${popLetter}`)


/*mostRecurring()

names = { mike: 2, john: 3, jen: 5, eli: 1}
let currentHighest = 0;

for(var key in names){
if (names[key] > currentHighest){
        currentHighest = (names[key]);
       
        theAnswer = `the highest is ${key} with ${(names[key])}`;
    } 
}
console.log(theAnswer);*/
