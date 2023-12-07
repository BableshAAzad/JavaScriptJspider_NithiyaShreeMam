// ^ DOM methods
//? getElementById()
//? getElementsByClassName()
//? getElementsByTagName()
//? querySelector()
//? querySelectorAll()

//& getElementById() : individual element
// console.log(document.getElementById("para1"));
//& getElementsByClassName() : HTMLcollection
// let a = document.getElementsByClassName("Para");
// console.log(a);
// ~ to array or not 
// console.log(Array.isArray(a));
// ~ convert impure array to pure array
// let arr = Array.from(a);
// console.log(arr);
// console.log(Array.isArray(arr));
//& getElementsByTagName() : HTMLCollection
// console.log(document.getElementsByTagName("p"));
// ~ to array or not 
// let a = document.getElementsByTagName("p");
// console.log(Array.isArray(a));
// ~ convert impure array to pure array
// let arr = Array.from(a);
// console.log(arr);
// console.log(Array.isArray(arr));
// ^ Onluy query selector to be taken symbols like id and class
//& querySelector() : individual element
// console.log(document.querySelector("#para1"));
// console.log(document.querySelector(".pa"));
// console.log(document.querySelector("p"));

// & querySelectorAll() : NodeList
// console.log(document.querySelectorAll("p"));
// console.log(document.querySelectorAll(".pa"));
// console.log(document.querySelectorAll("#para1"));
// let c = document.querySelectorAll(".pa");
// console.log(c);
// console.log(Array.isArray(c));
// let crr = Array.from(c);
// console.log(crr);
// console.log(Array.isArray(crr));
