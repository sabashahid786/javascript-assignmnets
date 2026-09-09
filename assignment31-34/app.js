// Question 01

// new Date();
// console.log(new Date())

// Question 02

//  var month = new Date()
//  var months= ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sep", "oct", "nov", "dec" ]

// console.log(months[(month.getMonth())])

// Question 03
//  var day = new Date()
//  var days= ["mon", "tue","wed", "thurs","fri", "sat", "sun" ]

// console.log( "today is " + days[(day.getDay())])

// Question 04

// var today = new Date();
// var day = today.getDay();

// if (day === 0 || day === 6) {
//     document.write("It's fun day");
// }

// Question 05
// var today = new Date();
// var date = today.getDate();

// if (date <= 15) {
//     document.write("First 15 days of month");
// } else {
//     document.write("Last 15 days of month");
// }

// Question 06
// var date = new Date();

// var minutesSince1970 = Math.floor(date.getTime() / (1000 * 60));

// console.log(minutesSince1970);

// Question 07
// var today = new Date();
// var hour = today.getHours();

// if (hour < 12) {
//     alert("It's A.M.");
// } else {
//     alert("It's P.M.");
// }
// Question 08
// var laterDate = new Date(2026, 11, 31);
// console.log(laterDate);

// Question 09

    // var ramadan = new Date("June 18, 2015");
    // var today = new Date();

    // var difference = today.getTime() - ramadan.getTime();

    // var days = Math.floor(difference / (1000 * 60 * 60 * 24));

    // alert(days + " days have passed since 1st Ramadan, 2015");

// Question 10
//   var currentDate = new Date();

//     document.write("Current date: " + currentDate + "<br>");

//     var currentHour = currentDate.getHours();

//     currentDate.setHours(currentHour - 1);

//     document.write("1 hour ago, it was " + currentDate);
// Question 11

//  var currentDate = new Date();

//     document.write("Current date: " + currentDate + "<br>");

//     var currentYear = currentDate.getFullYear();

//     currentDate.setFullYear(currentYear - 100);

//     alert("100 years back, it was " + currentDate)
// Question 13
// var age = prompt("Enter your age:");

//     var currentYear = new Date().getFullYear();

//     var birthYear = currentYear - age;

//     document.write("Your age is " + age + "<br>");
//     document.write("Your birth year is " + birthYear);
// Question 04