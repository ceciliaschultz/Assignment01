/*****************************************************************
script.js
Maria Cecilia Schultz
******************************************************************/


// STEP 1
// let someMonth;
// function theMonth()
// {
// }

// let currentMonth;
// let summerMonth;
// let myLibraryFunction;

// STEP 2
// Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.
// numeric literal expression
// 5
// string literal expression
// 'Hello!'
// Boolean literal expression
// false
// null literal expression
// null

// STEP 3
// Give me two examples of complex / variable expressions
// let sum1 = 1+2+3+4+5;

// // Sum 1 to n 
// function sigma(n) {
//     return n*(n+1)/2;
// }
// let sum2 = sigma(5);


// STEP 4
// Declare (but do not assign) 9 variables for the following identifiers:
// First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. 
// Use Camel Casing and Hungarian Notation when naming your identifiers.
// let firstName, lastName, address, city, state, zipCode, yourAge, referralSource, mayWeContactYou;

// STEP 5
// Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
// let firstName='Maria';
// let mayWeContactYou=false;
// let yourAge=24;

// STEP 6
// Create a variable.
// Add a number and a string and display the coerced result in the browser’s console window.
// let age=10;
// console.log('Maria is ' + age + ' years old');

// STEP 7
// Create two variables.
// For the first variable, add a Boolean and a string and display the coerced result.
// For the second variable, add a number and a Boolean and display the coerced result.
// let isFileValid = false;
// console.log('Is the file valid? ' + isFileValid);
// let age = 10;
// console.log(age + true); // displays 11 

// STEP 8
// Is the following string literal valid? If not, how would you fix it?
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
// Answer: no, it is not. Fixed by escaping the single quote
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
// console.log(someString)

// STEP 9
// Create a variable that produces a null value in the console window.
// Then, create a variable that produces an undefined value in the console window.
// null value
// let nullVariable=null;
// console.log(nullVariable);
// undefined value
// let undefinedVariable;
// console.log(undefinedVariable);

// STEP 10
// Use the unary typeof operator on various literals to return the following types within the console window: 
// string, number, Boolean, object, and undefined.
// console.log(typeof 'hello'); // string
// console.log(typeof 3.14); // number
// console.log(typeof false); // boolean
// console.log(typeof null); // object
// console.log(typeof someUndefinedVariable); // undefined

// STEP 11
// Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:
// Hello Zak Ruvalcaba, welcome to the JavaScript class!
// alert('Hello ' + 'Maria' + ', welcome to the JavaScript class!');

// STEP 12
// Declare a variable called name and set it equal to your name.
// Substitute your name in the previous alert string with the variable instead.
// let name = 'Maria'
// alert('Hello ' + name + ', welcome to the JavaScript class!');

// STEP 13
// Declare a variable called course and set it equal to “JavaScript”.
// Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
// let course = 'Javascript';
// let name = 'Maria';
// alert('Hello ' + name + ', welcome to the ' + course + ' class!');

// STEP 14
// Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:
// let course = 'Javascript';
// let name = 'Maria';
// alert('Hello ' + name + '.\nWelcome to the ' + course + ' class!');

// STEP 15
// Replace the hardcoded string of your name with a prompt that asks the user for their name. 
// The prompt’s response will now be captured in the name variable.
// let name = prompt('Please enter your name: ');
// alert('Hello ' + name + ', welcome to the JavaScript class!');

// STEP 16
// Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking.
// The prompt’s response will now be captured in the course variable.
// let name = 'Maria';
// let className = prompt('Please enter the class you are taking: ');
// alert('Hello ' + name + ', welcome to the ' + className + ' class!');

// STEP 17
// Declare a variable called x and assign it a value of 10.
// Declare a variable called y and assign it a value of 20.
// Display the sum of those two numbers in the console window.
// let x= 10;
// let y= 20;
// console.log(x+y);

// STEP 18
// Declare a variable called x and assign it a value of 20.
// Add and assign 20 to that variable and display the result in the console window.
// The result should be 40.
// let x=20;
// x += 20;
// console.log(x);

// STEP 19
// Declare a variable called x and assign it a value of 20.
// Multiply and assign 5 to that variable and display the result in the console window.
// The result should be 100.
// let x = 20;
// x *=5;
// console.log(x);

// STEP 20
// Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
// Divide and assign 1 to that variable and display the result in the console window.
// The result should be 2. If you got 6.66 try again.
// let x = 20 % 3; // 2
// x /=1;
// console.log(x);

// STEP 21
// Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
// Application in index.html invokes this function
// function trueFunction() {
//     let num1=10;
//     let num2=5+5;
//     let dontCare=null; 
//     console.info(num1==num2 || dontCare.toString() == "something");
// }

// STEP 22
// Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.
// Application in index.html invokes this function
// function falseFunction() {
//     let num1=10;
//     let num2=10;
//     let dontCare; 
//     console.info(num1 != num2 && dontCare.toString() == "something");
// }