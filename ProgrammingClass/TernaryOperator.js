// let input = prompt("Enter dose detail(1/2/booster) : ");
// let a = (input == 1) ? "Take Dose 2" : (input == 2) ? "Take Booseter" : (input == "booster") ? "Take Precaution" : "Take First Dose";
// console.log(a);
// ! truty and falsy values
// & truty value
// console.log(Boolean(true))
// console.log(Boolean(1))
// console.log(Boolean(" "))
// console.log(Boolean("hello"))
// console.log(Boolean(-1))
// console.log(Boolean(1n))
// console.log(Boolean({}))
// console.log(Boolean([]))
// console.log(Boolean())

// & falsy value
// console.log(Boolean(false))
// console.log(Boolean(0))
// console.log(Boolean(""))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(-0))
// console.log(Boolean())



// ^ Convert firstChar and lastChar to uppercase
// let a = "bablesh kumar aazad";
// let temp = a.split(" ");
// console.log(temp)
// let result = temp.map((ele) => {
//     let x = ele.slice(0, 1).toUpperCase();
//     let y = ele.slice(ele.length - 1, ele.length).toUpperCase();
//     let z = ele.slice(1, ele.length - 1);
//     return x + z + y;
// })
// console.log(result);

// ^ create a object length as a value 
// let obj = {};
// temp.map((ele)=>{
//    obj[ele] = ele.length;
// })
// console.log(obj);

// ^ convert vowels as uppeerCase
// let a = "bablesh kumar aazad";
// let temp = a.split(" ");
// console.log(temp)
// let vowels = temp.map((ele) => {
//     let x = ele.split("").map((val) => {
//         if (val == 'a' || val == 'e' || val == 'i' || val == 'o' || val == 'u') {
//             return val.toUpperCase();
//         } else {
//             return val;
//         }
//     });
//     return x.join("");
// })
// console.log(vowels);
//^ -----------------------------------
// var a = 10;
// function demo(a){
//     console.log(a);
//     var a = 20;
// }
// demo();
// ^------------------------------------
// let sentace = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, praesentium.";
// let temp = sentace.split(" ");

// console.log(temp);

let a = 30;
let b = Number(30);
let c = 30;
console.log(a==b);
console.log(a===b);
console.log(c===b);


