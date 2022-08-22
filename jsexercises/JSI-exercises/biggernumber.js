//Write a Javascript code that defines two variables x and y 
//with numbers and then prints to the console the larger
// of the two number printing. For instance print 
//"The larger number is x"

let x = prompt("Please enter a number. eg. 9")
let y = prompt("Please enter a second number. eg. 100")

if (x > y){
    console.log(`${x}(x) is larger than ${y}(y)`);
} else if (y > x){
    console.log(`${y}(y) is larger than ${x}(x)`);
} else {
    console.log(`${x}(x) and ${y}(y) are the same`);
}
