// Question-01
// var firstName = prompt("Enter your first name")
// var secondName = prompt("Enter your second name")
// var fullName = firstName + " " + secondName
// alert ( "Greeting " + fullName)


// Question-02
// var phone = prompt("Enter your favorite mobile phone model:");

// var length = phone.length;

// alert("My favorite phone is: " + phone);
// alert("Length of string: " + length);

// Question-03
// var city = "Pakistan"
// var index = city.indexOf("n")
// console.log(index)


// Question-04
// var name = "Hello world"
// var final = name.lastIndexOf ("l")
// console.log(final)

// Question-05
// var word = "Pakistani";

// var character = word[3];
// console.log(character)

// Question-06
// same as question no 1

// Question-07
// var city = "Hyderabad"
// var final = city.replace ("Hyder" , "Islam")
// console.log(final)

// Question-08
// var line = "Ali and Sami are best friends. They play cricket and football together"
// var line1 = line.replace (/and/g, "&")
// console.log(line1)

// Question-09
// console.log("472")
// console.log(typeof ("472"))
// console.log(parseInt("472"))
// console.log(typeof (parseInt ("472")))

// Question-10
// var short = "peanuts"
// var long = short.toUpperCase()
// console.log(long)

// Question-11
// var name = "javascript"
// var result = name[0].toUpperCase() + name.slice(1).toLowerCase()
// console.log(result)

// Question-12
// var num =  3536
// var result = num.toString()
// console.log(result, typeof result)

// Question-13

// var username = prompt("Enter your username:");

// for (var i = 0; i < username.length; i++) {
//     var code = username.charCodeAt(i);

//     if (code === 33 || code === 44 || code === 46 || code === 64) {
//         username = prompt("Enter a valid username:");
//         break;
//     }
// }

// document.write("Username: " + username);


// Question-14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]; var userInput = prompt("Enter an item to search:"); var found = false; for (var i = 0; i < A.length; i++) { if (A[i].toLowerCase() === userInput.toLowerCase()) { found = true; break; } } if (found) { alert("Yes, " + userInput + " is available in the list."); } else { alert("No, " + userInput + " is not available in the list."); }
// Question-16
// var university = "University of Karachi"; var arr = university.split(" "); for (var i = 0; i < arr.length; i++) { document.write(arr[i] + "<br>"); }


// Question-17
// var word = "Pakistan";

// var character = word.lastIndexOf(Pakistan);
// console.log(character)
