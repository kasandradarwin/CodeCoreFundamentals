// Write a function that takes a string and reverses it


//not complete:
function reverseString(str) {
    let newString= ""
    for (let i =0; i < sentence.length, i++) {
            newString +_
            newString = ("newString" + sentence[i])
        }
        return newString 
    } 
  

reverseString("hello")



/////complete

let strings = prompt("enter a sentence")
function revString(str){
    let newString ="";
    for (let i = 0; i < str.length; i++) {
        
        newString+=str[str.length-i-1]
        
    }
    return newString
}

revString(strings)

///complete

function reverseStr(str){
    return str.split("").reverse().join("")
    
}