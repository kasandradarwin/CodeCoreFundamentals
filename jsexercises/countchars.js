
//write a function, countChars, that takes a 
//string and returns an object containing the count 
//of each character

const output = {}
const countChars = function(str) {
    for (let i = 0; i < str.length; i++) {
        if(output[str[i]]{
            output[str[i]]++
        }
        else {
            output[str[i]] = 1

        }
    }
    return output
}