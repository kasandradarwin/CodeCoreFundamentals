/* Write a function that takes in an array and returns another whose 
first element is the smallest number and whose second element is the 
largest number.

For example if you call the function with array [3,64,3,56,34,12,5,0] you should get back an array [0, 64] */

const number = [3,64,3,56,34,12,5,0];

const mix =[(number.indexof(Math.min(number))),(number.indexof(Math.max(number))];


/// otro manera

const number = [3,64,3,56,34,12,5,0];
number.sort();
last = (number.length)-1;

const newNumber = [number[0], number[last]]
console.log(newNumber);

//attempt 3

const number = [3,64,3,56,34,12,5,0];
let newArr = [];
number.sort()
let small = number[0];
newArr.push(small);
let final = (number.length)-1;
let big = number[final];
console.log(number);

for (let i = 1; i< number.length; i++){
    console.log(number[i])
    if (number[i] >= big) {
        big = number[i];  
    };
}
newArr.push(big);
    console.log(newArr);
