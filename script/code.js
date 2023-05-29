//Definitions

// 1.Variables
// In JavaScript, a variable stores data that can be changed later on

// 2.Value
// Value is what you insert into a variable.

// 3.Data type
// Is the different types or kinds of data that we're gonna be working with and storing in variables

// 4.initialization
// It is when a variable is declared, it would automatically be initialized and this keeps memory for this variable.

// 5. Difference between let,var and const 
// let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used.
// Var declares a variable globally or locally.
// const is similar to let , it changes the value of a variable to never change it again.

// 6.What is a variable scope
// refers to the current context of code, which determines the accessibility of variables to JavaScript. The two types of scope are local and global: Global variables are those declared outside of a block. Local variables are those declared inside of a block

// 7.When can you decide when to use a for or while,forEach and do while loop
// depends on the criteria and what you want your loops to do, for example a "for" loop repeats until a specified condition evaluates to false. A while loop creates a loop that executes a specified statement as long as the test condition evaluates to true.

// 8.Define hoisting and variable scoping
// Hoisting is the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
// JavaScript variables have only two scopes. Global Variables: A global variable has global scope which means it can be defined anywhere in your JavaScript code. Local Variables : A local variable will be visible only within a function where it is defined.

let fullname = 'Jason Barron'

console.log(fullname)


let firstName = {name:'Jason'};
let lastName = {lastname:'Barron'}; 
let age = {age:19}
let list_of_subjects = ['Math ,English, Afrikaans,CAT']

let details = [firstName,lastName,age,list_of_subjects]

console.log(details)

let address ={

    streetname:'Mars Way',
    streetnumber:'28',
    suburb:'Bishop Lavis',
    city:'Cape Town',
    country:'South Africa',


}


console.log(address);


//function for displaying, help by imtiyaaz



function calculate() {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let operator = document.getElementById("operator").value;

    

    let result;

  
    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "**":
            result = number1**number2;
            break;
        case "/":
            result = number1 / number2
            break;
    }

    document.getElementById("result").textContent = "Result: " + result;
}


let subject = 'programming';

console.log(subject[10],subject[9],subject[8],subject[7],subject[6],subject[5],subject[4],subject[3],subject[2],subject[1],subject[0])

