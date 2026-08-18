// question-01
// var character = prompt("Enter a character:");

// if (character >= '0' && character <= '9') {
//     alert("It is a Number.");
// }
// else if (character >= 'A' && character <= 'Z') {
//     alert("It is an Uppercase Letter.");
// }
// else if (character >= 'a' && character <= 'z') {
//     alert("It is a Lowercase Letter.");
// }
// else {
//     alert("Invalid Input.");
// }

// question-02
// var num1 = prompt("Enter first number:");
// var num2 = prompt("Enter second number:");

// if (num1 > num2) {
//     alert(num1 + " is larger.");
// }
// else if (num2 > num1) {
//     alert(num2 + " is larger.");
// }
// else {
//     alert("Both numbers are equal.");
// }

// // question-03
// var num = prompt("Enter a number:");

// if (num > 0) {
//     alert("Positive Number");
// }
// else if (num < 0) {
//     alert("Negative Number");
// }
// else {
//     alert("Zero");
// }

// // question-04

// var ch = prompt("Enter a character:");

// if (
//     ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" ||
//     ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U"
// ) {
//     alert(true);
// }
// else {
//     alert(false);
// }

// // question-06
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }

// alert(greeting);

var fruits =["apple" , "banana" , "mango" , "orange" , "strawberry"];
// fruits.push("kiwi")
fruits.unshift("papaya")
console.log(fruits)