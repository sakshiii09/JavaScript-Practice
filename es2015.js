//* ======================================
//* Modern JavaScript - EcmaScript 2015
//* =====================================

//* ======================================
//* LET AND CONST - EcmaScript 2015
//* =====================================

//? let Keyword:  The let keyword is used to declare variables with block scope. Variables declared with let are mutable, meaning their values can be reassigned.
//? const Keyword: The const keyword is used to declare variables with block scope, but once a value is assigned to a const variable, it cannot be reassigned. const variables are immutable.

//* ==========================================
//* TEMPLATE STRINGS - EcmaScript 2015
//* =========================================

//? In ECMAScript 6 (ES6), template strings, also known as template literals, provide a convenient and flexible way to create strings in JavaScript. Template strings are enclosed in backticks (``) rather than single or double quotes.

// let firstName = "dan";
// let lastName = "humprey";

// // Using template string for string interpolation
// let fullName = firstName + lastName;
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

//? String Interpolation:  Template strings support string interpolation, allowing you to embed expressions directly within the string. Interpolated expressions are enclosed in ${}

// let age = 29;

// String interpolation with variable
// let message = `I am ${age} years old.`;
// console.log(message);

// Multi-line Strings: Template strings make it easy to create multi-line strings without the need for concatenation or escape characters.

// console.log(multiLineString);

//? Expression Evaluation: Template expressions can include any valid JavaScript expression.

//! Practice Time
// console.log("5 * " + num + " = " + 5 * num);
// num = 100;
// console.log(`5 + ${num} = ${5 * num} `);

//? Advantages:
//? Readability: Template strings make the code more readable, especially for complex string constructions.

//? Conciseness: They eliminate the need for explicit string concatenation and reduce the use of escape characters.

//? Expression Flexibility: Any JavaScript expression can be embedded within ${}.

//? Multi-line Support: Creating multi-line strings is more straightforward.

//* ==========================================
//* DEFAULT Parameters
//* =========================================

//? In ECMAScript 6 (ES6), default parameters were introduced, providing a more concise way to handle function parameter defaults. Default parameters allow you to specify default values for function parameters in the function declaration itself. If a parameter is not provided when the function is called, the default value is used.

//? Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

//! Write a function to find sum of two numbers? What if during function call user only passed one argument?

// function sum(a, b = 10) {
//   return a + b;
// }
// console.log(sum(10, 40));

//* ==========================================
//*  FAT ARROW FUNCTION
//* =========================================

//? In ECMAScript 6 (ES6), arrow functions, also known as fat arrow functions, were introduced as a concise way to write anonymous functions.

// const sum = function (a, b) {
//   let result = `The sum of ${a} and ${b} is ${a + b}.`;
//   console.log(result);
// };

// sum(5, 5);

//! How to convert the same in fat arrow function
// Syntax
// const functionName = (param1, param2, ...) => {
//     // Function body
//     return result; // Optional
//   };

const sum = (a, b) => {
  let result = `The sum of ${a} and ${b} is ${a + b}.`;
  console.log(result);
};
sum(5, 5);
// todo NOTES

//🚀 1: If the function body consists of a single expression, the braces {} and the return keyword can be omitted.
const sum1 = (a, b) => `The sum of ${a} and ${b} is ${a + b}`;
console.log(sum1(15, 5));

//🚀 2: If there is only one parameter, the parentheses () around the parameter list can be omitted.
const square = (a) => `The square of ${a} is  ${a * a}`;
console.log(square(5));

//🚀 3: If there are no parameters, use an empty set of parentheses ().
const greet = () => console.log("Plz LIKE SHARE & SUBSCRIBE!");
greet();