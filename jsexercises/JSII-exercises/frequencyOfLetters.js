//Write a function that prompts the user to enter
// a sentence and then return an object whose keys are 
//the letter and values are the number of occurrences of that
// letter, for example, if the user enters hello world, it will return:

//{h: 1, e: 1, l: 3, o: 2, w: 1, d: 1}



function frequencyOfLetter(){
    let sentence = prompt("Please enter a sentence");
    sentence = sentence.replace(/\s/g, '');
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
