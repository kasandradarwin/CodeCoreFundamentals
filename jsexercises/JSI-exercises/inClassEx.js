
//1. write a function that takes any number but always returns zero
function returnZero (num){
    return 0;
}

returnZero(5)

//2. write a function that takes a user object with 'name' and 'age' 
//properties and logs teh string "[name] is [age] years old"

const person = {name:"Kasandra", age:"100"};

function user(){

    return(`${person.name} is ${person.age} years old`)
}

user()

//3. write a function that takes a sentence, and returns an object of all of the words and their lengths

/*function sentenceLength(sentence) {
    return(sentence.length)
}
//let userInput = prompt("please enter a sentence")
let userInput = ("Please enter a sentence");
sentenceLength(userInput)*/



function senLength(str) {
    let obj = {}
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {

        let length = words[i].length; 
        obj[words[i]] = length;
         
    }
    return obj

}

let phrase = prompt("please enter a sentence");

const wordLengths = (str) => {
  let result = {};
  const arr = str.split(" ");

  arr.forEach((word) => {
    result[word] = word.length;
  });

  return result;
};

console.log(wordLengths(phrase));

// slide 47 exercise

const car = {
    doors: 4,
    speed: 30,
    park: function(){
        console.log("Parking...")
    } stop(){
        if (this.speed > 120){
            console.log("Screeeeetch!!")
        } else if (this.speed > 80) {
            console.log("RRrch")
        } else if (this.speed > 30) {
            console.log("sh")
        } else {
            console.log("Yikes, I don't know how fast I'm going!!!")
        }
    }
}

//slide 59

function map(mapArray, mapFunc) {
for (let i = 0; i < mapArray.length; i++){
    const output = [];

    return output
}
}

mapArray [1, 2, 3, 4, addOne]

const addOne = function()

/////




const addOne = function(x) {
    return x+1;
 }
 function map(arr, func){
final =[];
arr.forEach(item => {
    final.push(func(item))
});
return final;
 }
 map([1,2,3], addOne);

 map(['hello', 'data', 'eat cheese', 'walking'],
    function(string) (return string.length) }

 )  


 // set interval count up 1 every second

let sec = 0;

setInterval() => (
    console.log(sec++);
), 1000;
)