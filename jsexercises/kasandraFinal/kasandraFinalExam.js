// 1. Sentence Smash 

// Write a function that takes an array of words and smashes 
// them together into a sentence and returns the sentence. 
//You can ignore any need to sanitize words or add punctuation, 
//but you should add spaces 
// between each word. 
//Be careful, there shouldn't be a space at the beginning
// or the end of the sentence!

// Example:
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

myArr = ['hello', 'world', 'this', 'is', 'great'];

function sentenceSmash(){
   newArr = myArr.join(" ")
   return newArr;
}

sentenceSmash()


// 2. Rock Paper Scissors

// Let's play! Write a function that will return which 
// player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

function rps(user1, user2){
    console.log(user1, user2)
    if (user1 == 'rock' && user2 == 'rock'){
        return "Draw!";
    } else if (user1 == 'paper' && user2 == 'paper'){
        return "Draw!";
    } else if (user1 == 'scissors' && user2 == 'scissors'){
        return "Draw!"; 
    } else if(user1 == 'rock' && user2 == 'paper'){
        return "Player 2 won!"; 
    } else if(user1 == 'rock' && user2 == 'scissors'){
        return "Player 1 won!"; 
    } else if(user1 == 'paper' && user2 == 'rock'){
        return "Player 1 won!"; 
    } else if(user1 == 'paper' && user2 == 'scissors'){
        return "Player 2 won!"; 
    } else if(user1 == 'scissors' && user2 == 'paper'){
        return "Player 1 won!"; 
    } else if(user1 == 'scissors' && user2 == 'rock'){
        return "Player 2 won!"; 
    } else {
        console.log("invalid, try again");
    }

}


//rps('rock','rock');
//rps('rock','paper');
//rps('rock','scissors'); //1
//rps('paper','paper'); //draw
//rps('paper','rock'); //1
//rps('paper','scissors'); //2
//rps('scissors','scissors');//draw
//rps('scissors','paper'); //1
//rps('scissors','rock'); //2