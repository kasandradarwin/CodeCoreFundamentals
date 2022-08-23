// Given an object that looks like:
//names = { mike: 2, john: 3, jen: 5, eli: 1}
//Write a function that takes an object above and returns a 
//string noting the most popular name. It should return a string that 
//looks like the most popular name is jen


names = { mike: 2, john: 3, jen: 5, eli: 1}
let currentHighest = 0;

for(var key in names){
if (names[key] > currentHighest){
        currentHighest = (names[key]);
       
        theAnswer = `the highest is ${key} with ${(names[key])}`;
    } 
}
console.log(theAnswer);





