/*Write some code that keeps asking the user for book names 
until the user enters "exit". After typing exit the program 
should display all the entered book names sorted by the book 
name.*/

function sortBooks (){
    let listOfBooks = [];
    let userInput;
    let safeWord = "exit";
    while (userInput !== safeWord){
        userInput = prompt("enter a book name or enter exit").toLowerCase().trim();
        if (userInput !== safeWord){
            listOfBooks.push(userInput);
        }
    }


    listOfBooks = listOfBooks.sort()
    console.log(listOfBooks);

    return listOfBooks;
}

sortBooks()