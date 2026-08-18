// // question-01
// var studentNmaes = new Array()

// question-02
// var studentNames =[]

// question-03
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// question-04
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// question-05
// var booleanArray = [true, false];

// question-06
// var mixedArray = ["Ali", 20, true, "Karachi", 95];

// question-07
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h2>Educational Qualifications in Pakistan</h2>");

// for (var i = 0; i < qualifications.length; i++) {
//     document.write((i + 1) + ") " + qualifications[i] + "<br>");
// }

// question-08
// var studentNames = ["Ali", "Ahmed", "Sara"];

// var scores = [420, 350, 450];

// var totalMarks = 500;

// for (var i = 0; i < studentNames.length; i++) {
//     var percentage = (scores[i] / totalMarks) * 100;

//     document.write(
//         "Score of " + studentNames[i] + " is " + scores[i] +
//         ". Percentage: " + percentage + "%<br>"
//     );
// }

// question-10
// var scores = [320, 450, 280, 390, 410];

// scores.sort(function(a, b) {
//     return a - b;
// });

// document.write("Sorted Scores: " + scores);

// question-11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// var selectedCities = cities.slice(1, 4);

// document.write("Cities: " + cities + "<br>");
// document.write("Selected Cities: " + selectedCities);

// question-12
// var devices = [];
// devices.push("Laptop");
// devices.push("Mobile");
// devices.push("Tablet");
// devices.push("Smart Watch");

// document.write("Devices: " + devices + "<br><br>");


// document.write("First Device: " + devices.shift() + "<br>");
// document.write("Second Device: " + devices.shift() + "<br>");
// document.write("Third Device: " + devices.shift() + "<br>");
// document.write("Fourth Device: " + devices.shift());

// question-15
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");

// for (var i = 0; i < manufacturers.length; i++) {
//     document.write("<option>" + manufacturers[i] + "</option>");
// }

// document.write("</select>");