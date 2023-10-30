document.writeln("<h1>Hello JS</h1>");
let a = "Bableshshsh";
console.log(a)
// // ! length property
// console.log(a.length);
// * slice(strat, end)
// console.log(a.slice(4,7)); // esh start and skiped to end value mean befor 7 index return 
// console.log(a.slice(5)) // sh to end 
// console.log(a.slice(-3,9))// esh
// console.log(a.slice(2,-3)) //bl
// console.log(a.slice(-4,1)) // not return anything 
// console.log(a.slice()) // Bablesh
// * substring(start, end)
// console.log(a.substring(2,4)) // bl
// console.log(a.substring(4,7)); // esh
// console.log(a.substring(5)) // sh
// console.log(a.substring(-4,3)) // Bab
// console.log(a.substring(4,-4)) // Babl
// console.log(a.substring()) // Bablesh
// * substr(start, length)
// console.log(a.substr(0,3)); // Bab
// console.log(a.substr(5,3)); // sh
// console.log(a.substr(-4,3)); // les
// console.log(a.substr(-1,1)); // h
// console.log(a.substr(-1,-6)); // not return anything
// console.log(a.substr()); // Bablesh
// console.log(a.substr(3)); // lesh
// * replace(subString, new Word)
console.log(a.replace("ab", "ZZZ"))
console.log(a.replace("sh", "XXX"))
// * replaceAll(subString, new Word)
console.log(a.replaceAll("n", "V"))
// !-------------------------------------------
// let b = "Bablesh kumar aazad";
// console.log(b.substr(8, 6)); // Kumar
// console.log(b.slice(0, 8))// Bablesh
// !--------------------------------------------
// ! Determine the largest of three number
// let c = parseInt(prompt("Enter first Number :"));97
// let d = parseInt(prompt("Enter secod Number :"));
// let e = parseInt(prompt("Enter third Number :"));
// let f = (c>d && c>e) ? (c+ " is greater") : (d>e) ? (d+ " is greater") : (e+ " is greater");
// console.log(c+", "+d+", "+e+" Here greater number is : ")
// console.log(f)
// !--------------------------------------------
// ! Checking if string is empty
// let g = prompt("Enter a string : ");
// let f = (g.length > 0) ? ("Lenght is : ") + g.length : "Lenght is 0";
// console.log(f);
// !--------------------------------------------
// ! Determine the type of variable
// var i = prompt("Enter something:");
// var numberValue = parseFloat(i);
// if (!isNaN(numberValue)) {
//     console.log("You entered a number: " + numberValue);
// } else if (i === "true" || i === "false") {
//     console.log("You entered a boolean: " + i);
// } else {
//     console.log("You entered a string: " + i);
// }
// !--------------------------------------------
// ! checking if number is odd and even
// let j = parseInt(prompt("Enter a Number : "));
// let k = (j % 2 == 0) ? "Numbere is even" : "Number is odd";
// console.log(k);
// !-------------------------------------------
// ! Checking if number is positive or negative
// let m = parseInt(prompt("Enter a Number : "));
// let n = (m >= 0) ? "Possitive" : "Number is negative";
// console.log(n);