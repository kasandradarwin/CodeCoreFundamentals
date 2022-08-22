//exercise 1
const first = ["hello", 5, 'a'];
console.log(first)

//exercise 2

first[1]=6

console.log(first)






//exercise 3
const second = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//exercise 4
console.log(second.length)

//slide 46

//exercise 1
//create an array containing 0,5, 6, -12 and use a loop the compute the 
//sum of its elements
let sum = 0;
const elements = [0, 5, 6, -12];
for (let x of elements) {
    sum = (sum + x);

console.log(sum);
}


//exercise 2
//Create an array containing the words "apple", "dog", "computer", 
//"cup", and use a loop to log "[Word] has [length] characters." 
//for each word

const elements = ["apple", "dog", "computer", "cup"];

for (let word of elements) {
    console.log(`${word} has ${word.length} characters `)
}



//slide 48

//exercise 1
//create a string "hello" 
//and then use split to make an array of its characters
const phrase = "hello"
newphrase = phrase.split()
console.log(newphrase)
//exercise 2
//write a script that prompts for a sentence 
//and alerts how many words are in that sentence

sentence = prompt("Please enter a sentence");
sentence.split(" ");
console.log(sentence)


//exercise 3
//Make a string containing all the 
//numbers from 0-99. (eg. "1234")


//slide 56

//exercise 1
//create an object 'me' 
//containing your name, age, and occupation

const me = {

    name: "Kasandra"
    age: "99"
    occupation: "Technical Escalations"
}
console.log(me)


//exercise 2
//change your occupation to "javascript expert"

//exercise 3
//Add a "skills" property containing the array ['ruby','rails',javascript']


//Whats wrong? slide 58
// can't prin [obj]
let obj = {
    a:5,
    b:6
};

//console.log(obj[a]obj[b]);
//I think its trying to get the "index" of a 
//so it should either be just: console.log(obj); or
console.log(obj.a, obj.b)

3, 6?




const 
